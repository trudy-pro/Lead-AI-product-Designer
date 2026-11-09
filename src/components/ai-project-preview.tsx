import { useRef, useState, type ReactNode } from "react";
import { useServerFn } from "@tanstack/react-start";
import { getProjectPreview } from "@/lib/project-preview.functions";
import type { ProjectKey } from "@/lib/projects";

const clientCache = new Map<ProjectKey, { text: string | null; error: string | null }>();

export function AiProjectPreview({
  project,
  image,
  children,
}: {
  project: ProjectKey;
  image?: string;
  children: ReactNode;
}) {
  const fetchPreview = useServerFn(getProjectPreview);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(() => clientCache.get(project) ?? null);
  const loading = useRef(false);

  const show = () => {
    setOpen(true);
    if (image || state || loading.current) return;
    loading.current = true;
    fetchPreview({ data: { key: project } })
      .catch(() => ({ text: null, error: "Preview unavailable." }))
      .then((r) => {
        if (r.text) clientCache.set(project, r);
        setState(r);
      })
      .finally(() => (loading.current = false));
  };

  return (
    <span
      className="relative inline-block"
      onMouseEnter={show}
      onMouseLeave={() => setOpen(false)}
      onFocus={show}
      onBlur={() => setOpen(false)}
    >
      {children}
      {open && (
        <span
          role="tooltip"
          className={`pointer-events-none absolute top-full left-0 z-50 mt-2 block max-w-[calc(100vw-2rem)] rounded-lg border border-border bg-background text-[13px] leading-snug text-foreground shadow-lg ${
            image ? "w-[min(24rem,calc(100vw-2rem))] p-2" : "w-64 p-3"
          }`}
        >
          {image ? (
            <img
              src={image}
              alt={`${project} dashboard preview`}
              className="block w-full rounded-md"
            />
          ) : (
            <span className="block text-muted-foreground">
              {state ? (
                (state.text ?? state.error)
              ) : (
                <span className="animate-pulse">Generating preview…</span>
              )}
            </span>
          )}
        </span>
      )}
    </span>
  );
}
