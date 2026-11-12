import { FileCode2, ScanSearch, ScanEye } from "lucide-react";
import { useEffect, useId, useState, type CSSProperties, type ReactNode } from "react";
import { Reveal } from "@/components/case-study/case-study";

/*
 * FadäRhy case-study visuals. The outer frames use the portfolio's own figure styling
 * (rounded-2xl border, muted captions); only the product mock-ups inside wear FadäRhy's
 * catalog colours, exposed as --fr-* variables so light and dark can be previewed.
 */

type Mode = "light" | "dark";

const palette: Record<Mode, Record<string, string>> = {
  light: {
    aqua: "#F4F6FB",
    primary: "#2446F5",
    "primary-fg": "#FFFFFF",
    bg: "#F2F2F2",
    card: "#FFFFFF",
    secondary: "#F4F6FB",
    border: "#E4E4EA",
    fg: "#2A2A2A",
    muted: "#5C5C66",
    link: "#2446F5",
    match: "#EDFBF3",
    "match-fg": "#2F7A56",
    destructive: "#B42318",
    "destructive-fg": "#FFFFFF",
    banner: "#2A2A2A",
    "banner-fg": "#EEF0E8",
    lime: "#D6FF3F",
    success: "#1A7F4B",
    "success-soft": "#E6F4EC",
    warning: "#8A5A00",
    "warning-soft": "#FFF3D6",
    info: "#0B5ED7",
    "info-soft": "#E3EEFF",
    error: "#B42318",
    "error-soft": "#FDECEA",
    disabled: "#E4E4EA",
    "disabled-fg": "#5C5C66",
  },
  dark: {
    aqua: "#11120F",
    primary: "#D6FF3F",
    "primary-fg": "#2A2A2A",
    bg: "#11120F",
    card: "#1C1D19",
    secondary: "#11120F",
    border: "#2E3029",
    fg: "#EEF0E8",
    muted: "#A8AD9F",
    link: "#D6FF3F",
    match: "#11301F",
    "match-fg": "#6FD39A",
    destructive: "#FF8A80",
    "destructive-fg": "#2A2A2A",
    banner: "#1C1D19",
    "banner-fg": "#EEF0E8",
    lime: "#D6FF3F",
    success: "#6FD39A",
    "success-soft": "#11301F",
    warning: "#F2C14E",
    "warning-soft": "#33280A",
    info: "#8FB0FF",
    "info-soft": "#112A66",
    error: "#FF8A80",
    "error-soft": "#3A1613",
    disabled: "#2E3029",
    "disabled-fg": "#7B8073",
  },
};

function productVars(mode: Mode): CSSProperties {
  return Object.fromEntries(
    Object.entries(palette[mode]).map(([k, v]) => [`--fr-${k}`, v]),
  ) as CSSProperties;
}

/** Portfolio-style figure frame with an optional caption. */
function Frame({ children, caption }: { children: ReactNode; caption?: string }) {
  return (
    <Reveal className="fr-theme text-[var(--fr-fg)]">
      <figure>
        <div className="overflow-hidden rounded-2xl border border-[var(--fr-border)] bg-[var(--fr-card)]">
          {children}
        </div>
        {caption && (
          <figcaption className="mt-4 text-[13px] text-[var(--fr-muted)]">{caption}</figcaption>
        )}
      </figure>
    </Reveal>
  );
}

