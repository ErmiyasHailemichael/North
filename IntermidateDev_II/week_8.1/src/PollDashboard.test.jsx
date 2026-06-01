import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import PollDashboard from "./PollDashboard";

vi.mock("chart.js", () => {
    function MockChart() {
      this.update = vi.fn();
      this.destroy = vi.fn();
      this.data = { datasets: [{ data: [] }] };
    }
    MockChart.register = vi.fn();
    return { Chart: MockChart, registerables: [] };
  });

// ── Normal cases ──────────────────────────────────────────────

describe("Normal cases", () => {

  it("TC-N1: renders all four frameworks on screen", () => {
    render(<PollDashboard />);

    expect(screen.getByTestId("vote-count-React")).toBeInTheDocument();
    expect(screen.getByTestId("vote-count-Vue")).toBeInTheDocument();
    expect(screen.getByTestId("vote-count-Angular")).toBeInTheDocument();
    expect(screen.getByTestId("vote-count-Svelte")).toBeInTheDocument();
  });

  it("TC-N2: all vote counts start at zero", () => {
    render(<PollDashboard />);

    expect(screen.getByTestId("vote-count-React")).toHaveTextContent("React: 0");
    expect(screen.getByTestId("vote-count-Vue")).toHaveTextContent("Vue: 0");
    expect(screen.getByTestId("vote-count-Angular")).toHaveTextContent("Angular: 0");
    expect(screen.getByTestId("vote-count-Svelte")).toHaveTextContent("Svelte: 0");
  });

  it("TC-N3: clicking vote increases that framework's count by 1", () => {
    render(<PollDashboard />);

    fireEvent.click(screen.getByTestId("vote-button-React"));

    expect(screen.getByTestId("vote-count-React")).toHaveTextContent("React: 1");
  });

});

// ── Edge cases ────────────────────────────────────────────────

describe("Edge cases", () => {

  it("TC-E1: voting for one framework does not affect others", () => {
    render(<PollDashboard />);

    fireEvent.click(screen.getByTestId("vote-button-React"));

    expect(screen.getByTestId("vote-count-Vue")).toHaveTextContent("Vue: 0");
    expect(screen.getByTestId("vote-count-Angular")).toHaveTextContent("Angular: 0");
    expect(screen.getByTestId("vote-count-Svelte")).toHaveTextContent("Svelte: 0");
  });

  it("TC-E2: clicking vote multiple times keeps accumulating", () => {
    render(<PollDashboard />);

    fireEvent.click(screen.getByTestId("vote-button-Vue"));
    fireEvent.click(screen.getByTestId("vote-button-Vue"));
    fireEvent.click(screen.getByTestId("vote-button-Vue"));

    expect(screen.getByTestId("vote-count-Vue")).toHaveTextContent("Vue: 3");
  });

  it("TC-E3: canvas element is present in the DOM for Chart.js to use", () => {
    render(<PollDashboard />);

    expect(screen.getByTestId("poll-chart")).toBeInTheDocument();
  });

});