import type { ReactNode } from "react";
import { Check } from "lucide-react";

/** SuccessConfirmation — calm completion state with one clear action. */
export function SuccessConfirmation({
  title,
  text,
  children,
  headingLevel = "h1",
}: {
  title: string;
  text: string;
  children?: ReactNode;
  headingLevel?: "h1" | "h2";
}) {
  const H = headingLevel;
  return (
    <div className="animate-in fade-in duration-200 motion-reduce:animate-none">
      <span
        className="flex size-10 items-center justify-center rounded-full bg-muted text-foreground"
        aria-hidden
      >
        <Check className="size-5" />
      </span>
      <H
        data-step-heading
        tabIndex={-1}
        className="display mt-5 text-3xl leading-tight outline-none md:text-4xl"
      >
        {title}
      </H>
      <p className="mt-3 text-base text-muted-foreground">{text}</p>
      {children && <div className="mt-6">{children}</div>}
    </div>
  );
}
