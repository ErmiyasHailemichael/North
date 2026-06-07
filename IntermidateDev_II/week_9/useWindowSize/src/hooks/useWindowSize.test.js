import { renderHook, act } from "@testing-library/react";
import useWindowSize from "./useWindowSize";

// Helper to set window dimensions
function setWindowSize(width, height) {
  window.innerWidth = width;
  window.innerHeight = height;
  act(() => {
    window.dispatchEvent(new Event("resize"));
  });
}

// ── Normal Cases ─────────────────────────────────────────

test("returns current window size on initial render", () => {
  window.innerWidth = 1024;
  window.innerHeight = 768;
  const { result } = renderHook(() => useWindowSize());
  expect(result.current.width).toBe(1024);
  expect(result.current.height).toBe(768);
});

test("updates width and height when window is resized", () => {
  const { result } = renderHook(() => useWindowSize());
  setWindowSize(1280, 900);
  expect(result.current.width).toBe(1280);
  expect(result.current.height).toBe(900);
});

test("detects mobile breakpoint when width is below 768", () => {
  const { result } = renderHook(() => useWindowSize());
  setWindowSize(375, 667);
  expect(result.current.width).toBeLessThan(768);
});

// ── Edge Cases ───────────────────────────────────────────

test("handles width of exactly 768 (boundary breakpoint)", () => {
  const { result } = renderHook(() => useWindowSize());
  setWindowSize(768, 1024);
  expect(result.current.width).toBe(768);
});

test("handles very small window size", () => {
  const { result } = renderHook(() => useWindowSize());
  setWindowSize(1, 1);
  expect(result.current.width).toBe(1);
  expect(result.current.height).toBe(1);
});

test("handles very large window size", () => {
  const { result } = renderHook(() => useWindowSize());
  setWindowSize(3840, 2160);
  expect(result.current.width).toBe(3840);
  expect(result.current.height).toBe(2160);
});
