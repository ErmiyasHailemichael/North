const { buildList, isHealthRecordSymmetric } = require('./PatientHealthRecord');

// ─── Normal Cases ────────────────────────────────────────────────────────────

describe('Normal cases', () => {

  test('even-length symmetric list returns true', () => {
    // [80, 90, 90, 80] — blood sugar readings that mirror each other
    const head = buildList([80, 90, 90, 80]);
    expect(isHealthRecordSymmetric(head)).toBe(true);
  });

  test('odd-length symmetric list returns true', () => {
    // [70, 80, 100, 80, 70] — heart rate readings with a peak in the middle
    const head = buildList([70, 80, 100, 80, 70]);
    expect(isHealthRecordSymmetric(head)).toBe(true);
  });

  test('non-symmetric list returns false', () => {
    // [80, 90, 100, 70] — no palindrome pattern
    const head = buildList([80, 90, 100, 70]);
    expect(isHealthRecordSymmetric(head)).toBe(false);
  });

  test('longer symmetric list returns true', () => {
    // [60, 70, 80, 90, 90, 80, 70, 60]
    const head = buildList([60, 70, 80, 90, 90, 80, 70, 60]);
    expect(isHealthRecordSymmetric(head)).toBe(true);
  });

  test('longer non-symmetric list returns false', () => {
    // [60, 70, 80, 90, 85, 80, 70, 60] — one value off in the middle
    const head = buildList([60, 70, 80, 90, 85, 80, 70, 60]);
    expect(isHealthRecordSymmetric(head)).toBe(false);
  });

});

// ─── Edge Cases ──────────────────────────────────────────────────────────────

describe('Edge cases', () => {

  test('empty list (null head) returns true', () => {
    expect(isHealthRecordSymmetric(null)).toBe(true);
  });

  test('single node list returns true', () => {
    // One reading is always symmetric
    const head = buildList([100]);
    expect(isHealthRecordSymmetric(head)).toBe(true);
  });

  test('two identical nodes returns true', () => {
    const head = buildList([75, 75]);
    expect(isHealthRecordSymmetric(head)).toBe(true);
  });

  test('two different nodes returns false', () => {
    const head = buildList([75, 80]);
    expect(isHealthRecordSymmetric(head)).toBe(false);
  });

  test('all same values returns true', () => {
    // [98, 98, 98, 98, 98] — flat reading, always symmetric
    const head = buildList([98, 98, 98, 98, 98]);
    expect(isHealthRecordSymmetric(head)).toBe(true);
  });

  test('original list is not modified after the check', () => {
    // Verify the list is restored after reversing the second half
    const head = buildList([70, 80, 90, 80, 70]);
    isHealthRecordSymmetric(head);
    // Walk the list and confirm original order is intact
    const values = [];
    let current = head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    expect(values).toEqual([70, 80, 90, 80, 70]);
  });

});
