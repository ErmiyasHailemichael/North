const { LinkedList, mergeSortedLists } = require("./patientLinkedList");

// ─────────────────────────────────────────
//  Helper: build a LinkedList from an array
//  of objects → { ssn, age, name }
// ─────────────────────────────────────────
function buildList(records) {
  const ll = new LinkedList();
  records.forEach(({ ssn, age, name }) => ll.append(ssn, age, name));
  return ll;
}

// ─────────────────────────────────────────
describe("mergeSortedLists", () => {

  // ══════════════════════════════════════
  //  NORMAL CASES
  // ══════════════════════════════════════

  test("same length lists — no duplicate SSNs", () => {
    const l1 = buildList([
      { ssn: 101, age: 30, name: "Alice" },
      { ssn: 203, age: 45, name: "Bob"   },
      { ssn: 340, age: 52, name: "Carol" },
    ]);
    const l2 = buildList([
      { ssn: 115, age: 28, name: "David" },
      { ssn: 250, age: 61, name: "Eve"   },
      { ssn: 410, age: 35, name: "Frank" },
    ]);

    const merged = mergeSortedLists(l1, l2);
    const ssns   = merged.toArray().map((n) => n.ssn);

    expect(ssns).toEqual([101, 115, 203, 250, 340, 410]);
  });

  test("different length lists — list 1 longer", () => {
    const l1 = buildList([
      { ssn: 100, age: 40, name: "Anna" },
      { ssn: 200, age: 55, name: "Ben"  },
      { ssn: 300, age: 33, name: "Cara" },
      { ssn: 400, age: 29, name: "Dan"  },
    ]);
    const l2 = buildList([
      { ssn: 150, age: 47, name: "Ella" },
      { ssn: 350, age: 60, name: "Finn" },
    ]);

    const merged = mergeSortedLists(l1, l2);
    const ssns   = merged.toArray().map((n) => n.ssn);

    expect(ssns).toEqual([100, 150, 200, 300, 350, 400]);
  });

  test("duplicate SSNs — both records kept", () => {
    const l1 = buildList([
      { ssn: 101, age: 30, name: "Alice" },
      { ssn: 203, age: 45, name: "Bob"   },
    ]);
    const l2 = buildList([
      { ssn: 203, age: 38, name: "Eve"   },
      { ssn: 410, age: 35, name: "Frank" },
    ]);

    const merged = mergeSortedLists(l1, l2);
    const ssns   = merged.toArray().map((n) => n.ssn);
    const names  = merged.toArray().map((n) => n.name);

    // SSN 203 must appear twice
    expect(ssns.filter((s) => s === 203).length).toBe(2);
    // Both patients with SSN 203 are present
    expect(names).toContain("Bob");
    expect(names).toContain("Eve");
    // Full order is correct
    expect(ssns).toEqual([101, 203, 203, 410]);
  });

  // ══════════════════════════════════════
  //  EDGE CASES
  // ══════════════════════════════════════

  test("both lists empty — returns empty list", () => {
    const l1 = new LinkedList();
    const l2 = new LinkedList();

    const merged = mergeSortedLists(l1, l2);

    expect(merged.head).toBeNull();
    expect(merged.toArray()).toEqual([]);
  });

  test("one list empty — returns the other unchanged", () => {
    const l1 = new LinkedList(); // empty
    const l2 = buildList([
      { ssn: 115, age: 28, name: "David" },
      { ssn: 203, age: 38, name: "Eve"   },
      { ssn: 410, age: 35, name: "Frank" },
    ]);

    const merged = mergeSortedLists(l1, l2);
    const ssns   = merged.toArray().map((n) => n.ssn);

    expect(ssns).toEqual([115, 203, 410]);
  });

  test("single node each — smallest SSN lands first", () => {
    const l1 = buildList([{ ssn: 300, age: 50, name: "Grace" }]);
    const l2 = buildList([{ ssn: 100, age: 40, name: "Hank"  }]);

    const merged = mergeSortedLists(l1, l2);
    const ssns   = merged.toArray().map((n) => n.ssn);

    expect(ssns).toEqual([100, 300]);
  });

  test("single node with highest SSN lands at the end", () => {
    const l1 = buildList([
      { ssn: 101, age: 30, name: "Alice" },
      { ssn: 203, age: 45, name: "Bob"   },
      { ssn: 340, age: 52, name: "Carol" },
    ]);
    const l2 = buildList([{ ssn: 999, age: 70, name: "Zara" }]);

    const merged = mergeSortedLists(l1, l2);
    const ssns   = merged.toArray().map((n) => n.ssn);

    expect(ssns).toEqual([101, 203, 340, 999]);
  });

  test("merged list is always sorted in ascending order", () => {
    const l1 = buildList([
      { ssn: 120, age: 33, name: "Ian"  },
      { ssn: 305, age: 41, name: "Jane" },
      { ssn: 500, age: 29, name: "Karl" },
    ]);
    const l2 = buildList([
      { ssn: 110, age: 55, name: "Lena" },
      { ssn: 320, age: 48, name: "Mike" },
      { ssn: 490, age: 37, name: "Nina" },
    ]);

    const merged = mergeSortedLists(l1, l2);
    const ssns   = merged.toArray().map((n) => n.ssn);
    const sorted = [...ssns].sort((a, b) => a - b);

    expect(ssns).toEqual(sorted);
  });
});