# Tech Interview Prep: Analyzing Financial Growth Trends

## Problem Summary
Given a sorted array of yearly growth percentages (including negatives), return an array of the squared values sorted in non-decreasing order.

---

## Clarifying Questions

1. **Can the array be empty?** → Yes, must return empty array
2. **Can all values be negative?** → Yes
3. **Can values repeat?** → Yes (e.g., [-3, -3, 3])
4. **Is the input always sorted in non-decreasing order?** → Yes, guaranteed
5. **What is the expected data type?** → Array of integers, return array of integers
6. **Are there constraints on array size or value range?** → Assume reasonable size for now

---

## Approach: Two-Pointer Technique

### Why Two Pointers?
Since the input is already sorted, the largest squared values will always be at one of the two ends:
- The **leftmost** element (most negative → largest square when squared)
- The **rightmost** element (most positive → largest square when squared)

We compare both ends, place the larger square at the back of our result, and move inward.

---

## Flowchart

```
START
  │
  ▼
Set left = 0, right = n-1, position = n-1
  │
  ▼
┌─────────────────────────┐
│   Is left <= right?     │──── NO ──→ RETURN result
└─────────────────────────┘
  │ YES
  ▼
Square left value → leftSquare
Square right value → rightSquare
  │
  ▼
┌──────────────────────────────┐
│  Is leftSquare > rightSquare? │
└──────────────────────────────┘
  │ YES                   │ NO
  ▼                       ▼
result[position]      result[position]
= leftSquare          = rightSquare
left++                right--
  │                       │
  └──────────┬────────────┘
             ▼
         position--
             │
             └──→ (back to top of loop)
```

---

## Time & Space Complexity

| | Complexity | Reason |
|---|---|---|
| **Time** | O(n) | We visit each element exactly once |
| **Space** | O(n) | We create one new result array of size n |

### Comparison with Brute Force
A simpler approach would be: square all elements, then call `.sort()`.
That works but costs **O(n log n)** time because of the sort step.
The two-pointer approach is better at **O(n)** because we exploit the fact that the input is already sorted.

---

## How to Run

### Install Node.js
```bash
node -v 
```

### Run the solution manually
```bash
node techInterview.js
```

### Run the tests
```bash
node --test solution.test.js
```

---

## Example Walkthrough

**Input:** `[-5, -2, 0, 3, 10]`

| Step | left | right | leftSquare | rightSquare | Winner | result |
|------|------|-------|------------|-------------|--------|--------|
| 1 | 0(-5) | 4(10) | 25 | 100 | right(100) | [_, _, _, _, 100] |
| 2 | 0(-5) | 3(3) | 25 | 9 | left(25) | [_, _, _, 25, 100] |
| 3 | 1(-2) | 3(3) | 4 | 9 | right(9) | [_, _, 9, 25, 100] |
| 4 | 1(-2) | 2(0) | 4 | 0 | left(4) | [_, 4, 9, 25, 100] |
| 5 | 2(0) | 2(0) | 0 | 0 | right(0) | [0, 4, 9, 25, 100] |

**Output:** `[0, 4, 9, 25, 100]` 


## Video link
[demo](https://youtu.be/3hU0qTBD5OU)