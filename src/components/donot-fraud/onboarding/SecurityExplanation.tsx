import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

/** SecurityExplanation — optional "why" in plain language, closed by default. */
export function SecurityExplanation({
  summary = "Why are we asking?",
  children,
}: {
  summary?: string;
  children: ReactNode;
}) {
  return (
    <details className="group rounded-lg border border-border px-4 py-3 text-sm">
      <summary className="flex cursor-pointer list-none items-center justify-between rounded font-medium outline-none focus-visible:ring-2 focus-visible:ring-ring">
        {summary}
        <ChevronDown
          className="size-4 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
          aria-hidden
        />
      </summary>
      <div className="mt-2 space-y-2 text-muted-foreground">{children}</div>
    </details>
  );
}
