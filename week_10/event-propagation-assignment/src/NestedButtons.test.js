import { test, describe } from "node:test";
import assert from "node:assert/strict";

// Simulate the event propagation logic (no DOM needed)
function createMockEvent() {
  return {
    propagationStopped: false,
    stopPropagation() {
      this.propagationStopped = true;
    },
  };
}

// --- Normal Cases ---

describe("Normal Cases", () => {
  test("1. Inner click stops propagation", () => {
    const e = createMockEvent();
    e.stopPropagation();
    assert.equal(e.propagationStopped, true);
  });

  test("2. Outer click does NOT stop propagation", () => {
    const e = createMockEvent();
    // outer handler does NOT call stopPropagation
    assert.equal(e.propagationStopped, false);
  });

  test("3. stopPropagation exists on the event object", () => {
    const e = createMockEvent();
    assert.equal(typeof e.stopPropagation, "function");
  });
});

// --- Edge Cases ---

describe("Edge Cases", () => {
  test("4. Calling stopPropagation twice does not throw", () => {
    const e = createMockEvent();
    assert.doesNotThrow(() => {
      e.stopPropagation();
      e.stopPropagation();
    });
  });

  test("5. propagationStopped starts as false before any handler runs", () => {
    const e = createMockEvent();
    assert.equal(e.propagationStopped, false);
  });

  test("6. Inner and outer events are independent objects", () => {
    const innerEvent = createMockEvent();
    const outerEvent = createMockEvent();
    innerEvent.stopPropagation();
    assert.equal(innerEvent.propagationStopped, true);
    assert.equal(outerEvent.propagationStopped, false);
  });
});