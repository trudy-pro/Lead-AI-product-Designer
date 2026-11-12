import {
  CaseStudyImage,
  CaseStudyVideo,
  EditorialContentSection,
  NextProjectNavigation,
  ProjectDetail,
  Prose,
  Reveal,
} from "@/components/case-study/case-study";
import { attestVisuals } from "@/components/case-study/attest-visuals";
import { fadarhyVisuals } from "@/components/case-study/fadarhy-visuals";
import type { CaseStudy, CaseStudyBlock } from "@/content/case-studies";

const detailSpan = [
  "",
  "col-span-2 sm:col-span-1",
  "col-span-2",
  "col-span-2 sm:col-span-3",
] as const;

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-t border-border pt-3">
      <dt className="text-[13px] text-muted-foreground">{k}</dt>
      <dd className="mt-1 text-[15px]">{v}</dd>
    </div>
  );
}

function Callout({
  tone,
  title,
  text,
}: {
  tone: "evidence" | "boundary" | "extension";
  title: string;
  text: string;
}) {
  const label =
    tone === "evidence" ? "Evidence" : tone === "boundary" ? "Scope boundary" : "Independent work";
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
          {block.title && <h3 className="text-[23px] font-semibold leading-tight">{block.title}</h3>}
          {block.paragraphs.map((paragraph, index) => {
            if (typeof paragraph === "string") {
              return <p key={index}>{paragraph}</p>;
            }

            const emphasisIndex = paragraph.text.indexOf(paragraph.strong);
            if (emphasisIndex < 0) {
              return <p key={index}>{paragraph.text}</p>;
            }

            return (
              <p key={index}>
                {paragraph.text.slice(0, emphasisIndex)}
                <strong>{paragraph.strong}</strong>
                {paragraph.text.slice(emphasisIndex + paragraph.strong.length)}
              </p>
            );
          })}
        </Prose>
      );
    case "callout":
      return <Callout tone={block.tone} title={block.title} text={block.text} />;
    case "table":
      return (
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <h3 className="border-b border-border bg-muted px-6 py-4 text-[16px] font-medium">
              {block.title}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[660px] border-collapse text-left text-[14px]">
                <caption className="sr-only">{block.title}</caption>
                <thead>
                  <tr>
                    {block.head.map((heading) => (
                      <th
                        key={heading}
                        scope="col"
                        className="border-b border-border px-6 py-3 text-[12px] font-medium text-muted-foreground"
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row) => (
                    <tr key={row[0]} className="border-b border-border last:border-0">
                      {row.map((cell, index) =>
                        index === 0 ? (
                          <th
                            key={index}
                            scope="row"
                            className="px-6 py-4 align-top font-medium leading-relaxed"
                          >
                            {cell}
                          </th>
                        ) : (
                          <td
                            key={index}
                            className="px-6 py-4 align-top leading-relaxed text-muted-foreground"
                          >
                            {cell}
                          </td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      );
    case "rows":
      return (
        <Reveal>
          {block.title && (
            <h3
              className={
                block.variant === "stacked"
                  ? "mb-6 text-[23px] font-semibold leading-tight"
                  : "mb-6 text-[13px] text-muted-foreground"
              }
            >
              {block.title}
            </h3>
          )}
          <dl className="max-w-[760px]">
            {block.rows.map(([term, def]) => (
              <div
                key={term}
                className={
                  block.variant === "stacked"
                    ? "space-y-2 py-4"
                    : "grid gap-1 border-t border-border py-4 sm:grid-cols-[240px_1fr] sm:gap-8"
                }
              >
                <dt
                  className={
                    block.variant === "stacked"
                      ? "text-[16px] font-semibold"
                      : "text-[16px] font-medium"
                  }
                >
                  {term}
                </dt>
                <dd className="text-[16px] leading-[1.6] text-muted-foreground">{def}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      );
    case "list": {
      const ListTag = block.ordered ? "ol" : "ul";
      return (
        <Prose>
          {block.title && (
            <h3
              className={
                block.title === "What I learned"
                  ? "text-[17px] font-semibold"
                  : "text-[13px] text-muted-foreground"
              }
            >
              {block.title}
            </h3>
          )}
          <ListTag className={`${block.ordered ? "list-decimal" : "list-disc"} space-y-2 pl-5`}>
            {block.items.map((item, index) => {
              if (typeof item === "string") return <li key={index}>{item}</li>;
              const position = item.text.indexOf(item.strong);
              return (
                <li key={index}>
                  {position < 0 ? (
                    item.text
                  ) : (
                    <>
                      {item.text.slice(0, position)}
                      <strong>{item.strong}</strong>
                      {item.text.slice(position + item.strong.length)}
                    </>
                  )}
                </li>
              );
            })}
          </ListTag>
        </Prose>
      );
    }
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
          className={
            block.variant === "mobile"
              ? "max-w-[420px]"
              : block.variant === "compact"
                ? "max-w-[680px]"
                : undefined
          }
        />
      );
    case "video":
      return (
        <CaseStudyVideo
          src={block.src}
          poster={block.poster}
          label={block.label}
          caption={block.caption}
        />
      );
    case "visual": {
      const Visual = { ...fadarhyVisuals, ...attestVisuals }[block.name];
      return <Visual />;
    }
    case "placeholder":
      // Owner note for evidence still to be added — not shown publicly.
      return null;
  }
}

/** Renders a data-driven case study in the shared editorial layout, used by the /work/* pages and the home-page overlays. */
export function CaseStudyContent({
  study,
  showNextNav = true,
  overlay = false,
}: {
  study: CaseStudy;
  showNextNav?: boolean;
  overlay?: boolean;
}) {
  return (
    <>
      <header className={overlay ? "project-editorial-header" : undefined}>
        {study.showcase && (
          <CaseStudyVideo
            className="case-cover-video mb-16"
            src={study.showcase.src}
            poster={study.showcase.poster}
            label={study.showcase.label}
          />
        )}
        <div className={study.details ? "grid gap-12" : "grid gap-12 xl:grid-cols-[1fr_260px]"}>
          <div>
            <h1 className="text-[64px] font-semibold leading-none tracking-[-0.03em] sm:text-[96px]">
              {study.name}
            </h1>
            {study.title && (
              <p className="mt-8 max-w-[680px] text-[26px] leading-[1.3] tracking-[-0.01em] sm:text-[32px]">
                {study.title}
              </p>
            )}
            {study.lede && (
              <p className="mt-8 max-w-[660px] text-[17px] leading-[1.7]">{study.lede}</p>
            )}
            {study.liveUrl && (
              <p className="mt-6 text-[15px]">
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:text-muted-foreground"
                >
                  Try the live app ↗
                </a>
              </p>
            )}
          </div>
          {!study.details && (
            <dl className="space-y-4 self-end">
              {study.facts.map((f) => (
                <Fact key={f.label} k={f.label} v={f.value} />
              ))}
            </dl>
          )}
        </div>
        {study.details && (
          <Reveal className="@container mt-10">
            <dl
              className={
                study.slug === "attest"
                  ? "project-details grid grid-cols-1 items-start gap-6 border-t border-border pb-4 pt-8 @[480px]:grid-cols-2 @[800px]:grid-cols-4"
                  : "project-details grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pb-4 pt-10 sm:grid-cols-[max-content_75px_minmax(0,1fr)] sm:gap-x-12"
              }
            >
              {study.details.map((d) => (
                <ProjectDetail
                  key={d.label}
                  label={d.label}
                  values={d.values}
                  className={detailSpan[d.span ?? 0]}
                />
              ))}
            </dl>
          </Reveal>
        )}
        {study.contribution && (
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
        )}
      </header>

      {study.sections.map((section, i) => (
        <EditorialContentSection
          key={section.id}
          id={section.id}
          index={i + 1}
          label={section.label}
          title={section.title}
          introduction={section.introduction}
        >
          {section.blocks.map((block, j) => (
            <Block key={j} block={block} />
          ))}
        </EditorialContentSection>
      ))}

      {showNextNav && <NextProjectNavigation />}
    </>
  );
}
