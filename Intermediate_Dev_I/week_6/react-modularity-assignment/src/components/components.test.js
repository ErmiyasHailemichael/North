import { render, screen } from "@testing-library/react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./SharedComponents";
import { ContentA } from "./ContentA";
import { ContentB } from "./ContentB";

// Normal Test 1 — Header renders correctly
test("Header renders with correct title", () => {
  render(<Header />);
  expect(screen.getByText("React Modularity")).toBeInTheDocument();
});

// Normal Test 2 — Footer renders correctly
test("Footer renders with copyright text", () => {
  render(<Footer />);
  expect(screen.getByText("© 2025 React Modularity Assignment")).toBeInTheDocument();
});

// Normal Test 3 — Button renders with correct label
test("Button renders with correct label", () => {
  render(<Button label="Learn More" />);
  expect(screen.getByText("Learn More")).toBeInTheDocument();
});

// Edge Case 1 — Button renders with empty label
test("Button renders with empty label", () => {
  render(<Button label="" />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

// Edge Case 2 — ContentA and ContentB both render the Button
test("ContentA renders a Button component", () => {
  render(<ContentA />);
  expect(screen.getByText("Learn More")).toBeInTheDocument();
});

test("ContentB renders a Button component", () => {
  render(<ContentB />);
  expect(screen.getByText("Explore")).toBeInTheDocument();
});