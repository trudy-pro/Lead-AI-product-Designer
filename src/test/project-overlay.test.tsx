import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { AiProjectPreview } from "@/components/ai-project-preview";
import { ProjectOverlay } from "@/components/project-overlay";

afterEach(cleanup);

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "reflection", label: "Reflection" },
];

function renderOverlay() {
  return render(
    <ProjectOverlay
      trigger="Jia"
      title="Jia"
      subtitle="Loan App — UI/UX case study"
      iconSrc="/icon.png"
      sections={sections}
    >
      <section id="introduction">Intro content</section>
      <section id="reflection">Reflection content</section>
    </ProjectOverlay>,
  );
}

describe("Project overlay", () => {
  it("shows the Jia dashboard preview when the project trigger is hovered", () => {
    render(
      <AiProjectPreview project="jia" image="/jia-dashboard.png">
        <button type="button">Jia</button>
      </AiProjectPreview>,
    );

    fireEvent.mouseEnter(screen.getByRole("button", { name: "Jia" }));

    expect(screen.getByRole("tooltip")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "jia dashboard preview" })).toHaveAttribute(
      "src",
      "/jia-dashboard.png",
    );
  });

  it("opens the large project view when the trigger is clicked, without navigating", () => {
    renderOverlay();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Jia" }));
    expect(screen.getByRole("dialog", { name: "Jia case study" })).toBeInTheDocument();
    expect(screen.getByText("Intro content")).toBeInTheDocument();
  });

  it("scrolls only the content pane and follows its active section", () => {
    renderOverlay();
    fireEvent.click(screen.getByRole("button", { name: "Jia" }));
    const dialog = screen.getByRole("dialog");
    const pane = dialog.querySelector<HTMLElement>(".project-overlay-scroll")!;
    const reflection = pane.querySelector<HTMLElement>("#reflection")!;
    const paneScroll = vi.fn();
    pane.scrollTo = paneScroll;
    vi.spyOn(pane, "getBoundingClientRect").mockReturnValue({ top: 0 } as DOMRect);
    const reflectionRect = vi
      .spyOn(reflection, "getBoundingClientRect")
      .mockReturnValue({ top: 600 } as DOMRect);
    Object.defineProperties(pane, {
      clientHeight: { configurable: true, value: 800 },
      scrollHeight: { configurable: true, value: 2000 },
    });

    fireEvent.click(screen.getByRole("link", { name: "Reflection" }));
    expect(paneScroll).toHaveBeenCalledWith({ top: 600, behavior: "smooth" });

    reflectionRect.mockReturnValue({ top: 100 } as DOMRect);
    fireEvent.scroll(pane);
    expect(screen.getByRole("link", { name: "Reflection" })).toHaveAttribute(
      "aria-current",
      "true",
    );
    expect(screen.getByRole("link", { name: "Introduction" })).not.toHaveAttribute("aria-current");

    reflectionRect.mockReturnValue({ top: 600 } as DOMRect);
    fireEvent.scroll(pane);
    expect(screen.getByRole("link", { name: "Introduction" })).toHaveAttribute(
      "aria-current",
      "true",
    );
  });

  it("keeps the page mounted and scrolling locked until the exit slide finishes", () => {
    renderOverlay();
    fireEvent.click(screen.getByRole("button", { name: "Jia" }));
    fireEvent.keyDown(window, { key: "Escape" });
    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(document.documentElement.style.overflow).toBe("hidden");
    const exit = new Event("animationend", { bubbles: true });
    Object.defineProperty(exit, "animationName", { value: "overlay-panel-out" });
    fireEvent(dialog, exit);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(document.documentElement.style.overflow).toBe("");
    expect(screen.getByRole("button", { name: "Jia" })).toHaveFocus();

    fireEvent.click(screen.getByRole("button", { name: "Jia" }));
    fireEvent.click(screen.getByRole("button", { name: "Close Jia case study" }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    fireEvent(screen.getByRole("dialog"), exit);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
