import { useId } from "react";
import { cn } from "@/lib/utils";
import { SCENARIOS, type ScenarioKey } from "./verification";

/** DemoScenarioSelector — clearly labelled demo control, not a security engine. */
export function DemoScenarioSelector({
  value,
  onChange,
}: {
  value: ScenarioKey;
  onChange: (v: ScenarioKey) => void;
}) {
  const groupId = useId();
  return (
    <fieldset className="mx-auto mt-4 w-full max-w-md rounded-lg border border-dashed border-input bg-card/60 p-3">
      <legend className="px-1 text-xs font-medium text-muted-foreground">
        Demo scenario (demonstration only)
      </legend>
      <div className="grid gap-2 sm:grid-cols-3">
        {SCENARIOS.map((s) => (
          <label
            key={s.key}
            className={cn(
              "cursor-pointer rounded-md border px-3 py-2 text-xs transition-colors duration-150",
              "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring",
              value === s.key
                ? "border-primary bg-accent text-foreground"
                : "border-border text-muted-foreground hover:border-input",
            )}
          >
            <input
              type="radio"
              name={groupId}
              value={s.key}
              checked={value === s.key}
              onChange={() => onChange(s.key)}
              className="sr-only"
            />
            <span className="block font-medium text-foreground">
              {s.key} · {s.label}
            </span>
            <span className="block">{s.outcome}</span>
          </label>
        ))}
      </div>
      <p className="mt-2 px-1 text-xs text-muted-foreground">
        The outcome is chosen here, not decided by any real check or hidden logic.
      </p>
    </fieldset>
  );
}
