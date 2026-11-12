import { useEffect, useId, useRef, useState, type FormEvent, type ReactElement } from "react";
import { ArrowLeft, BadgeCheck, Fingerprint, KeyRound, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormField } from "./FormField";
import { OnboardingLayout, StepScreen } from "./OnboardingLayout";
import { RecoveryOptions } from "./RecoveryOptions";
import { SecurityExplanation } from "./SecurityExplanation";
import { SuccessConfirmation } from "./SuccessConfirmation";
import { VerificationMethodCard } from "./VerificationMethodCard";
import { VerificationStatus } from "./VerificationStatus";
import { DemoScenarioSelector } from "./DemoScenarioSelector";
import { METHODS, type MethodKey, type ScenarioKey } from "./verification";

export type FlowStep =
  | "account"
  | "verify"
  | "checking"
  | "additional"
  | "additional-checking"
  | "failed"
  | "assist"
  | "complete"
  | "landing";

const PROGRESS: Record<FlowStep, number> = {
  account: 0,
  verify: 1,
  checking: 1,
  failed: 1,
  assist: 1,
  additional: 2,
  "additional-checking": 2,
  complete: 3,
  landing: 3,
};

const METHOD_ICONS: Record<MethodKey, ReactElement> = {
  passkey: <Fingerprint className="size-5" />,
  credential: <BadgeCheck className="size-5" />,
  other: <KeyRound className="size-5" />,
};

const MAX_RETRIES = 2;
const CHECK_MS = 1800;
type Values = { first: string; last: string; email: string };
type Field = keyof Values;

function validate(v: Values) {
  const e: Partial<Record<Field, string>> = {};
  if (!v.first.trim()) e.first = "Enter your first name.";
  if (!v.last.trim()) e.last = "Enter your last name.";
  if (!v.email.trim()) e.email = "Enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()))
    e.email = "Check the email format, for example name@example.com.";
  return e;
}

/**
 * OnboardingFlow — the simulated adaptive onboarding journey.
 * `embedded` + `initialStep` render a static screen for case-study mockups.
 * All outcomes come from the visible DemoScenarioSelector; nothing is random.
 */