/** Segmented control in the portfolio's neutral style. */
function Segmented<T extends string | number>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={String(o.value)}
          type="button"
          aria-pressed={o.value === value}
          onClick={() => onChange(o.value)}
          className={`rounded-full border px-3 py-1 text-[13px] transition-colors ${
            o.value === value
              ? "border-[var(--fr-primary)] bg-[var(--fr-primary)] text-[var(--fr-primary-fg)]"
              : "border-[var(--fr-border)] text-[var(--fr-muted)] hover:text-[var(--fr-fg)]"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

/** Preview mode for the theme toggles, starting from the portfolio's current light/dark theme. */
function useSiteMode() {
  const state = useState<Mode>("light");
  const setMode = state[1];
  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) setMode("dark");
  }, [setMode]);
  return state;
}

const modeOptions: { value: Mode; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
];

/* ---------- Product mock primitives (FadäRhy colours) ---------- */

const pill =
  "inline-block rounded-[8px] border border-[var(--fr-border)] bg-[var(--fr-secondary)] px-2 py-1 text-[11px] text-[var(--fr-fg)] mr-1 mb-1";
const box =
  "rounded-[12px] border border-[var(--fr-border)] bg-[var(--fr-card)] px-3.5 py-3 text-[13px] leading-[1.55]";

function Screen({ mode, children }: { mode?: Mode; children: ReactNode }) {
  return (
    <div
      style={mode ? productVars(mode) : undefined}
      className="min-h-[320px] rounded-[12px] border border-[var(--fr-border)] bg-[var(--fr-card)] p-5 text-[var(--fr-fg)]"
    >
      <div className="mb-4 flex items-center justify-between gap-3 border-b border-[var(--fr-border)] pb-3">
        <span className="text-[17px] font-bold tracking-[-0.06em]">
          Fadä<span className="text-[var(--fr-link)]">Rhy</span>
        </span>
        <span className="flex gap-3 text-[10px] text-[var(--fr-muted)]">
          <span>Directory</span>
          <span>Shortlist</span>
          <span>EN · DE · FR</span>
        </span>
      </div>
      {children}
    </div>
  );
}

function MatchCard() {
  return (
    <div className={`${box} mt-2.5`}>
      <div className="flex justify-between gap-3">
        <div>
          <span className="rounded-[8px] bg-[var(--fr-match)] px-2 py-0.5 text-[11px] text-[var(--fr-match-fg)]">
            Lab space · Basel-Stadt
          </span>
          <p className="mt-2 text-[13px] font-semibold">Tech Park Basel</p>
          <p className="mt-1 text-[11px] text-[var(--fr-muted)]">Fits seed stage.</p>
          <p className="mt-1 text-[11px] text-[var(--fr-muted)]">
            Source: Basel Super Cluster · verified Oct 2026
          </p>
          <p className="mt-1 text-[11px]">▸ Why this match</p>
        </div>
        <span className="inline-flex h-[34px] w-[34px] flex-none items-center justify-center rounded-full border-[3px] border-[var(--fr-primary)] font-mono text-[11px] font-semibold">
          71
        </span>
      </div>
      <div className="mt-2">
        <span className={pill}>Save</span>
        <span className={pill}>Draft intro</span>
        <span className={pill}>Details</span>
      </div>
    </div>
  );
}

/* ---------- 2. Tokens: primitive → semantic, with swatches ---------- */

const roles = [
  { name: "primary", use: "Action", bg: "primary", fg: "primary-fg" },
  { name: "background", use: "Canvas", bg: "bg", fg: "fg" },
  { name: "card", use: "Surface", bg: "card", fg: "fg" },
  { name: "secondary", use: "Support", bg: "secondary", fg: "fg" },
  { name: "match", use: "Match state", bg: "match", fg: "match-fg" },
  { name: "destructive", use: "Risky action", bg: "destructive", fg: "destructive-fg" },
];

export function FadarhyTokens() {
  const [mode, setMode] = useSiteMode();
  const [selected, setSelected] = useState(roles[0]!);
  return (
    <Frame caption="Semantic colour roles from the FadäRhy catalog. Switch the theme: the role names stay, the values change.">
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h3 className="text-[13px] text-[var(--fr-muted)]">How tokens flow</h3>
          <Segmented label="Preview theme" options={modeOptions} value={mode} onChange={setMode} />
        </div>
        <div className="mt-5 grid items-center gap-4 sm:grid-cols-[1fr_24px_1fr]">
          <div className="rounded-xl border border-[var(--fr-border)] p-4">
            <p className="font-mono text-[12px]">Primitive</p>
            <p className="mt-1 text-[14px] text-[var(--fr-muted)]">
              Raw values only, e.g.{" "}
              <code className="font-mono text-[12px]">--primitive-color-2446f5</code>. Never used in
              components.
            </p>
          </div>
          <span
            aria-hidden="true"
            className="text-center text-[20px] text-[var(--fr-muted)] sm:rotate-0 rotate-90"
          >
            →
          </span>
          <div className="rounded-xl border border-[var(--fr-border)] p-4">
            <p className="font-mono text-[12px]">Semantic → component</p>
            <p className="mt-1 text-[14px] text-[var(--fr-muted)]">
              <code className="font-mono text-[12px]">--primary</code> resolves to Rhine Blue in
              light mode and Thread Lime in dark.
            </p>
          </div>
        </div>
        <div
          style={productVars(mode)}
          className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
        >
          {roles.map((r) => (
            <button
              key={r.name}
              type="button"
              aria-pressed={selected.name === r.name}
              aria-label={`Inspect ${r.name}`}
              onClick={() => setSelected(r)}
              className={`min-w-0 overflow-hidden rounded-xl border border-[var(--fr-border)] bg-[var(--fr-card)] text-left text-[var(--fr-fg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--fr-primary)] ${selected.name === r.name ? "ring-2 ring-[var(--fr-primary)] ring-offset-2 ring-offset-[var(--fr-card)]" : ""}`}
            >
              <div
                className="flex h-20 items-end p-3 text-[16px] font-medium"
                style={{ background: `var(--fr-${r.bg})`, color: `var(--fr-${r.fg})` }}
              >
                Aa
              </div>
              <div className="px-3 py-2.5">
                <p className="font-mono text-[12px]">{r.name}</p>
                <p className="text-[11px] text-[var(--fr-muted)]">
                  {r.use} · {palette[mode][r.bg]}
                </p>
              </div>
            </button>
          ))}
        </div>
        <div
          style={productVars(mode)}
          className="mt-6 grid gap-6 rounded-xl border border-[var(--fr-border)] bg-[var(--fr-card)] p-5 text-[var(--fr-fg)] sm:grid-cols-2"
          aria-live="polite"
        >
          <div>
            <p className="text-[12px] text-[var(--fr-muted)]">Selected role / {selected.use}</p>
            <h3 className="mt-2 font-mono text-[20px]">--{selected.name}</h3>
            <p className="mt-2 text-[14px] text-[var(--fr-muted)]">
              {roleDescriptions[selected.name]}
            </p>
            <p className="mt-4 font-mono text-[12px]">{palette[mode][selected.bg]}</p>
          </div>
          <div className="flex flex-col items-start justify-center gap-3 rounded-xl bg-[var(--fr-bg)] p-5">
            <p className="text-[12px] text-[var(--fr-muted)]">The token in context</p>
            <span
              className="rounded-[12px] border border-[var(--fr-border)] px-4 py-3 text-[14px]"
              style={{ background: `var(--fr-${selected.bg})`, color: `var(--fr-${selected.fg})` }}
            >
              {roleExamples[selected.name]}
            </span>
            <code className="break-all text-[11px] text-[var(--fr-muted)]">bg-{selected.name}</code>
          </div>
        </div>
      </div>
    </Frame>
  );
}

const roleDescriptions: Record<string, string> = {
  primary: "The highest-emphasis action: one clear next step.",
  background: "The application canvas behind content and working surfaces.",
  card: "Bounded surfaces for profiles, cards and information.",
  secondary: "Supporting information that keeps the primary action clear.",
  match: "Match feedback has its own meaning and colour role.",
  destructive: "Reserved for destructive or risky actions.",
};
const roleExamples: Record<string, string> = {
  primary: "Find my path →",
  background: "App canvas",
  card: "Your team profile",
  secondary: "Supporting information",
  match: "Strong match",
  destructive: "Delete saved item",
};

/* ---------- 3. Components: type, actions, match card, feedback ---------- */

const btn =
  "inline-flex min-h-10 items-center justify-center rounded-[12px] border border-transparent px-3.5 py-2 text-[13px] font-semibold";

export function FadarhyComponents() {
  const [mode, setMode] = useSiteMode();
  const panel = "rounded-[12px] border border-[var(--fr-border)] bg-[var(--fr-card)] p-6";
  const label = "font-mono text-[11px] uppercase tracking-[0.13em] text-[var(--fr-muted)]";
  return (
    <Frame caption="Key components from the catalog, rendered with FadäRhy’s tokens.">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--fr-border)] px-6 py-4 sm:px-8">
        <h3 className="text-[13px] text-[var(--fr-muted)]">Components</h3>
        <Segmented label="Preview theme" options={modeOptions} value={mode} onChange={setMode} />
      </div>
      <div
        style={productVars(mode)}
        className="grid gap-4 bg-[var(--fr-card)] p-6 text-[var(--fr-fg)] sm:p-8 md:grid-cols-2"
      >
        <div className={panel}>
          <p className={label}>Typography</p>
          {[
            ["Display", "Find your next step.", "text-[30px] leading-tight"],
            ["Headline", "Built around your needs.", "text-[22px] leading-snug"],
            [
              "Body",
              "A connection that matters, with a reason and a source.",
              "text-[16px] text-[var(--fr-muted)]",
            ],
          ].map(([tag, sample, cls]) => (
            <div
              key={tag}
              className="grid grid-cols-[80px_1fr] gap-3 border-b border-[var(--fr-border)] py-3.5 last:border-b-0"
            >
              <span className="pt-1.5 font-mono text-[11px] text-[var(--fr-muted)]">{tag}</span>
              <span className={cls}>{sample}</span>
            </div>
          ))}
          <p className="mt-3 text-[13px] text-[var(--fr-muted)]">
            Neue Frutiger for reading; JetBrains Mono for labels and data.
          </p>
        </div>
        <div className={panel}>
          <p className={label}>Actions</p>
          <p className="mt-3 text-[17px] font-semibold">Ranked by priority, not decoration</p>
          <p className="mt-1 text-[14px] text-[var(--fr-muted)]">
            One primary action per view; everything else steps down.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className={`${btn} bg-[var(--fr-primary)] text-[var(--fr-primary-fg)]`}>
              Primary
            </span>
            <span className={`${btn} bg-[var(--fr-secondary)]`}>Secondary</span>
            <span className={`${btn} border-[var(--fr-border)] bg-[var(--fr-card)]`}>Outline</span>
            <span className={`${btn} text-[var(--fr-link)]`}>Ghost</span>
            <span className={`${btn} bg-[var(--fr-destructive)] text-[var(--fr-destructive-fg)]`}>
              Destructive
            </span>
            <span className={`${btn} text-[var(--fr-link)] underline`}>Link</span>
            <span className={`${btn} bg-[var(--fr-disabled)] text-[var(--fr-disabled-fg)]`}>
              Unavailable
            </span>
          </div>
        </div>
        <div className={panel}>
          <p className={label}>Key composition / Match card</p>
          <p className="mt-3 text-[17px] font-semibold">Reason and source, always together</p>
          <MatchCard />
        </div>
        <div className={panel}>
          <p className={label}>Feedback states</p>
          <p className="mt-3 text-[17px] font-semibold">Colour never speaks alone</p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {[
              ["success", "Success", "Profile updated."],
              ["warning", "Warning", "Review uncertain details."],
              ["info", "Information", "Source available."],
              ["error", "Error", "Unable to verify the link."],
            ].map(([k, title, msg]) => (
              <div
                key={k}
                className="rounded-[12px] px-3.5 py-3 text-[13px]"
                style={{ background: `var(--fr-${k}-soft)`, color: `var(--fr-${k})` }}
              >
                <b className="block">{title}</b>
                {msg}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function FadarhySystemComparison() {
  return (
    <Reveal>
      <div className="grid items-stretch gap-5 sm:grid-cols-2">
        {[
          {
            label: "Before",
            title: "Every screen made its own choices.",
            text: "Raw values and inconsistent styles.",
            chips: ["#2446f5", "#ea802b", "#dadbe0"],
          },
          {
            label: "After",
            title: "One shared system across the interface.",
            text: "Semantic roles guide every component.",
            chips: ["--primary", "--card", "--focus-ring"],
          },
        ].map((item) => (
          <article
            key={item.label}
            className="flex flex-col items-start rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <p className="inline-flex rounded-full bg-muted px-3 py-1 text-[13px] text-muted-foreground">
              {item.label}
            </p>
            <h3 className="mt-5 text-[23px] leading-tight">{item.title}</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{item.text}</p>
            <div className="mt-auto flex flex-wrap gap-3 pt-6">
              {item.chips.map((chip) => (
                <code key={chip} className="rounded-lg bg-muted px-3 py-2 text-[11px]">
                  {chip}
                </code>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-2xl bg-muted px-6 py-5 text-[17px] sm:px-8">
        <span>Raw value</span>
        <span aria-hidden="true">→</span>
        <span>role</span>
        <span aria-hidden="true">→</span>
        <span>component</span>
      </div>
    </Reveal>
  );
}

const journey = [
  {
    title: "Describe",
    heading: "Start with a conversation, not a form.",
    text: "A clear hierarchy, language choices and one primary action make the start approachable.",
    tags: ["text area", "language switch", "primary button"],
  },
  {
    title: "Check",
    heading: "Make interpretation reviewable.",
    text: "Structured profile cards and a clear confirmation state help people correct mistakes before matching.",
    tags: ["profile cards", "editable content", "feedback state"],
  },
  {
    title: "Act",
    heading: "Turn matches into next steps.",
    text: "Match states distinguish suggestions from actions. Reasons, sources and consistent hierarchy help people choose a route forward.",
    tags: ["match cards", "status badges", "next steps"],
  },
];

export function FadarhySystemJourney() {
  const [mode, setMode] = useSiteMode();
  const [step, setStep] = useState(0);
  const [language, setLanguage] = useState("Auto");
  const [needs, setNeeds] = useState(
    "We’re an early-stage biotech team looking for lab space and funding advice around Basel.",
  );
  const fieldId = useId();
  const current = journey[step]!;
  return (
    <Frame caption="Interactive reconstructions of Describe → Check → Act. Sample data demonstrates the system; it is not a live recommendation.">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--fr-border)] p-5 sm:px-8">
        <h3 className="text-[14px]">One system across the journey</h3>
        <Segmented
          label="Journey preview theme"
          options={modeOptions}
          value={mode}
          onChange={setMode}
        />
      </div>
      <div className="p-5 sm:p-8">
        <Segmented
          label="Preview journey step"
          options={journey.map((item, i) => ({ value: i, label: `0${i + 1} / ${item.title}` }))}
          value={step}
          onChange={setStep}
        />
      </div>
      <div
        style={productVars(mode)}
        className="grid gap-6 bg-[var(--fr-aqua)] p-5 text-[var(--fr-fg)] sm:p-8 xl:grid-cols-[1.4fr_1fr]"
      >
        <Screen>
          {step === 0 ? (
            <>
              <h4 className="text-[24px] leading-tight">Find your next right connection.</h4>
              <label htmlFor={fieldId} className="mb-2 mt-5 block text-[12px]">
                Your situation and needs
              </label>
              <textarea
                id={fieldId}
                value={needs}
                onChange={(e) => setNeeds(e.target.value)}
                className="min-h-28 w-full resize-y rounded-xl border border-[var(--fr-border)] bg-[var(--fr-card)] p-3 text-[13px]"
              />
              <p className="mb-2 mt-4 text-[12px]">Answer language</p>
              <Segmented
                label="Answer language"
                options={["Auto", "English", "Deutsch", "Français"].map((value) => ({
                  value,
                  label: value,
                }))}
                value={language}
                onChange={setLanguage}
              />
            </>
          ) : step === 1 ? (
            <>
              <h4 className="text-[24px] leading-tight">Does this describe your team?</h4>
              <p className="mt-3 text-[13px] text-[var(--fr-muted)]">
                Illustrative profile. In the live app, review and correct the interpretation before
                matching.
              </p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {[
                  ["Sector", "Biotechnology"],
                  ["Stage", "Early-stage"],
                  ["Region", "Basel"],
                  ["Looking for", "Lab space + funding"],
                ].map(([label, value]) => (
                  <div key={label} className={box}>
                    <span className="block text-[11px] text-[var(--fr-muted)]">{label}</span>
                    {value}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <h4 className="text-[24px] leading-tight">Move from need to action.</h4>
              <p className="mt-3 text-[13px] text-[var(--fr-muted)]">
                A reason, a source and a next step in one reusable composition.
              </p>
              <MatchCard />
            </>
          )}
          <div className="mt-5 flex flex-wrap justify-end gap-2">
            {step > 0 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className={`${btn} border-[var(--fr-border)]`}
              >
                Back
              </button>
            )}
            {step < 2 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className={`${btn} bg-[var(--fr-primary)] text-[var(--fr-primary-fg)]`}
              >
                {step === 0 ? "Find my path →" : "Confirm profile →"}
              </button>
            ) : (
              <a
                href="https://app.fadarhy.ch/"
                target="_blank"
                rel="noreferrer"
                className={`${btn} bg-[var(--fr-primary)] text-[var(--fr-primary-fg)]`}
              >
                Explore the live app ↗
              </a>
            )}
          </div>
        </Screen>
        <aside className="flex flex-col justify-between gap-6 py-3" aria-live="polite">
          <div>
            <p className="text-[12px] text-[var(--fr-muted)]">
              0{step + 1} / {current.title}
            </p>
            <h4 className="mt-3 text-[24px] leading-tight">{current.heading}</h4>
            <p className="mt-4 text-[14px] leading-relaxed text-[var(--fr-muted)]">
              {current.text}
            </p>
          </div>
          <div>
            <p className="mb-3 text-[11px] text-[var(--fr-muted)]">COMPONENTS IN USE</p>
            {current.tags.map((tag) => (
              <span key={tag} className={pill}>
                {tag}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </Frame>
  );
}

/* ---------- 4. Eval scenarios ---------- */

export function FadarhyScenarios() {
  return (
    <Reveal className="w-full">
      <Table
        title="Four scenarios. Different needs."
        note="Test coverage"
        compact
        singleLine
        head={["Scenario", "Focus", "Language"]}
        rows={[
          ["Medtech · Basel", "Lab access + funding", "EN"],
          ["Biotech · Series A", "Investor relevance", "EN"],
          ["Diagnostics · Relocation", "Regional guidance", "DE"],
          ["Researcher · Spin-off", "Academic transition", "FR"],
        ]}
      />
      <div className="mt-8 lg:max-w-[50%]">
        <h3 className="text-[20px] font-semibold leading-tight">Score. Review. Improve.</h3>
        <p className="mt-3 text-[13px] leading-[1.6] text-muted-foreground">
          For each scenario, compare the output with the input, verify sources, check relevance and
          assess next steps.
        </p>
        <ul aria-label="Evaluation ratings" className="mt-4 flex flex-wrap gap-2">
          {["Pass", "Partial", "Fail"].map((rating) => (
            <li
              key={rating}
              className="rounded-sm border border-border px-3 py-1.5 text-[11px] font-semibold"
            >
              {rating}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[13px] leading-[1.6] text-muted-foreground">
          <strong className="font-semibold text-foreground">Critical failure:</strong> Invented
          eligibility, availability or deadlines.
        </p>
        <div className="mt-6 text-[13px] leading-[1.6]">
          <p className="font-semibold">Next iteration</p>
          <h3 className="mt-3 text-[20px] font-semibold leading-tight">
            From findings to a repeatable test
          </h3>
          <p className="mt-2 text-muted-foreground">
            These evals are planned, not yet executed. The next step is to test the live beta,
            identify failures and refine the experience based on the results.
          </p>
        </div>
      </div>
    </Reveal>
  );
}

/* ---------- 5. Card grids, tables and loops ---------- */

function CardGrid({
  items,
  cols = 3,
}: {
  items: { kicker: string; title: string; text: string }[];
  cols?: 2 | 3 | 4;
}) {
  const grid =
    cols === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : cols === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <Reveal className="fr-theme text-[var(--fr-fg)]">
      <div className={`grid gap-3 ${grid}`}>
        {items.map((it) => (
          <article
            key={it.title}
            className="min-w-0 rounded-2xl border border-[var(--fr-border)] bg-[var(--fr-card)] p-6"
          >
            <span className="block font-mono text-[11px] uppercase tracking-[0.13em] text-[var(--fr-link)]">
              {it.kicker}
            </span>
            <h3 className="mt-4 text-[17px] font-medium leading-snug">{it.title}</h3>
            {it.text && (
              <p className="mt-2 text-[14px] leading-[1.6] text-[var(--fr-muted)]">{it.text}</p>
            )}
          </article>
        ))}
      </div>
    </Reveal>
  );
}

function Table({
  title,
  strongTitle = false,
  compact = false,
  singleLine = false,
  note,
  head,
  rows,
}: {
  title: string;
  strongTitle?: boolean;
  compact?: boolean;
  singleLine?: boolean;
  note: string;
  head: string[];
  rows: string[][];
}) {
  return (
    <Frame>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--fr-border)] bg-[var(--fr-secondary)] px-6 py-4">
        <h3 className={`text-[16px] ${strongTitle ? "font-bold" : "font-medium"}`}>{title}</h3>
        <span className="font-mono text-[11px] text-[var(--fr-muted)]">{note}</span>
      </div>
      <div className="overflow-x-auto">
        <table
          className={`w-full ${compact || head.length === 2 ? "min-w-[360px]" : "min-w-[620px]"} border-collapse text-left text-[14px] ${singleLine ? "whitespace-nowrap" : ""}`}
        >
          <thead>
            <tr>
              {head.map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="border-b border-[var(--fr-border)] px-6 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-[var(--fr-muted)]"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]} className="border-b border-[var(--fr-border)] last:border-b-0">
                {r.map((cell, n) => (
                  <td
                    key={n}
                    className={`px-6 py-4 align-top leading-[1.5] ${n === 0 ? (head.length === 2 ? "w-1/2 font-medium" : "w-[26%] font-medium") : n === r.length - 1 ? "text-[var(--fr-muted)]" : ""}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Frame>
  );
}

