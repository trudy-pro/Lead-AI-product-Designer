import { ArrowRight } from "lucide-react";

export type RecoveryOption = { label: string; description: string; onSelect: () => void };

/** RecoveryOptions — always more than one way forward, never a dead end. */
export function RecoveryOptions({
  options,
  label = "Your options",
}: {
  options: RecoveryOption[];
  label?: string;
}) {
  return (
    <ul aria-label={label} className="divide-y divide-border rounded-lg border border-border">
      {options.map((o) => (
        <li key={o.label}>
          <button
            type="button"
            onClick={o.onSelect}
            className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
          >
            <span>
              <span className="block text-sm font-medium">{o.label}</span>
              <span className="block text-sm text-muted-foreground">{o.description}</span>
            </span>
            <ArrowRight className="size-4 shrink-0 text-muted-foreground" aria-hidden />
          </button>
        </li>
      ))}
    </ul>
  );
}
