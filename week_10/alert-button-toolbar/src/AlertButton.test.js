import { test, describe } from "node:test";
import assert from "node:assert/strict";

// Simulate AlertButton logic without a DOM
function createAlertButton(message, children) {
  return {
    message,
    children,
    handleClick() {
      return this.message;
    },
  };
}

// --- Normal Cases ---

describe("Normal Cases", () => {
  test("1. Play button returns correct message on click", () => {
    const btn = createAlertButton("Now playing!", "▶ Play");
    assert.equal(btn.handleClick(), "Now playing!");
  });

  test("2. Upload button returns correct message on click", () => {
    const btn = createAlertButton("Uploading your file...", "⬆ Upload");
    assert.equal(btn.handleClick(), "Uploading your file...");
  });

  test("3. Volume button returns correct message on click", () => {
    const btn = createAlertButton("Volume adjusted!", "🔊 Volume");
    assert.equal(btn.handleClick(), "Volume adjusted!");
  });
});

// --- Edge Cases ---

describe("Edge Cases", () => {
  test("4. Button with empty message returns empty string", () => {
    const btn = createAlertButton("", "Empty");
    assert.equal(btn.handleClick(), "");
  });

  test("5. Button children prop renders correctly", () => {
    const btn = createAlertButton("Hello!", "Click Me");
    assert.equal(btn.children, "Click Me");
  });

  test("6. Two buttons with same children but different messages stay independent", () => {
    const btn1 = createAlertButton("Message A", "Action");
    const btn2 = createAlertButton("Message B", "Action");
    assert.notEqual(btn1.handleClick(), btn2.handleClick());
  });
});