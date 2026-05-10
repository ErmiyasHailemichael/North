# Patient Health Record Symmetry Analysis

## Problem Statement

In healthcare, patient records often contain time-series data such as daily blood sugar levels or heart rate readings. This project analyzes a patient's health record — represented as a singly linked list — and determines whether the sequence of health metrics exhibits a **symmetrical (palindrome) pattern**.

A symmetrical pattern could indicate a return to baseline health status or the cyclic recurrence of a condition.

---

## Data Structure

Each node in the linked list represents one day's health metric reading:

```javascript
class Node {
  constructor(value) {
    this.value = value; // health metric (e.g. blood sugar, heart rate)
    this.next = null;   // pointer to the next day's reading
  }
}
```

Example — symmetric record:
```
[80] -> [90] -> [100] -> [90] -> [80] -> null
```

Example — non-symmetric record:
```
[80] -> [90] -> [100] -> [70] -> null
```

---

## Algorithm

### Function: `isHealthRecordSymmetric(head)`

Returns `true` if the sequence is a palindrome, `false` otherwise.

### Approach: Reverse Second Half (O(1) space)

1. **Edge case check** — empty list or single node is always symmetric
2. **Find the middle** — using fast/slow pointers
3. **Reverse the second half** — in-place pointer reversal
4. **Compare both halves** — walk left and right pointers simultaneously
5. **Restore the list** — re-reverse the second half to preserve original order
6. **Return result**

```javascript
function isHealthRecordSymmetric(head) {
  if (!head || !head.next) return true;

  const middle = findMiddle(head);
  let secondHalfHead = reverseList(middle.next);

  let left = head;
  let right = secondHalfHead;
  let isSymmetric = true;

  while (right) {
    if (left.value !== right.value) {
      isSymmetric = false;
      break;
    }
    left = left.next;
    right = right.next;
  }

  middle.next = reverseList(secondHalfHead);

  return isSymmetric;
}
```

---

## Complexity Analysis

### Time Complexity — O(n)

| Step | Cost |
|------|------|
| Find middle | O(n) |
| Reverse second half | O(n) |
| Compare both halves | O(n) |
| Restore list | O(n) |
| **Total** | **O(n)** |

### Space Complexity — O(1)

Only a fixed number of pointer variables are used regardless of input size. No auxiliary data structures are created.

### Trade-off vs. Simple Array Approach

| | Array approach | This solution |
|--|--|--|
| Time | O(n) | O(n) |
| Space | O(n) | **O(1)** |

The array approach copies all values into memory — simpler to read but costly for large datasets. This solution modifies the list temporarily (restoring it afterward) to achieve constant space, making it more suitable for large-scale healthcare data.

---

## Clarifying Questions

Before coding, these questions were considered:

1. Can the list be empty (head is null)?
2. Can values be negative or only positive?
3. Are values integers, floats, or either?
4. Does "symmetric" strictly mean a palindrome?
5. Is an even-length list like [80, 90, 90, 80] also considered symmetric?
6. Is there a maximum list length?
7. Can we assume no cycles in the list?
8. Are we allowed extra data structures, or must we use O(1) space?
9. Should the function return a boolean?
10. Should the original list remain unmodified after the function runs?

---

## Test Cases

Tests are written using **Jest**. To run:

```bash
npm install
npm test
```

### Normal Cases

| Input | Expected | Reason |
|-------|----------|--------|
| `[80, 90, 90, 80]` | `true` | Even-length palindrome |
| `[70, 80, 100, 80, 70]` | `true` | Odd-length palindrome |
| `[80, 90, 100, 70]` | `false` | Not a palindrome |
| `[60, 70, 80, 90, 90, 80, 70, 60]` | `true` | Longer even palindrome |
| `[60, 70, 80, 90, 85, 80, 70, 60]` | `false` | One value off in the middle |

### Edge Cases

| Input | Expected | Reason |
|-------|----------|--------|
| `null` | `true` | Empty list |
| `[100]` | `true` | Single node |
| `[75, 75]` | `true` | Two identical nodes |
| `[75, 80]` | `false` | Two different nodes |
| `[98, 98, 98, 98, 98]` | `true` | All same values |
| `[70, 80, 90, 80, 70]` | list unchanged | Original list restored after check |

---

## Project Structure

```
path_health_Record/
├── PatientHealthRecord.js         # Solution and Node definition
├── isHealthRecordSymmetric.test.js # Jest test suite
├── package.json                   # Project config and test script
└── README.md                      # This file
```

---

## Setup

```bash
npm install
npm test
```

Requires Node.js and npm.

## Diagram
- [Flow chart](https://excalidraw.com/#json=x-TigWkTYI3VVJhGDUHk8,yClfpOGfK-o6jfvBUsCqUw)
- [Video](https://youtu.be/GEh3zx6nhbU)