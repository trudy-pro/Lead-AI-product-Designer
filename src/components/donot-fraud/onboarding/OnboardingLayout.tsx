import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ProgressIndicator } from "./ProgressIndicator";

/**
 * OnboardingLayout — the minimal application shell: brand row, progress,
 * content card and a plain-language note that the flow is simulated.
 * `embedded` renders just the card, for mockups inside the case study.
 */
export function OnboardingLayout({
  step,
  embedded = false,
  children,
}: {
  step: number;
  embedded?: boolean;
  children: ReactNode;
}) {
  const card = (
    <div className="@container mx-auto w-full max-w-md rounded-xl border border-border bg-card p-6 md:p-8">
      <div className="mb-6 flex items-center justify-between text-xs">
        <span className="font-medium">Donot Fraud AI</span>
        <span className="rounded-full border border-border px-2 py-0.5 text-muted-foreground">
          Prototype
        </span>
      </div>
      <ProgressIndicator current={step} />
      <div className="mt-8">{children}</div>
      <p className="mt-8 border-t border-border pt-4 text-xs text-muted-foreground">
        Interactive demonstration. Verification is simulated; nothing you enter is sent or stored.
      </p>
    </div>
  );
  if (embedded) return card;
  return (
    <div className="flex min-h-svh flex-col justify-center bg-secondary px-4 py-10">{card}</div>
  );
}

/**
 * StepScreen — every screen answers: what is happening, what do I do,
 * what happens next. Its heading receives focus on step change.
 */
export function StepScreen({
  title,
  lead,
  next,
  headingLevel = "h1",
  children,
  className,
}: {
  title: string;
  lead: ReactNode;
  next?: string;
  headingLevel?: "h1" | "h2";
  children?: ReactNode;
  className?: string;
}) {
  const H = headingLevel;
  return (
    <div className={cn("animate-in fade-in duration-200 motion-reduce:animate-none", className)}>
      <H
        data-step-heading
        tabIndex={-1}
        className="display text-3xl leading-tight outline-none md:text-4xl"
      >
        {title}
      </H>
      <p className="mt-3 text-base text-muted-foreground">{lead}</p>
      {children && <div className="mt-6">{children}</div>}
      {next && (
        <p className="mt-6 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Next: </span>
          {next}
        </p>
      )}
    </div>
  );
}
