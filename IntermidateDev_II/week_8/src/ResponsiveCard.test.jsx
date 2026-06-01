import { render, screen, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ResponsiveCard from "./ResponsiveCard";

// Helper that simulates the browser being resized
function resizeWindow(width, height) {
  window.innerWidth = width;
  window.innerHeight = height;
  window.dispatchEvent(new Event("resize"));
}

// ── Normal cases ──────────────────────────────────────────────

describe("Normal cases", () => {

  it("TC-N1: shows Desktop when width is above 768px", () => {
    window.innerWidth = 1280;
    window.innerHeight = 800;
    render(<ResponsiveCard />);

    expect(screen.getByTestId("breakpoint-badge")).toHaveTextContent("Desktop");
    expect(screen.getByTestId("width-display")).toHaveTextContent("1280");
  });

  it("TC-N2: shows Mobile when width is below 768px", () => {
    window.innerWidth = 375;
    window.innerHeight = 667;
    render(<ResponsiveCard />);

    expect(screen.getByTestId("breakpoint-badge")).toHaveTextContent("Mobile");
    expect(screen.getByTestId("width-display")).toHaveTextContent("375");
  });

  it("TC-N3: updates live when window is resized", async () => {
    window.innerWidth = 1280;
    window.innerHeight = 800;
    render(<ResponsiveCard />);

    await act(async () => {
      resizeWindow(500, 600);
    });

    expect(screen.getByTestId("width-display")).toHaveTextContent("500");
    expect(screen.getByTestId("breakpoint-badge")).toHaveTextContent("Mobile");
  });

});

// ── Edge cases ────────────────────────────────────────────────

describe("Edge cases", () => {

  it("TC-E1: 767px is treated as Mobile", () => {
    window.innerWidth = 767;
    window.innerHeight = 500;
    render(<ResponsiveCard />);

    expect(screen.getByTestId("breakpoint-badge")).toHaveTextContent("Mobile");
  });

  it("TC-E2: 768px is treated as Desktop", () => {
    window.innerWidth = 768;
    window.innerHeight = 500;
    render(<ResponsiveCard />);

    expect(screen.getByTestId("breakpoint-badge")).toHaveTextContent("Desktop");
  });

  it("TC-E3: removes the event listener when component unmounts", () => {
    window.innerWidth = 1280;
    window.innerHeight = 800;

    const addSpy = vi.spyOn(window, "addEventListener");
    const removeSpy = vi.spyOn(window, "removeEventListener");

    const { unmount } = render(<ResponsiveCard />);
    unmount();

    const added = addSpy.mock.calls.filter(([e]) => e === "resize");
    const removed = removeSpy.mock.calls.filter(([e]) => e === "resize");

    expect(added).toHaveLength(1);
    expect(removed).toHaveLength(1);
    expect(added[0][1]).toBe(removed[0][1]);
  });

});