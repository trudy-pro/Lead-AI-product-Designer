import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * VerificationMethodCard — a native radio wrapped in a label, so arrow keys,
 * focus and screen-reader semantics come from the browser.
 */
export function VerificationMethodCard({
  name,
  value,
  title,
  description,
  tag,
  icon,
  selected,
  onSelect,
}: {
  name: string;
  value: string;
  title: string;
  description: string;
  tag?: string;
  icon: ReactNode;
  selected: boolean;
  onSelect: (value: string) => void;
}) {
  return (
    <label
      className={cn(
        "flex cursor-pointer gap-3 rounded-lg border p-4 transition-colors duration-150",
        "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring has-[:focus-visible]:ring-offset-2",
        selected ? "border-primary bg-accent" : "border-border hover:border-input",
      )}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={selected}
        onChange={() => onSelect(value)}
        className="sr-only"
      />
      <span
        className={cn("mt-0.5 shrink-0", selected ? "text-primary" : "text-muted-foreground")}
        aria-hidden
      >
        {icon}
      </span>
      <span className="flex-1">
        <span className="flex items-center gap-2 text-sm font-medium">
          {title}
          {tag && (
            <span className="rounded-full bg-secondary px-2 py-0.5 text-[11px] font-normal text-muted-foreground">
              {tag}
            </span>
          )}
        </span>
        <span className="mt-1 block text-sm text-muted-foreground">{description}</span>
      </span>
      <span
        aria-hidden
        className={cn(
          "mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border",
          selected ? "border-primary" : "border-input",
        )}
      >
        {selected && <span className="size-2 rounded-full bg-primary" />}
      </span>
    </label>
  );
}
