import * as Popover from "@radix-ui/react-popover";
import { createContext, useContext, useEffect, useId, useState, type ReactNode } from "react";
import { Link, type LinkProps } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const PreviewContext = createContext<{
  activeId: string | null;
  setActiveId: (id: string | null) => void;
} | null>(null);

export function ContextualPreviewProvider({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  return <PreviewContext.Provider value={{ activeId, setActiveId }}>{children}</PreviewContext.Provider>;
}

export interface ContextualPreviewOverlayProps {
  trigger: ReactNode;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  placement?: "bottom-start" | "bottom-end" | "top-start" | "top-end";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** When set, the whole card becomes a client-side link to this route. */
  to?: LinkProps["to"];
}

export function ContextualPreviewOverlay({
  trigger, title, description, imageSrc, imageAlt,
  placement = "bottom-start", open: controlledOpen, onOpenChange, to,
}: ContextualPreviewOverlayProps) {
  const id = useId();
  const group = useContext(PreviewContext);
  const [localOpen, setLocalOpen] = useState(false);
  const requestedOpen = controlledOpen ?? localOpen;
  const open = requestedOpen && (!group || group.activeId === id);
  const setActiveId = group?.setActiveId;

  useEffect(() => {
    if (controlledOpen) setActiveId?.(id);
  }, [controlledOpen, id, setActiveId]);

  useEffect(() => {
    if (requestedOpen && group && group.activeId !== id) {
      setLocalOpen(false);
      onOpenChange?.(false);
    }
  }, [group?.activeId, id, requestedOpen, onOpenChange]);

  function changeOpen(next: boolean) {
    if (next) group?.setActiveId(id);
    else if (group?.activeId === id) group.setActiveId(null);
    setLocalOpen(next);
    onOpenChange?.(next);
  }

  return (
    <Popover.Root open={open} onOpenChange={changeOpen} modal={false}>
      <Popover.Trigger asChild>
        <Button variant="link" className="contextual-preview-trigger">{trigger}</Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="contextual-preview"
          side={placement.startsWith("top") ? "top" : "bottom"}
          align={placement.endsWith("end") ? "end" : "start"}
          sideOffset={8}
          collisionPadding={12}
          sticky="always"
          hideWhenDetached
          aria-labelledby={`${id}-title`}
          aria-describedby={`${id}-description`}
          onOpenAutoFocus={(event) => event.preventDefault()}
          onCloseAutoFocus={(event) => event.preventDefault()}
        >
          {(() => {
            const body = <>
              <h3 id={`${id}-title`} className="contextual-preview-title">{title}</h3>
              <p id={`${id}-description`} className="contextual-preview-description">{description}</p>
              <img className="contextual-preview-image" src={imageSrc} alt={imageAlt} width={181} height={119} />
            </>;
            return to ? <Link to={to} className="contextual-preview-link" aria-label={`Open ${title} case study`}>{body}</Link> : body;
          })()}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}