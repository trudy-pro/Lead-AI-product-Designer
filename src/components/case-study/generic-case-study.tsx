import {
  CaseStudyImage,
  EditorialContentSection,
  NextProjectNavigation,
  Prose,
  Reveal,
} from "@/components/case-study/case-study";
import type { CaseStudy, CaseStudyBlock } from "@/content/case-studies";

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-t border-border pt-3">
      <dt className="text-[13px] text-muted-foreground">{k}</dt>
      <dd className="mt-1 text-[15px]">{v}</dd>
    </div>
  );
}

function Callout({ tone, title, text }: { tone: "evidence" | "boundary" | "extension"; title: string; text: string }) {
  const label = tone === "evidence" ? "Evidence" : tone === "boundary" ? "Scope boundary" : "Independent work";
  return (
    <Reveal>
      <aside className="max-w-[660px] rounded-2xl border border-border bg-card p-6 sm:p-8">
        <p className="text-[13px] text-muted-foreground">{label}</p>
        <h3 className="mt-2 text-[17px] font-semibold">{title}</h3>
        <p className="mt-3 text-[16px] leading-[1.7]">{text}</p>
      </aside>
    </Reveal>
  );
}

function Block({ block }: { block: CaseStudyBlock }) {
  switch (block.type) {
    case "text":
      return (
        <Prose>
          {block.paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </Prose>
      );
    case "callout":
      return <Callout tone={block.tone} title={block.title} text={block.text} />;
    case "rows":
      return (
        <Reveal>
          {block.title && <h3 className="mb-6 text-[13px] text-muted-foreground">{block.title}</h3>}
          <dl className="max-w-[760px]">
            {block.rows.map(([term, def]) => (
              <div key={term} className="grid gap-1 border-t border-border py-4 sm:grid-cols-[240px_1fr] sm:gap-8">
                <dt className="text-[16px] font-medium">{term}</dt>
                <dd className="text-[16px] leading-[1.6] text-muted-foreground">{def}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      );
    case "list":
      return (
        <Prose>
          {block.title && <h3 className="text-[13px] text-muted-foreground">{block.title}</h3>}
          <ul className="list-disc space-y-2 pl-5">
            {block.items.map((item) => (
              <li key={item.slice(0, 40)}>{item}</li>
            ))}
          </ul>
        </Prose>
      );
    case "steps":
      return (
        <Reveal>
          <ol className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {block.steps.map((step, i) => (
              <li key={step.title} className="border-t border-border pt-4">
                <span className="mb-2 block text-[13px] tabular-nums text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[16px] font-medium">{step.title}</h3>
                <p className="mt-2 text-[16px] leading-[1.6] text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      );
    case "figure":
      return (
        <CaseStudyImage
          src={block.src}
          alt={block.alt}
          caption={block.caption}
          className={block.variant === "mobile" ? "max-w-[420px]" : undefined}
        />
      );
    case "placeholder":
      // Owner note for evidence still to be added — not shown publicly.
      return null;
  }
}

/** Renders a data-driven case study in the shared editorial layout, used by the /work/* pages and the home-page overlays. */
export function CaseStudyContent({ study, showNextNav = true, overlay = false }: {
  study: CaseStudy;
  showNextNav?: boolean;
  overlay?: boolean;
}) {
  return (
    <>
      <header className={overlay ? "project-editorial-header" : undefined}>
        <div className="grid gap-12 xl:grid-cols-[1fr_260px]">
          <div>
            <h1 className="text-[64px] font-semibold leading-none tracking-[-0.03em] sm:text-[96px]">{study.name}</h1>
            <p className="mt-8 max-w-[680px] text-[26px] leading-[1.3] tracking-[-0.01em] sm:text-[32px]">
              {study.title}
            </p>
            <p className="mt-8 max-w-[660px] text-[17px] leading-[1.7]">{study.lede}</p>
            {study.liveUrl && (
              <p className="mt-6 text-[15px]">
                <a href={study.liveUrl} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-muted-foreground">
                  Try the live app ↗
                </a>
              </p>
            )}
          </div>
          <dl className="space-y-4 self-end">
            {study.facts.map((f) => (
              <Fact key={f.label} k={f.label} v={f.value} />
            ))}
          </dl>
        </div>
        <Reveal className="mt-16">
          <div className="grid gap-12 border-t border-border pt-8 sm:grid-cols-2">
            <div>
              <h2 className="text-[13px] text-muted-foreground">What I did</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[16px] leading-[1.6]">
                {study.contribution.mine.map((item) => (
                  <li key={item.slice(0, 40)}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-[13px] text-muted-foreground">What I didn't do</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[16px] leading-[1.6] text-muted-foreground">
                {study.contribution.notMine.map((item) => (
                  <li key={item.slice(0, 40)}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </header>

      {study.sections.map((section, i) => (
        <EditorialContentSection key={section.id} id={section.id} index={i + 1} label={section.label} title={section.title}>
          {section.blocks.map((block, j) => (
            <Block key={j} block={block} />
          ))}
        </EditorialContentSection>
      ))}

      {showNextNav && <NextProjectNavigation />}
    </>
  );
}
