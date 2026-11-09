import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ContextualPreviewOverlay, ContextualPreviewProvider } from "@/components/contextual-preview-overlay";

afterEach(cleanup);

function renderPreviews() {
  return render(<ContextualPreviewProvider>
    {["Chronicle", "Second"].map((trigger) => <ContextualPreviewOverlay key={trigger}
      trigger={trigger} title={`Preview ${trigger}`} description="Muse questions"
      imageSrc="/preview.png" imageAlt="Muse interface" />)}
  </ContextualPreviewProvider>);
}

describe("Click-to-reveal previews", () => {
  it("starts closed and toggles with the same text trigger", () => {
    renderPreviews();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Chronicle" }));
    expect(screen.getByRole("dialog", { name: "Preview Chronicle" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Chronicle" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("allows only one preview when another trigger opens", () => {
    renderPreviews();
    fireEvent.click(screen.getByRole("button", { name: "Chronicle" }));
    fireEvent.click(screen.getByRole("button", { name: "Second" }));
    expect(screen.getAllByRole("dialog")).toHaveLength(1);
    expect(screen.getByRole("dialog", { name: "Preview Second" })).toBeInTheDocument();
  });

  it("dismisses with Escape", async () => {
    renderPreviews();
    fireEvent.click(screen.getByRole("button", { name: "Chronicle" }));
    fireEvent.keyDown(document, { key: "Escape" });
    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
  });
});