import { CheckCircle2, Circle, Hourglass, Loader2, ShieldAlert, XCircle } from "lucide-react";
import type { ComponentType } from "react";
import { cn } from "@/lib/utils";
import { STATUSES, TONE_CLASS, type StatusKey } from "./verification";

const ICONS: Record<StatusKey, ComponentType<{ className?: string; "aria-hidden"?: boolean }>> = {
  ready: Circle,
  "in-progress": Loader2,
  verified: CheckCircle2,
  additional: ShieldAlert,
  unsuccessful: XCircle,
  "manual-review": Hourglass,
};

/** VerificationStatus — badge with icon + text (never colour alone). */
export function VerificationStatus({
  status,
  className,
}: {
  status: StatusKey;
  className?: string;
}) {
  const def = STATUSES[status];
  const Icon = ICONS[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
        TONE_CLASS[def.tone],
        className,
      )}
    >
      <Icon
        className={cn("size-3.5", status === "in-progress" && "motion-safe:animate-spin")}
        aria-hidden
      />
      {def.label}
    </span>
  );
}
