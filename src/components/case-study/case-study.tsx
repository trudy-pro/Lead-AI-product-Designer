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

export function EditorialContentSection({ id, index, label, title, children }: {
  id: string; index: number; label: string; title: string; children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="scroll-mt-20 pt-28 lg:scroll-mt-12 lg:pt-40">
      <p className="mb-5 text-[13px] text-muted-foreground"><span className="tabular-nums">{String(index).padStart(2, "0")}</span> — {label}</p>
      <h2 id={`${id}-h`} className="mb-10 max-w-[760px] text-[36px] font-semibold leading-[1.08] tracking-[-0.02em] sm:text-[52px]">{title}</h2>
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