/* ---------- Flow strip: Describe → Check → Act (Process section) ---------- */

const flowCard =
  "flex flex-col gap-1.5 rounded-[12px] bg-[var(--fr-card)] px-4 pb-4 pt-5 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_24px_-12px_rgba(16,24,40,0.10)]";
const flowEyebrow = "text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--fr-muted)]";
const flowChip =
  "inline-flex items-center gap-1.5 rounded-full border border-[var(--fr-border)] bg-[var(--fr-card)] px-2.5 py-0.5 text-[11px] font-medium";
const flowBtn =
  "inline-flex items-center rounded-[6px] border border-[var(--fr-border)] bg-[var(--fr-card)] px-2.5 py-1 text-[11px] whitespace-nowrap";
const flowExample = "rounded-full border border-[var(--fr-border)] bg-[var(--fr-card)] px-2 py-0.5";

function FlowDescribe() {
  return (
    <>
      <div className="rounded-[12px] border border-[var(--fr-border)] bg-[var(--fr-card)]">
        <div className="flex flex-col gap-1.5 border-b border-[var(--fr-border)] p-3 text-[12px]">
          <p className="font-medium">Your situation and needs</p>
          <p className="leading-[1.5]">
            We’re a four-person medtech team in Basel with a working prototype. We need access to a
            lab and our first non-dilutive funding.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 px-2.5 py-2">
          <div className="flex rounded-full bg-[var(--fr-secondary)] p-0.5 text-[10px] text-[var(--fr-muted)]">
            <span className="px-1.5 py-0.5">Auto</span>
            <span className="px-1.5 py-0.5">English</span>
            <span className="rounded-full bg-[var(--fr-card)] px-1.5 py-0.5 font-medium text-[var(--fr-link)]">
              Deutsch
            </span>
            <span className="px-1.5 py-0.5">Français</span>
          </div>
          <span className="whitespace-nowrap rounded-[8px] bg-[var(--fr-primary)] px-2.5 py-1.5 text-[11px] font-medium text-[var(--fr-primary-fg)]">
            Find my path
          </span>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-1.5 text-[10px]">
        <span className="text-[var(--fr-muted)]">Try an example:</span>
        <span className={flowExample}>Researcher planning a spin-off (French)</span>
        <span className={flowExample}>Growing biotech before Series A</span>
        <span className={flowExample}>Founder moving to Basel (German)</span>
      </div>
    </>
  );
}

