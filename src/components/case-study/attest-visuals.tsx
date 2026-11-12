import { UserRound, LockKeyhole } from "lucide-react";
import { Reveal } from "./case-study";
import { OnboardingFlow } from "@/components/donot-fraud/onboarding/OnboardingFlow";
import { VerificationStatus } from "@/components/donot-fraud/onboarding/VerificationStatus";
import "./attest-visuals.css";

function AttestScreens() {
  return (
    <Reveal className="attest-prototype">
      <div className="grid items-start gap-6 xl:grid-cols-2">
        {(["verify", "additional"] as const).map((step) => (
          <figure key={step}>
            <div className="rounded-2xl border border-border bg-muted p-3 sm:p-5">
              <div inert>
                <OnboardingFlow
                  embedded
                  initialStep={step}
                  initialMethod="passkey"
                  initialScenario="B"
                />
              </div>
            </div>
          </figure>
        ))}
      </div>
    </Reveal>
  );
}

function AttestPrototype() {
  return (
    <Reveal className="attest-prototype">
      <div className="rounded-2xl border border-border bg-muted p-4 sm:p-8">
        <h3 className="mb-3 text-[23px] font-semibold">Explore the prototype</h3>
        <p className="mb-6 max-w-[640px] text-[15px] leading-relaxed text-muted-foreground">
          Try the three simulated journeys using the scenario selector below. Use sample details.
          This demonstration does not connect to passkey, e-ID, biometric or fraud-detection
          services.
        </p>
        <OnboardingFlow embedded interactive />
      </div>
    </Reveal>
  );
}

function AttestStates() {
  return (
    <Reveal>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            status: "verified" as const,
            label: "A / Verified",
            text: "The required checks are complete. State the result and provide one obvious next action.",
          },
          {
            status: "additional" as const,
            label: "B / Additional proof",
            text: "Describe what is needed and explain how users can complete it.",
          },
          {
            status: "unsuccessful" as const,
            label: "C / Unsuccessful",
            text: "Avoid blame. Preserve progress and offer a credible recovery route.",
          },
        ].map(({ status, label, text }) => (
          <article key={status} className="min-w-0 rounded-xl border border-border bg-card p-5">
            <h3 className="mb-4 text-[12px] text-muted-foreground">{label}</h3>
            <VerificationStatus status={status} className="max-w-full whitespace-normal" />
            <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>
      <div className="mt-5 rounded-xl border border-border p-5">
        <h3 className="font-semibold">Recovery choices</h3>
        <dl className="mt-4 grid gap-5 sm:grid-cols-2">
          <div>
            <dt className="font-medium">Try again</dt>
            <dd className="mt-1 text-[14px] text-muted-foreground">
              Repeat this step without re-entering details.
            </dd>
          </div>
          <div>
            <dt className="font-medium">Choose another method</dt>
            <dd className="mt-1 text-[14px] text-muted-foreground">
              See another suitable verification option.
            </dd>
          </div>
        </dl>
      </div>
    </Reveal>
  );
}

export function AttestEvaluationPlan() {
  return (
    <Reveal>
      <h3 className="mb-5 text-[23px] font-semibold leading-tight">What I would test</h3>
      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse text-left text-[14px]">
            <caption className="sr-only">
              Proposed onboarding evaluation scenarios, expected behaviour and measures
            </caption>
            <thead className="bg-muted">
              <tr>
                {["Scenario", "Expected behaviour", "What I would measure"].map((heading) => (
                  <th
                    key={heading}
                    scope="col"
                    className="border-b border-border px-6 py-4 font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-muted-foreground"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Already verified",
                  "Users continue without repeating unnecessary checks.",
                  "Task completion, time and number of interactions.",
                ],
                [
                  "Additional proof required",
                  "Users understand why another verification step is necessary and what to do next.",
                  "Comprehension, completion and abandonment.",
                ],
                [
                  "Verification method unavailable",
                  "Users choose a suitable, accessible alternative.",
                  "Alternative-path completion and accessibility.",
                ],
                [
                  "Verification fails",
                  "Users receive clear feedback and recover without unnecessarily restarting the process.",
                  "Recovery success, errors and effort.",
                ],
                [
                  "Suspicious or manipulated attempt",
                  "Required security controls still apply.",
                  "False acceptance, false rejection and resistance to attacks.",
                ],
              ].map(([scenario, behaviour, measure]) => (
                <tr key={scenario} className="border-b border-border last:border-b-0">
                  <th scope="row" className="w-[26%] px-6 py-4 align-top font-medium leading-[1.6]">
                    {scenario}
                  </th>
                  <td className="px-6 py-4 align-top leading-[1.6] text-muted-foreground">
                    {behaviour}
                  </td>
                  <td className="px-6 py-4 align-top leading-[1.6] text-muted-foreground">
                    {measure}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {[
          {
            title: "UX quality",
            text: "Fewer unnecessary interactions, clearer instructions, successful task completion and easier recovery.",
            Icon: UserRound,
          },
          {
            title: "Security assurance",
            text: "Required verification checks remain effective, with no unacceptable increase in security risk.",
            Icon: LockKeyhole,
          },
        ].map(({ title, text, Icon }) => (
          <article key={title} className="flex items-start gap-4 rounded-2xl bg-muted p-5 sm:p-6">
            <Icon className="mt-1 shrink-0" size={24} strokeWidth={1.6} aria-hidden="true" />
            <div className="border-l border-border pl-4">
              <h4 className="text-[17px] font-semibold leading-tight">{title}</h4>
              <p className="mt-2 text-[15px] leading-[1.6] text-muted-foreground">{text}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-6 text-[13px] italic text-muted-foreground">
        Proposed evaluation framework · Usability and security testing have not yet been conducted.
      </p>
    </Reveal>
  );
}

export const attestVisuals = {
  "attest-evaluation-plan": AttestEvaluationPlan,
  "attest-screens": AttestScreens,
  "attest-prototype": AttestPrototype,
  "attest-states": AttestStates,
} as const;
export type AttestVisualName = keyof typeof attestVisuals;
