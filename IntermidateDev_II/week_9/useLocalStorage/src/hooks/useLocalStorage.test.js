import { renderHook, act } from "@testing-library/react";
import useLocalStorage from "./useLocalStorage";

// Clear localStorage before each test so they don't interfere
beforeEach(() => {
  window.localStorage.clear();
});

// ── Normal Cases ─────────────────────────────────────────

test("returns the initial value when nothing is in localStorage", () => {
  const { result } = renderHook(() => useLocalStorage("theme", "light"));
  expect(result.current[0]).toBe("light");
});

test("updates the value when setter is called", () => {
  const { result } = renderHook(() => useLocalStorage("theme", "light"));
  act(() => {
    result.current[1]("dark");
  });
  expect(result.current[0]).toBe("dark");
});

test("persists the value to localStorage when state changes", () => {
  const { result } = renderHook(() => useLocalStorage("theme", "light"));
  act(() => {
    result.current[1]("dark");
  });
  expect(window.localStorage.getItem("theme")).toBe('"dark"');
});

// ── Edge Cases ───────────────────────────────────────────

test("loads existing value from localStorage on mount", () => {
  window.localStorage.setItem("theme", JSON.stringify("dark"));
  const { result } = renderHook(() => useLocalStorage("theme", "light"));
  expect(result.current[0]).toBe("dark");
});

test("handles storing an object value", () => {
  const { result } = renderHook(() =>
    useLocalStorage("user", { name: "Ermi", role: "admin" })
  );
  act(() => {
    result.current[1]({ name: "Ermi", role: "admin" });
  });
  expect(result.current[0]).toEqual({ name: "Ermi", role: "admin" });
});

test("handles storing a number value", () => {
  const { result } = renderHook(() => useLocalStorage("count", 0));
  act(() => {
    result.current[1](42);
  });
  expect(result.current[0]).toBe(42);
});
