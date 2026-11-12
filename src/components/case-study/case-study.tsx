import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

export interface CaseSection { id: string; label: string }

/** Tracks which section is currently in view for the sidebar highlight. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "");
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);
  return active;
}

export function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}

export function CaseStudySidebar({ sections, active, thumb, title, subtitle }: {
  sections: CaseSection[]; active: string; thumb?: string; title: string; subtitle: string;
}) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-12 space-y-10">
        <Link to="/" className="text-[13px] text-muted-foreground transition-colors hover:text-foreground">← Back to projects</Link>
        <div className="space-y-3">
          {thumb ? (
            <img src={thumb} alt="" className="h-10 w-10 rounded-lg object-cover" />
          ) : (
            <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-[15px] font-semibold">{title.charAt(0)}</span>
          )}
          <p className="text-[15px] font-semibold">{title}</p>
          <p className="text-[13px] leading-5 text-muted-foreground">{subtitle}</p>
        </div>
        <nav aria-label="Case study sections">
          <ul className="space-y-2 text-[13px]">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} onClick={(e) => { e.preventDefault(); scrollTo(s.id); }}
                  aria-current={active === s.id ? "true" : undefined}
                  className={`flex gap-3 transition-colors ${active === s.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                  <span className="tabular-nums">{String(i + 1).padStart(2, "0")}</span>{s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export function MobileCaseNav({ sections, active }: { sections: CaseSection[]; active: string }) {
  return (
    <div className="sticky top-0 z-20 -mx-6 mb-8 border-b border-border bg-background/95 px-6 py-3 backdrop-blur lg:hidden">
      <div className="flex items-center justify-between gap-4 text-[13px]">
        <Link to="/" className="text-muted-foreground">← Projects</Link>
        <label className="sr-only" htmlFor="case-nav">Jump to section</label>
        <select id="case-nav" value={active} onChange={(e) => scrollTo(e.target.value)}
          className="min-w-0 max-w-[60%] rounded-md border border-border bg-background px-2 py-1">
          {sections.map((s, i) => <option key={s.id} value={s.id}>{String(i + 1).padStart(2, "0")} — {s.label}</option>)}
        </select>
      </div>
    </div>
  );
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { setVisible(true); io.disconnect(); } }, { rootMargin: "0px 0px -10% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} data-visible={visible} className={`case-reveal ${className}`}>{children}</div>;
}

export function CaseStudyImage({ src, alt, caption, className = "", eager }: {
  src: string; alt: string; caption?: string | undefined; className?: string | undefined; eager?: boolean | undefined;
}) {
  return (
    <Reveal className={className}>
      <figure>
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} decoding="async" className="block h-auto w-full" />
        </div>
        {caption && <figcaption className="mt-4 text-[13px] text-muted-foreground">{caption}</figcaption>}
      </figure>
    </Reveal>
  );
}

/** Looping, muted showcase video styled to match CaseStudyImage. Shows the poster frame for reduced-motion users. */
export function CaseStudyVideo({ src, poster, label, caption, className = "" }: {
  src: string; poster?: string | undefined; label: string; caption?: string | undefined; className?: string | undefined;
}) {
  const reduceMotion = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  return (
    <Reveal className={className}>
      <figure>
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <video
            src={src} poster={poster} aria-label={label}
            autoPlay={!reduceMotion} muted loop playsInline controls={reduceMotion} preload="metadata"
            className="block h-auto w-full"
          />
        </div>
        {caption && <figcaption className="mt-4 text-[13px] text-muted-foreground">{caption}</figcaption>}
      </figure>
    </Reveal>
  );
}

export function EditorialContentSection({ id, index, label, title, children, introduction }: {
  id: string; index: number; label: string; title: string; children: ReactNode;
  introduction?: { heading?: string; text: string; label: string; value: string; caption: string } | undefined;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} data-continuation={!title || undefined} className={title ? "scroll-mt-20 pt-28 lg:scroll-mt-12 lg:pt-40" : "scroll-mt-20 pt-6 lg:scroll-mt-12"}>
      <p className={title ? "mb-5 text-[13px] text-muted-foreground" : "sr-only"}><span className="tabular-nums">{String(index).padStart(2, "0")}</span> — {label}</p>
      <div className={introduction ? "mb-10 grid items-center gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,0.9fr)] md:gap-10" : undefined}>
      <div>
      <h2 id={`${id}-h`} className={title ? "mb-10 max-w-[760px] text-[36px] font-semibold leading-[1.08] tracking-[-0.02em] sm:text-[52px]" : "sr-only"}>
        {introduction && title === "One language. Every interface." ? <>One language.<br />Every interface.</> : (title || label).split(/(\*\*.*?\*\*|\*[^*]+\*|\n)/g).map((part, i) =>
          part.startsWith("**") && part.endsWith("**")
            ? <strong key={i} className="font-bold">{part.slice(2, -2)}</strong>
            : part.startsWith("*") && part.endsWith("*")
              ? <em key={i}>{part.slice(1, -1)}</em>
              : part === "\n" ? <br key={i} /> : part,
        )}
      </h2>
      {introduction?.heading && <h3 className="mb-3 text-[23px] font-semibold leading-tight">{introduction.heading}</h3>}
      {introduction && <p className="max-w-[680px] text-[17px] leading-[1.65] text-muted-foreground sm:text-[20px]">{introduction.text}</p>}
      </div>
      {introduction && (
        <aside className="rounded-2xl bg-muted p-6 sm:p-8">
          <p className="text-[12px] uppercase text-muted-foreground">{introduction.label}</p>
          <p className="my-4 text-[80px] font-semibold leading-none tracking-[-0.06em] sm:text-[104px]">{introduction.value}</p>
          <p className="max-w-[280px] text-[14px] leading-[1.6] text-muted-foreground">{introduction.caption}</p>
        </aside>
      )}
      </div>
      <div className="space-y-12">{children}</div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="max-w-[660px] space-y-5 text-[17px] leading-[1.7]">{children}</div>;
}

export function NextProjectNavigation() {
  return (
    <nav aria-label="More projects" className="mt-40 flex items-center justify-between border-t border-border pt-8 text-[14px]">
      <Link to="/" className="text-muted-foreground transition-colors hover:text-foreground">← Back to all projects</Link>
      <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-muted-foreground transition-colors hover:text-foreground">Back to top ↑</button>
    </nav>
  );
}

/** Labelled group of chips used in case-study headers (Role, Year, Project type…). */
export function ProjectDetail({ label, values, className = "" }: { label: string; values: string[]; className?: string }) {
  return (
    <div className={className}>
      <dt className="text-[13px] font-normal leading-5 text-muted-foreground">{label}</dt>
      <dd className="mt-3 flex flex-wrap gap-2">
        {values.map((value) => (
          <span key={value} className="rounded-lg bg-foreground/[0.055] px-2.5 py-1 text-[13px] font-normal leading-[21px] text-foreground/75">{value}</span>
        ))}
      </dd>
    </div>
  );
}
