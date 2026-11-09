import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import { createPortal } from "react-dom";
import { Link, type LinkProps } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import type { CaseSection } from "@/components/case-study/case-study";

export interface ProjectOverlayProps {
  trigger: ReactNode;
  title: string;
  subtitle: string;
  /** Optional icon; falls back to the first letter of the title. */
  iconSrc?: string;
  sections: CaseSection[];
  /** Optional link shown at the bottom of the sidebar (e.g. the full case study page). */
  fullPageHref?: LinkProps["to"];
  children: ReactNode;
}

/**
 * A large, immersive project-view overlay: clicking the inline trigger opens an
 * editorial case study above the portfolio without navigating away. The
 * underlying page stays mounted and keeps its scroll position.
 */
export function ProjectOverlay({
  trigger,
  title,
  subtitle,
  iconSrc,
  sections,
  fullPageHref,
  children,
}: ProjectOverlayProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <Button
        ref={triggerRef}
        variant="link"
        className="contextual-preview-trigger"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        {trigger}
      </Button>
      {open && (
        <ProjectOverlayPanel
          title={title}
          subtitle={subtitle}
          iconSrc={iconSrc}
          sections={sections}
          fullPageHref={fullPageHref}
          onClose={() => setOpen(false)}
          returnFocusTo={triggerRef}
        >
          {children}
        </ProjectOverlayPanel>
      )}
    </>
  );
}

function ProjectIcon({
  iconSrc,
  title,
  className,
}: {
  iconSrc?: string | undefined;
  title: string;
  className: string;
}) {
  if (iconSrc) return <img src={iconSrc} alt="" className={`${className} object-cover`} />;
  return (
    <span
      aria-hidden="true"
      className={`${className} flex items-center justify-center bg-muted text-[12px] font-semibold`}
    >
      {title.charAt(0)}
    </span>
  );
}

function ProjectOverlayPanel({
  title,
  subtitle,
  iconSrc,
  sections,
  fullPageHref,
  onClose,
  returnFocusTo,
  children,
}: {
  title: string;
  subtitle: string;
  iconSrc?: string | undefined;
  sections: CaseSection[];
  fullPageHref?: LinkProps["to"];
  onClose: () => void;
  returnFocusTo: RefObject<HTMLButtonElement | null>;
  children: ReactNode;
}) {
  const [closing, setClosing] = useState(false);
  const closingRef = useRef(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;
    const targets = sections
      .map((section) => root.querySelector<HTMLElement>(`[id="${section.id}"]`))
      .filter((el): el is HTMLElement => el !== null);
    const updateActive = () => {
      const threshold = root.getBoundingClientRect().top + root.clientHeight * 0.2;
      let current = targets[0];
      for (const target of targets) {
        if (target.getBoundingClientRect().top <= threshold) current = target;
      }
      if (root.scrollTop > 0 && root.scrollTop + root.clientHeight >= root.scrollHeight - 2) {
        current = targets.at(-1);
      }
      if (current) setActive(current.id);
    };
    updateActive();
    root.addEventListener("scroll", updateActive, { passive: true });
    return () => root.removeEventListener("scroll", updateActive);
  }, [sections]);

  function scrollToSection(id: string) {
    const root = scrollRef.current;
    const target = root?.querySelector<HTMLElement>(`[id="${id}"]`);
    if (!root || !target) return;
    const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
    root.scrollTo({
      top:
        root.scrollTop +
        target.getBoundingClientRect().top -
        root.getBoundingClientRect().top -
        margin,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }

  function close() {
    if (closingRef.current) return;
    closingRef.current = true;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      onCloseRef.current();
      return;
    }
    setClosing(true);
  }
  const closeRefFn = useRef(close);
  closeRefFn.current = close;

  useEffect(() => {
    const root = document.documentElement;
    const trigger = returnFocusTo.current;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeRefFn.current();
      if (e.key === "Tab") {
        const controls = Array.from(
          overlayRef.current?.querySelectorAll<HTMLElement>(
            'button, a[href], select, input, textarea, [tabindex="0"]',
          ) ?? [],
        ).filter((element) => element.getClientRects().length > 0);
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      root.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      trigger?.focus({ preventScroll: true });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nav = (
    <ul className="project-overlay-section-list">
      {sections.map((s) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(s.id);
            }}
            aria-current={active === s.id ? "true" : undefined}
            className="project-overlay-section-link"
          >
            {s.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return createPortal(
    <div
      ref={overlayRef}
      className="project-overlay"
      data-state={closing ? "closed" : "open"}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} case study`}
      onAnimationEnd={(event) => {
        if (
          event.target === event.currentTarget &&
          event.animationName === "overlay-panel-out" &&
          closingRef.current
        ) {
          onCloseRef.current();
        }
      }}
    >
      <div className="project-overlay-panel">
        <Button
          ref={closeRef}
          variant="ghost"
          size="icon"
          type="button"
          onClick={close}
          aria-label={`Close ${title} case study`}
          className="project-overlay-close"
        >
          <span aria-hidden="true">×</span>
        </Button>

        <aside className="project-overlay-sidebar">
          <div className="project-overlay-identity">
            <ProjectIcon iconSrc={iconSrc} title={title} className="project-overlay-project-icon" />
            <div>
              <p className="project-overlay-project-name">{title}</p>
              <p className="project-overlay-project-subtitle">{subtitle}</p>
            </div>
          </div>
          <nav aria-label="Case study sections" className="project-overlay-section-nav">
            {nav}
          </nav>
          {fullPageHref && (
            <Link to={fullPageHref} className="project-overlay-footer">
              {title} case study ↗
            </Link>
          )}
        </aside>

        <div ref={scrollRef} className="project-overlay-scroll">
          <div className="project-overlay-mobilebar">
            <div className="flex min-w-0 items-center gap-2.5">
              <ProjectIcon iconSrc={iconSrc} title={title} className="h-7 w-7 rounded-md" />
              <p className="truncate text-[14px] font-semibold">{title}</p>
            </div>
            <label className="sr-only" htmlFor="overlay-case-nav">
              Jump to section
            </label>
            <select
              id="overlay-case-nav"
              value={active}
              onChange={(e) => scrollToSection(e.target.value)}
              className="min-w-0 max-w-[55%] rounded-md border border-border bg-background px-2 py-1 text-[13px]"
            >
              {sections.map((s, i) => (
                <option key={s.id} value={s.id}>
                  {String(i + 1).padStart(2, "0")} — {s.label}
                </option>
              ))}
            </select>
          </div>
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
}