function FlowCheck() {
  return (
    <>
      <div className={flowCard}>
        <p className={flowEyebrow}>What you wrote</p>
        <p className="text-[13px] leading-[1.45]">
          “We’re a four-person medtech team in Basel with a working prototype…”
        </p>
      </div>
      <div className={flowCard}>
        <p className={flowEyebrow}>How FadäRhy understood it</p>
        <p className="text-[13px]">4 people · Seed · Medical Devices</p>
        <div className="flex flex-wrap gap-1.5">
          <span className={flowChip}>Lab space</span>
          <span className={flowChip}>Grants</span>
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <span className={`${flowBtn} px-3 py-2`}>Edit</span>
        <span className="rounded-[8px] bg-[var(--fr-primary)] px-3 py-2 text-[12px] font-medium text-[var(--fr-primary-fg)]">
          Find matches
        </span>
      </div>
    </>
  );
}

function FlowAct() {
  return (
    <>
      <div className="flex justify-end">
        <div className="flex rounded-full border border-[var(--fr-border)] bg-[var(--fr-card)] p-0.5 text-[10px] text-[var(--fr-muted)]">
          <span className="rounded-full bg-[var(--fr-primary)] px-2 py-0.5 font-medium text-[var(--fr-primary-fg)]">
            Matches
          </span>
          <span className="px-2 py-0.5">Plan</span>
          <span className="px-2 py-0.5">Map</span>
        </div>
      </div>
      <p className="flex items-center gap-1.5 text-[12px] font-medium">
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--fr-primary)]" />
        Lab space <span className="font-normal text-[var(--fr-muted)]">4 matches</span>
      </p>
      <div className="flex flex-col gap-2 rounded-[12px] border border-[var(--fr-border)] bg-[var(--fr-card)] p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-wrap gap-1">
            <span className={flowChip}>Lab space</span>
            <span className={flowChip}>Basel-Landschaft</span>
          </div>
          <span className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-full border-[3px] border-[var(--fr-primary)] border-r-[var(--fr-info-soft)] text-[11px] font-medium">
            71
          </span>
        </div>
        <p className="text-[14px] font-medium leading-[1.3]">
          Switzerland Innovation Park Basel Area
        </p>
        <p className="text-[12px] text-[var(--fr-muted)]">Fits seed stage.</p>
        <p className="text-[10px] text-[var(--fr-muted)]">
          Source: Switzerland Innovation Park Basel · verified Oct 2026
        </p>
        <p className="text-[10px] font-medium text-[var(--fr-link)]">▸ Why this match</p>
        <div className="flex items-center gap-1.5 border-t border-[var(--fr-border)] pt-2">
          <span className={flowBtn}>Save</span>
          <span className={flowBtn}>Draft intro</span>
        </div>
      </div>
    </>
  );
}

