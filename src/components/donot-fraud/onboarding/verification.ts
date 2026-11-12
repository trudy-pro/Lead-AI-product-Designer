/**
 * Verification definitions: the closed vocabulary shared by the prototype and
 * the case study. Statuses map to semantic tone tokens, never raw colours.
 */
export type StatusKey =
  "ready" | "in-progress" | "verified" | "additional" | "unsuccessful" | "manual-review";

export type Tone = "neutral" | "info" | "success" | "warning" | "danger";

export const TONE_CLASS: Record<Tone, string> = {
  neutral: "bg-muted text-muted-foreground border-border",
  info: "bg-muted text-foreground border-border",
  success: "bg-muted text-foreground border-border",
  warning: "bg-accent text-accent-foreground border-border",
  danger: "bg-destructive/10 text-destructive border-destructive/30",
};

export const STATUSES: Record<
  StatusKey,
  { label: string; tone: Tone; meaning: string; next: string }
> = {
  ready: {
    label: "Ready",
    tone: "neutral",
    meaning: "Nothing has started yet. You choose how to verify.",
    next: "Pick a method to begin.",
  },
  "in-progress": {
    label: "In progress",
    tone: "info",
    meaning: "We are checking your chosen method. This usually takes a moment.",
    next: "Wait here, or cancel and choose another method.",
  },
  verified: {
    label: "Verified",
    tone: "success",
    meaning: "The requirements for this account are met.",
    next: "Continue to your account.",
  },
  additional: {
    label: "Additional verification required",
    tone: "warning",
    meaning: "This account needs one more check before it can be used.",
    next: "Complete one extra step, or choose a different route.",
  },
  unsuccessful: {
    label: "Verification unsuccessful",
    tone: "danger",
    meaning: "We could not complete this check. Your details are safe and nothing is lost.",
    next: "Retry, choose another method or ask for help.",
  },
  "manual-review": {
    label: "Manual review",
    tone: "info",
    meaning: "A person will look at this request instead of an automatic check.",
    next: "We will email you with the outcome. You can leave this page.",
  },
};

export type ScenarioKey = "A" | "B" | "C";

export const SCENARIOS: { key: ScenarioKey; label: string; outcome: string }[] = [
  { key: "A", label: "Requirements met", outcome: "Completes straight away" },
  { key: "B", label: "Extra check needed", outcome: "Asks for one more step" },
  { key: "C", label: "Could not complete", outcome: "Shows recovery options" },
];

export type MethodKey = "passkey" | "credential" | "other";

export const METHODS: { key: MethodKey; title: string; description: string; tag?: string }[] = [
  {
    key: "passkey",
    title: "Continue with a passkey",
    description:
      "Use the fingerprint, face or screen lock on this device. A passkey confirms it is you returning, not your legal identity.",
    tag: "Quickest",
  },
  {
    key: "credential",
    title: "Verify with a digital identity credential",
    description:
      "Share only the details required from a supported digital credential in your wallet app.",
  },
  {
    key: "other",
    title: "Use another available method",
    description: "See further options, such as an email link or a call with a support agent.",
  },
];
