import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { FadarhySystemJourney, FadarhyTokens } from "@/components/case-study/fadarhy-visuals";

afterEach(cleanup);

it("keeps the selected semantic role while switching its theme value", () => {
  render(<FadarhyTokens />);
  fireEvent.click(screen.getByRole("button", { name: "Inspect match" }));
  fireEvent.click(screen.getByRole("button", { name: "Dark" }));
  expect(screen.getByRole("button", { name: "Inspect match" })).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  expect(screen.getByText("#11301F")).toBeInTheDocument();
  expect(screen.getByText("Strong match")).toBeInTheDocument();
});

it("moves through the sample journey and retains input and language when returning", () => {
  render(<FadarhySystemJourney />);
  fireEvent.change(screen.getByLabelText("Your situation and needs"), {
    target: { value: "Looking for lab space." },
  });
  fireEvent.click(screen.getByRole("button", { name: "Deutsch" }));
  fireEvent.click(screen.getByRole("button", { name: "Find my path →" }));
  expect(screen.getByText("Does this describe your team?")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Confirm profile →" }));
  expect(screen.getByText("Tech Park Basel")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Explore the live app ↗" })).toHaveAttribute(
    "href",
    "https://app.fadarhy.ch/",
  );
  fireEvent.click(
    within(screen.getByRole("group", { name: "Preview journey step" })).getByRole("button", {
      name: "01 / Describe",
    }),
  );
  expect(screen.getByLabelText("Your situation and needs")).toHaveValue("Looking for lab space.");
  expect(screen.getByRole("button", { name: "Deutsch" })).toHaveAttribute("aria-pressed", "true");
});