export function OnboardingFlow({
  embedded = false,
  interactive = !embedded,
  initialStep = "account",
  initialMethod = null,
  initialScenario = "A",
}: {
  embedded?: boolean;
  interactive?: boolean;
  initialStep?: FlowStep;
  initialMethod?: MethodKey | null;
  initialScenario?: ScenarioKey;
}) {
  const instanceId = useId();
  const seeded = initialStep !== "account";
  const [step, setStep] = useState<FlowStep>(initialStep);
  const [values, setValues] = useState<Values>(
    seeded
      ? { first: "Sam", last: "Keller", email: "sam.keller@example.com" }
      : { first: "", last: "", email: "" },
  );
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [method, setMethod] = useState<MethodKey | null>(initialMethod);
  const [scenario, setScenario] = useState<ScenarioKey>(initialScenario);
  const [retries, setRetries] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);
  const H = embedded ? "h2" : "h1";

  const errors = validate(values);
  const showError = (f: Field) => (touched[f] || submitted ? errors[f] : undefined);

  useEffect(() => {
    if (!interactive) return;
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    root.current?.querySelector<HTMLElement>("[data-step-heading]")?.focus();
  }, [step, interactive]);

  useEffect(() => {
    if (!interactive || (step !== "checking" && step !== "additional-checking")) return;
    const t = setTimeout(() => {
      if (step === "additional-checking") return setStep("complete");
      setStep(scenario === "A" ? "complete" : scenario === "B" ? "additional" : "failed");
    }, CHECK_MS);
    return () => clearTimeout(t);
  }, [step, scenario, interactive]);

  const restart = () => {
    setStep("account");
    setValues({ first: "", last: "", email: "" });
    setTouched({});
    setSubmitted(false);
    setMethod(null);
    setRetries(0);
  };

  const onAccountSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (Object.keys(errors).length === 0) setStep("verify");
  };

  const bind = (f: Field, label: string, extra: object = {}) => ({
    id: `${instanceId}-${f}`,
    label,
    value: values[f],
    ...(showError(f) ? { error: showError(f)! } : {}),
    onChange: (ev: React.ChangeEvent<HTMLInputElement>) => {
      const v = ev.currentTarget.value;
      setValues((p) => ({ ...p, [f]: v }));
    },
    onBlur: () => setTouched((p) => ({ ...p, [f]: true })),
    ...extra,
  });

  const back = (to: FlowStep, label = "Back") => (
    <Button type="button" variant="ghost" onClick={() => setStep(to)}>
      <ArrowLeft className="size-4" aria-hidden /> {label}
    </Button>
  );

  const checking = (title: string, lead: string, onCancel: () => void) => (
    <StepScreen
      title={title}
      lead={lead}
      next="You will see the result here automatically."
      headingLevel={H}
    >
      <div
        role="status"
        className="flex items-center gap-3 rounded-lg border border-border bg-secondary px-4 py-4 text-sm"
      >
        <Loader2 className="size-4 text-primary motion-safe:animate-spin" aria-hidden />
        <span>Checking. This takes a few seconds.</span>
        <VerificationStatus status="in-progress" className="ml-auto" />
      </div>
      <div className="mt-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </StepScreen>
  );

  let body: ReactElement;
  switch (step) {
    case "account":
      body = (
        <StepScreen
          title="Let's get you started."
          lead="Create your account in a few simple steps."
          next="You will choose how to verify it's you."
          headingLevel={H}
        >
          <form onSubmit={onAccountSubmit} noValidate className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField {...bind("first", "First name", { autoComplete: "given-name" })} />
              <FormField {...bind("last", "Last name", { autoComplete: "family-name" })} />
            </div>
            <FormField
              {...bind("email", "Email address", {
                type: "email",
                autoComplete: "email",
                hint: "We only use this to create your demo account.",
              })}
            />
            <Button type="submit" className="w-full">
              Continue
            </Button>
          </form>
        </StepScreen>
      );
      break;
    case "verify":
      body = (
        <StepScreen
          title="Verify it's you."
          lead="We ask once, using a method that suits you, so we can protect your account from misuse."
          next="We check your choice and tell you if anything else is needed."
          headingLevel={H}
        >
          <fieldset className="space-y-3">
            <legend className="sr-only">Verification method</legend>
            {METHODS.map((m) => (
              <VerificationMethodCard
                key={m.key}
                name={`${instanceId}-method`}
                value={m.key}
                title={m.title}
                description={m.description}
                {...(m.tag ? { tag: m.tag } : {})}
                icon={METHOD_ICONS[m.key]}
                selected={method === m.key}
                onSelect={(v) => setMethod(v as MethodKey)}
              />
            ))}
          </fieldset>
          <p className="mt-3 text-xs text-muted-foreground">
            Passkey and credential steps are simulated in this demonstration.
          </p>
          <div className="mt-4">
            <SecurityExplanation>
              <p>
                Different accounts need different levels of confidence. Some are met by a passkey;
                others need a verified identity credential.
              </p>
              <p>Where an extra step is needed, we say so and explain why.</p>
            </SecurityExplanation>
          </div>
          <div className="mt-6 flex items-center justify-between gap-3">
            {back("account")}
            <Button type="button" disabled={!method} onClick={() => setStep("checking")}>
              Continue
            </Button>
          </div>
        </StepScreen>
      );
      break;
    case "checking":
      body = checking(
        "Checking your method",
        "We are confirming the method you chose. Please keep this page open.",
        () => setStep("verify"),
      );
      break;
    case "additional":
      body = (
        <StepScreen
          title="One more check is needed."
          lead="Your chosen method is fine, but this account needs a stronger confirmation before it can be used."
          next="After the extra step you will go straight to your confirmation."
          headingLevel={H}
        >
          <div className="mb-4">
            <VerificationStatus status="additional" />
          </div>
          <div className="space-y-3">
            <Button
              type="button"
              className="h-auto min-h-10 w-full whitespace-normal"
              onClick={() => setStep("additional-checking")}
            >
              Continue with a trusted provider (simulated)
            </Button>
            <RecoveryOptions
              label="Other options"
              options={[
                {
                  label: "Choose a different method",
                  description: "Go back and pick another way to verify.",
                  onSelect: () => setStep("verify"),
                },
                {
                  label: "Cancel for now",
                  description: "Return to the start. Your details stay saved here.",
                  onSelect: () => setStep("account"),
                },
              ]}
            />
          </div>
          <div className="mt-4">
            <SecurityExplanation summary="What will the provider see?">
              <p>
                In this demonstration, nothing. In a real service, you would see exactly which
                details are shared before you agree.
              </p>
            </SecurityExplanation>
          </div>
        </StepScreen>
      );
      break;
    case "additional-checking":
      body = checking(
        "Completing the extra check",
        "A simulated trusted provider is confirming the details.",
        () => setStep("additional"),
      );
      break;
    case "failed": {
      const canRetry = retries < MAX_RETRIES;
      body = (
        <StepScreen
          title="We couldn't complete verification."
          lead="This can happen for many reasons and doesn't mean anything is wrong with you. Your details are saved."
          next={
            canRetry
              ? "Choose how you'd like to continue."
              : "Retries are used up for now. Choose another method or ask for help."
          }
          headingLevel={H}
        >
          <div className="mb-4" role="alert">
            <VerificationStatus status="unsuccessful" />
          </div>
          <RecoveryOptions
            options={[
              ...(canRetry
                ? [
                    {
                      label: "Try again",
                      description: `Attempt this method once more (${MAX_RETRIES - retries} left).`,
                      onSelect: () => {
                        setRetries((r) => r + 1);
                        setStep("checking");
                      },
                    },
                  ]
                : []),
              {
                label: "Choose another method",
                description: "Pick a different way to verify.",
                onSelect: () => setStep("verify"),
              },
              {
                label: "Request assistance",
                description: "A person reviews your request.",
                onSelect: () => setStep("assist"),
              },
            ]}
          />
          {interactive && (
            <p className="mt-4 text-xs text-muted-foreground">
              Tip: change the demo scenario below to see a different outcome on retry.
            </p>
          )}
        </StepScreen>
      );
      break;
    }
    case "assist":
      body = (
        <StepScreen
          title="We've passed this to a person."
          lead="A team member will review your request and email you at the address you entered."
          next="You can leave this page. Nothing else is needed from you."
          headingLevel={H}
        >
          <div className="mb-6">
            <VerificationStatus status="manual-review" />
          </div>
          <div className="flex gap-3">
            {back("verify", "Try another method")}
            <Button type="button" variant="outline" onClick={restart}>
              Restart demo
            </Button>
          </div>
        </StepScreen>
      );
      break;
    case "complete":
      body = (
        <SuccessConfirmation
          headingLevel={H}
          title="Your account is ready."
          text="Your verification is complete. You can now continue."
        >
          <div className="mb-4">
            <VerificationStatus status="verified" />
          </div>
          <Button type="button" className="w-full" onClick={() => setStep("landing")}>
            Continue to account
          </Button>
        </SuccessConfirmation>
      );
      break;
    default:
      body = (
        <StepScreen
          title={`Welcome, ${values.first || "there"}.`}
          lead="This is a simulated account home. In a real service, your dashboard would appear here."
          headingLevel={H}
        >
          <dl className="divide-y divide-border rounded-lg border border-border text-sm">
            <div className="flex justify-between gap-4 px-4 py-3">
              <dt className="text-muted-foreground">Email</dt>
              <dd>{values.email}</dd>
            </div>
            <div className="flex justify-between gap-4 px-4 py-3">
              <dt className="text-muted-foreground">Method</dt>
              <dd>
                {METHODS.find((m) => m.key === method)?.title.replace(
                  /^Continue with |^Verify with |^Use /,
                  "",
                ) ?? "Passkey"}
              </dd>
            </div>
            <div className="flex items-center justify-between gap-4 px-4 py-3">
              <dt className="text-muted-foreground">Status</dt>
              <dd>
                <VerificationStatus status="verified" />
              </dd>
            </div>
          </dl>
          <Button type="button" variant="outline" className="mt-6" onClick={restart}>
            Restart demonstration
          </Button>
        </StepScreen>
      );
  }

  return (
    <div ref={root}>
      <OnboardingLayout step={PROGRESS[step]} embedded={embedded}>
        {body}
      </OnboardingLayout>
      {interactive && <DemoScenarioSelector value={scenario} onChange={setScenario} />}
    </div>
  );
}
