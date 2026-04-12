const { test } = require("node:test");
const assert = require("node:assert");
const { sortedSquaredGrowth } = require("./techInterview");

// ─────────────────────────────────────────────
// NORMAL TEST CASES
// ─────────────────────────────────────────────

test("Normal Case 1: Mix of negatives, zero, and positives", () => {
  const input = [-5, -2, 0, 3, 10];
  const expected = [0, 4, 9, 25, 100];
  assert.deepStrictEqual(sortedSquaredGrowth(input), expected);
});

test("Normal Case 2: Mix of negatives and positives, no zero", () => {
  const input = [-8, -3, 2, 4, 12];
  const expected = [4, 9, 16, 64, 144];
  assert.deepStrictEqual(sortedSquaredGrowth(input), expected);
});

test("Normal Case 3: All positive numbers", () => {
  const input = [1, 3, 5, 7, 9];
  const expected = [1, 9, 25, 49, 81];
  assert.deepStrictEqual(sortedSquaredGrowth(input), expected);
});

// ─────────────────────────────────────────────
// EDGE TEST CASES
// ─────────────────────────────────────────────

test("Edge Case 1: Empty array", () => {
  const input = [];
  const expected = [];
  assert.deepStrictEqual(sortedSquaredGrowth(input), expected);
});

test("Edge Case 2: Single element (negative)", () => {
  const input = [-7];
  const expected = [49];
  assert.deepStrictEqual(sortedSquaredGrowth(input), expected);
});

test("Edge Case 3: All negative numbers", () => {
  const input = [-10, -6, -3, -1];
  const expected = [1, 9, 36, 100];
  assert.deepStrictEqual(sortedSquaredGrowth(input), expected);
});

test("Edge Case 4: Array with all zeros", () => {
  const input = [0, 0, 0];
  const expected = [0, 0, 0];
  assert.deepStrictEqual(sortedSquaredGrowth(input), expected);
});

test("Edge Case 5: Large values", () => {
  const input = [-100, -50, 50, 100];
  const expected = [2500, 2500, 10000, 10000];
  assert.deepStrictEqual(sortedSquaredGrowth(input), expected);
});