const flowSteps = [
  {
    num: "01 Describe",
    screenTitle: "Is this how you would describe your team?",
    title: "Understandable",
    text: "Plain language in. No need to know the ecosystem’s categories first.",
    screen: <FlowDescribe />,
  },
  {
    num: "02 Check",
    screenTitle: "Is this how you would describe your team?",
    title: "Trustworthy",
    text: "Founders see how they were understood and correct it before any matching.",
    screen: <FlowCheck />,
  },
  {
    num: "03 Act",
    screenTitle: "8 matches for 2 needs",
    title: "Actionable",
    text: "Ranked matches with sources, a 12-month plan and draft introductions.",
    screen: <FlowAct />,
  },
];

/** Three redrawn screens, one per step, each paired with the quality it is designed for. */
export function FadarhyFlowStrip() {
  return (
    <Reveal className="fr-theme text-[var(--fr-fg)]">
      <ol className="grid gap-x-6 gap-y-12 lg:grid-cols-3">
        {flowSteps.map((step) => (
          <li key={step.num} className="flex min-w-0 flex-col gap-3.5">
            <div className="flex flex-col justify-center gap-2 overflow-hidden rounded-[12px] bg-[var(--fr-secondary)] px-4 py-2 leading-snug lg:min-h-[350px] shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_24px_-12px_rgba(16,24,40,0.10)]">
              <p className="flex items-end text-[15px] font-medium tracking-[-0.02em] lg:min-h-[2.75em]">
                {step.screenTitle}
              </p>
              <div className="flex flex-col gap-3 lg:min-h-[260px]">{step.screen}</div>
            </div>
            <p className="font-mono text-[13px] font-medium text-[var(--fr-link)]">{step.num}</p>
            <h3 className="text-[24px] font-medium leading-[1.3] tracking-[-0.02em]">
              {step.title}
            </h3>
            <p className="text-[15px] leading-[1.5] text-[var(--fr-muted)]">{step.text}</p>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

const walkthrough = [
  {
    step: "01",
    title: "Describe",
    url: "app.fadarhy.ch",
    src: "/images/fadarhy/fadarhy-describe.jpg",
    alt: "FadäRhy homepage with the natural-language field filled in: “We are a six-person oncology startup preparing for Series A. We need BSL-2 laboratory space, regulatory expertise, potential investors and pharma partners.” Below it are the language selector, Speak, Find my path and example prompts.",
    text: "A single plain-language field, with example prompts and a visible language choice, replaces filters founders would otherwise have to learn first.",
  },
  {
    step: "02",
    title: "Explore",
    url: "app.fadarhy.ch/results",
    src: "/images/fadarhy/fadarhy-results.jpg",
    alt: "FadäRhy Results page: “16 matches for 4 needs”, a plain-language refine field, filters, and lab-space match cards each showing a score, a reason, a dated source and “Why this match”.",
    text: "Matches are grouped by need, and every card shows its score, reason and dated source, so founders can judge each result rather than trust a ranking.",
  },
  {
    step: "03",
    title: "Act",
    url: "app.fadarhy.ch/shortlist",
    src: "/images/fadarhy/fadarhy-act.jpg",
    alt: "FadäRhy Shortlist with three saved organisations and an open “Intro email to SIP Main Campus Shared Lab” dialog: an editable subject and message, an approval checkbox, Copy, and a disabled “Open in mail client” button.",
    text: "Saved organisations become editable intro drafts, and nothing leaves the app until the founder approves it and opens it in their own mail client.",
  },
];

/** Three real screenshots from app.fadarhy.ch, each in the same browser frame. */
export function FadarhyWalkthrough() {
  return (
    <Reveal>
      <ol className="grid gap-x-6 gap-y-12 lg:grid-cols-3">
        {walkthrough.map((w) => (
          <li key={w.step} className="min-w-0">
            <a
              href={w.src}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open the ${w.title} screenshot at full size`}
              className="block overflow-hidden rounded-xl border border-border bg-card transition-opacity hover:opacity-90"
            >
              <div
                aria-hidden="true"
                className="flex items-center gap-3 border-b border-border px-3 py-2"
              >
                <span className="flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-border" />
                  <span className="h-2 w-2 rounded-full bg-border" />
                  <span className="h-2 w-2 rounded-full bg-border" />
                </span>
                <span className="min-w-0 flex-1 truncate rounded-md bg-muted px-2 py-0.5 text-center text-[11px] text-muted-foreground">
                  {w.url}
                </span>
              </div>
              <img
                src={w.src}
                alt={w.alt}
                loading="lazy"
                decoding="async"
                width={1800}
                height={1125}
                className="block h-auto w-full"
              />
            </a>
            <p className="mt-5 text-[13px] text-muted-foreground">
              <span className="tabular-nums">{w.step}</span> — {w.title}
            </p>
            <p className="mt-2 text-[15px] leading-[1.6]">{w.text}</p>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

export function FadarhyAcceptance() {
  return (
    <Table
      title="Acceptance checks"
      note="One observable property per row"
      head={["Area", "Pass when", "Evidence"]}
      rows={[
        [
          "Semantic colour",
          "Actions, text, surfaces, links and match states use catalog roles only.",
          "Token audit",
        ],
        [
          "Themes",
          "Hierarchy, readable text and visible focus hold in light and dark.",
          "Side-by-side renders, contrast",
        ],
        [
          "Buttons & forms",
          "Approved variants; visible labels; clear disabled and error states.",
          "State walkthrough",
        ],
        [
          "Recommendations",
          "Every card shows a reason, a source and a next action.",
          "Results review",
        ],
        [
          "Access",
          "Status messages are written out; the Graph view has a list alternative; icon links aren’t announced twice.",
          "Keyboard & screen reader",
        ],
      ]}
    />
  );
}

export function FadarhyRubric() {
  return (
    <Table
      title="Scoring rubric"
      note="0 missing · 1 partial · 2 supported"
      head={["Dimension", "Question", "How to verify"]}
      rows={[
        [
          "Profile fidelity",
          "Are team, stage, field, location and needs preserved?",
          "Compare profile to input",
        ],
        [
          "Relevance & coverage",
          "Does each match fit the constraints, and are small categories not crowded out by large ones?",
          "Read reasons; check category mix",
        ],
        [
          "Discrimination",
          "Do scores and reasons separate strong from weak matches, consistently across runs?",
          "Compare within a group; rerun five times",
        ],
        [
          "Evidence & fabrication",
          "Do sources back the claim, and is nothing (organisation, deadline, eligibility) invented?",
          "Open source; check the directory",
        ],
        [
          "Language parity",
          "Is quality equal in EN, DE, FR and Baseldütsch, including the drafted intro?",
          "Same scenario, four languages",
        ],
        [
          "Action & control",
          "Is the next step clear, and can the founder correct, refine and revisit?",
          "Run Check, refine, Shortlist",
        ],
      ]}
    />
  );
}

export function FadarhyFirstRun() {
  return (
    <Table
      title="A first run: medtech in Basel — found → fix"
      note="One run · not a benchmark"
      head={["Finding", "What we saw", "What to change"]}
      rows={[
        [
          "Location dropped",
          "“in Basel” became “Where to look: All regions”.",
          "Carry a stated location into the profile; add it to every scenario’s pass criteria.",
        ],
        [
          "Scores don’t rank",
          "Four labs, all 71, all “Fits seed stage.” The reason mentions only stage, so the medtech field likely added nothing to the score.",
          "Map medtech to medical devices; build reasons from every matched attribute; explain the score in “Why this match”.",
        ],
        [
          "Availability unclear",
          "One lab is “planned”, shown with the same weight as open ones.",
          "Show availability beside the score; rank planned space lower when the need is immediate.",
        ],
        [
          "Intro in one language",
          "In the October code, intro drafts are always in English.",
          "Draft in the answer language; check it in the language-parity run.",
        ],
      ]}
    />
  );
}

export function FadarhyLoop() {
  return (
    <CardGrid
      cols={4}
      items={[
        {
          kicker: "01 / Define",
          title: "Pick a founder scenario and its pass criteria.",
          text: "",
        },
        { kicker: "02 / Run", title: "Go through Describe → Check → Act.", text: "" },
        {
          kicker: "03 / Review",
          title: "Log missing facts, unsupported claims and confusing steps.",
          text: "",
        },
        {
          kicker: "04 / Improve",
          title: "Fix the prompt, mapping, source or screen, then rerun.",
          text: "",
        },
      ]}
    />
  );
}

export function FadarhyRules() {
  return (
    <Reveal className="rounded-2xl border border-border bg-[#f4f6fb] p-4 dark:bg-muted sm:p-6">
      <div className="mb-6 flex flex-wrap items-center gap-6 rounded-2xl bg-muted p-6 sm:p-8">
        <div className="flex items-center gap-5">
          <span className="text-[64px] font-semibold leading-none tracking-[-0.06em]">111</span>
          <p className="border-l border-border pl-5 text-[14px] leading-[1.5] text-muted-foreground">
            Hard-coded
            <br />
            hex values
            <br />
            in the original audit
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex gap-3">
            {["#2446f5", "#ea802b", "#dadbe0"].map((value) => (
              <div key={value} className="text-center">
                <span
                  className="mb-2 block h-10 w-12 rounded-xl"
                  style={{ backgroundColor: value }}
                />
                <code className="text-[10px]">{value}</code>
              </div>
            ))}
          </div>
          <span aria-hidden="true" className="text-[28px]">
            →
          </span>
          <div className="flex flex-wrap gap-2">
            {["--primary", "--card", "--focus-ring"].map((role) => (
              <code key={role} className="rounded-xl bg-background px-3 py-3 text-[12px]">
                {role}
              </code>
            ))}
          </div>
        </div>
      </div>
      <ol className="grid gap-5 md:grid-cols-3">
        {[
          {
            label: "Define",
            title: "Design rules",
            text: "Tokens, components and usage guidelines.",
            note: "CLAUDE.md",
            Icon: FileCode2,
          },
          {
            label: "Validate",
            title: "Code consistency",
            text: "Identify hard-coded values and token violations.",
            note: "Automated linting · Proposed",
            Icon: ScanSearch,
          },
          {
            label: "Review",
            title: "Experience quality",
            text: "Check hierarchy, interaction and accessibility.",
            note: "Acceptance criteria",
            Icon: ScanEye,
          },
        ].map(({ label, title, text, note, Icon }, index) => (
          <li
            key={title}
            className="flex flex-col rounded-2xl border border-border bg-card p-5 sm:p-6"
          >
            <p className="mb-4 text-[13px] uppercase text-muted-foreground">
              <span className="tabular-nums">0{index + 1}</span> — {label}
            </p>
            <div className="mb-6 flex items-start gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted">
                <Icon aria-hidden="true" size={27} strokeWidth={1.6} />
              </span>
              <div>
                <h3 className="text-[23px] font-semibold leading-tight">{title}</h3>
                <p className="mt-3 text-[16px] leading-[1.6] text-muted-foreground">{text}</p>
              </div>
            </div>
            <p className="mt-auto rounded-xl border border-border bg-muted px-4 py-3 text-[14px]">
              {note}
            </p>
          </li>
        ))}
      </ol>
      <div className="mt-8 border-t border-border pt-6">
        <h3 className="mb-4 text-[20px] font-medium">What the interface must satisfy</h3>
        <ul className="flex flex-wrap gap-3">
          {[
            "Semantic colors",
            "Light & dark themes",
            "Component states",
            "Explainable matches",
            "Accessibility",
          ].map((item) => (
            <li key={item} className="rounded-xl border border-border px-4 py-3 text-[14px]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export const fadarhyVisuals = {
  "fadarhy-rules": FadarhyRules,
  "fadarhy-flow-strip": FadarhyFlowStrip,
  "fadarhy-walkthrough": FadarhyWalkthrough,
  "fadarhy-system-comparison": FadarhySystemComparison,
  "fadarhy-system-journey": FadarhySystemJourney,
  "fadarhy-tokens": FadarhyTokens,
  "fadarhy-components": FadarhyComponents,
  "fadarhy-acceptance": FadarhyAcceptance,
  "fadarhy-scenarios": FadarhyScenarios,
  "fadarhy-rubric": FadarhyRubric,
  "fadarhy-first-run": FadarhyFirstRun,
  "fadarhy-loop": FadarhyLoop,
} as const;

export type FadarhyVisualName = keyof typeof fadarhyVisuals;
