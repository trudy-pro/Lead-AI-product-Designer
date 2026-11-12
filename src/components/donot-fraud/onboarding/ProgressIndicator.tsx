import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const ONBOARDING_STEPS = ["Account", "Verify", "Additional checks", "Confirmation"] as const;

/**
 * ProgressIndicator — ordered list of steps. Completed steps show a check,
 * the current step carries aria-current="step", and the current label is
 * always visible (other labels hide on narrow screens).
 */
export function ProgressIndicator({ current }: { current: number }) {
  return (
    <nav aria-label="Onboarding progress">
      <p className="sr-only">
        Step {current + 1} of {ONBOARDING_STEPS.length}: {ONBOARDING_STEPS[current]}
      </p>
      <ol className="flex items-center gap-2" aria-hidden={false}>
        {ONBOARDING_STEPS.map((label, i) => {
          const done = i < current;
          const active = i === current;
          return (
            <li
              key={label}
              aria-current={active ? "step" : undefined}
              className={cn("flex items-center gap-2", i < ONBOARDING_STEPS.length - 1 && "flex-1")}
            >
              <span
                className={cn(
                  "flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-medium transition-colors duration-200",
                  done && "border-primary bg-primary text-primary-foreground",
                  active && "border-primary text-primary",
                  !done && !active && "border-border text-muted-foreground",
                )}
              >
                {done ? <Check className="size-3.5" aria-hidden /> : i + 1}
              </span>
              <span
                className={cn(
                  "whitespace-nowrap text-xs",
                  active
                    ? "font-medium text-foreground"
                    : "hidden text-muted-foreground @[420px]:inline",
                )}
              >
                {label}
              </span>
              {i < ONBOARDING_STEPS.length - 1 && (
                <span
                  className={cn(
                    "h-px flex-1 transition-colors duration-200",
                    done ? "bg-primary" : "bg-border",
                  )}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
