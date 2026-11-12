import { useRef, useState, type ReactNode } from "react";
import { useServerFn } from "@tanstack/react-start";
import { getProjectPreview } from "@/lib/project-preview.functions";
import type { ProjectKey } from "@/lib/projects";

const clientCache = new Map<ProjectKey, { text: string | null; error: string | null }>();

export function AiProjectPreview({
  project,
  image,
  imageWidth,
  phoneFrame = false,
  children,
}: {
  project: ProjectKey;
  image?: string;
  imageWidth?: number;
  phoneFrame?: boolean;
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
          style={imageWidth ? { width: imageWidth } : undefined}
          className={`pointer-events-none absolute top-full left-0 z-50 mt-2 block max-w-[calc(100vw-2rem)] text-[13px] leading-snug text-foreground ${phoneFrame ? "" : "rounded-lg border border-border bg-background shadow-lg"} ${
            image ? (phoneFrame ? "w-[120px]" : "w-[min(24rem,calc(100vw-2rem))] p-2") : "w-64 p-3"
          }`}
        >
          {image ? (
            phoneFrame ? (
              <span className="relative block overflow-hidden rounded-[22px] border-[4px] border-[#161616] bg-white shadow-lg">
                <span
                  aria-hidden="true"
                  className="absolute top-[4px] left-1/2 z-10 h-[7px] w-[32px] -translate-x-1/2 rounded-full bg-[#161616]"
                />
                <img
                  src={image}
                  alt={`${project} mobile verification preview`}
                  className="block aspect-[187/321] w-full object-fill"
                />
              </span>
            ) : (
              <img
                src={image}
                alt={`${project} dashboard preview`}
                className="block w-full rounded-md"
              />
            )
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
