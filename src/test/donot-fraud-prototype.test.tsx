import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { OnboardingFlow } from "@/components/donot-fraud/onboarding/OnboardingFlow";

beforeEach(() => vi.useFakeTimers());
afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

function begin() {
  fireEvent.change(screen.getByLabelText("First name"), { target: { value: "Sam" } });
  fireEvent.change(screen.getByLabelText("Last name"), { target: { value: "Keller" } });
  fireEvent.change(screen.getByLabelText("Email address"), {
    target: { value: "sam@example.com" },
  });
  fireEvent.click(screen.getByRole("button", { name: "Continue" }));
  fireEvent.click(screen.getByRole("radio", { name: /Continue with a passkey/ }));
  fireEvent.click(screen.getByRole("button", { name: "Continue" }));
  act(() => vi.advanceTimersByTime(1800));
}

it("validates missing fields and completes the requirements-met scenario", () => {
  render(<OnboardingFlow embedded interactive />);
  fireEvent.click(screen.getByRole("button", { name: "Continue" }));
  expect(screen.getByText("Enter your first name.")).toBeInTheDocument();
  begin();
  expect(screen.getByRole("heading", { name: "Your account is ready." })).toBeInTheDocument();
});

it("explains and completes an additional simulated check", () => {
  render(<OnboardingFlow embedded interactive initialScenario="B" />);
  begin();
  expect(screen.getByRole("heading", { name: "One more check is needed." })).toBeInTheDocument();
  fireEvent.click(
    screen.getByRole("button", { name: "Continue with a trusted provider (simulated)" }),
  );
  act(() => vi.advanceTimersByTime(1800));
  expect(screen.getByRole("heading", { name: "Your account is ready." })).toBeInTheDocument();
});

it("preserves details and offers recovery after an unsuccessful check", () => {
  render(<OnboardingFlow embedded interactive initialScenario="C" />);
  begin();
  expect(
    screen.getByRole("heading", { name: "We couldn't complete verification." }),
  ).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Choose another method/ }));
  fireEvent.click(screen.getByRole("button", { name: "Back" }));
  expect(screen.getByLabelText("First name")).toHaveValue("Sam");
  expect(screen.getByLabelText("Email address")).toHaveValue("sam@example.com");
});
