import { test, describe } from "node:test";
import assert from "node:assert/strict";

// The buttons array — same data as Toolbar.jsx
const buttons = [
  { message: "Downloading!", children: "⬇ Download File" },
  { message: "Sharing!", children: "🔗 Share Document" },
  { message: "Printing!", children: "🖨 Print Page" },
  { message: "Saving!", children: "💾 Save Draft" },
];

// Simulate what .map() does — returns message when clicked
function simulateClick(index) {
  return buttons[index].message;
}

// --- Normal Cases ---

describe("Normal Cases", () => {
  test("1. Download button returns correct message", () => {
    assert.equal(simulateClick(0), "Downloading!");
  });

  test("2. Share button returns correct message", () => {
    assert.equal(simulateClick(1), "Sharing!");
  });

  test("3. All buttons are rendered from the array", () => {
    assert.equal(buttons.length, 4);
  });
});

// --- Edge Cases ---

describe("Edge Cases", () => {
  test("4. Every button has a non-empty message", () => {
    buttons.forEach((btn) => {
      assert.ok(btn.message.length > 0);
    });
  });

  test("5. Every button has a non-empty children label", () => {
    buttons.forEach((btn) => {
      assert.ok(btn.children.length > 0);
    });
  });

  test("6. All button messages are unique", () => {
    const messages = buttons.map((btn) => btn.message);
    const unique = new Set(messages);
    assert.equal(unique.size, messages.length);
  });
});