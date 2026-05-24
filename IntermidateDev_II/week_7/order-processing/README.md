# E-Commerce Order Processing System

A singly linked list implementation in JavaScript that stores and reverses customer orders. Built to simulate a fulfillment strategy where the most recent orders are processed first.

## Problem Statement

Orders arrive and are stored in a singly linked list with the oldest order at the head. When the fulfillment strategy changes to process newest orders first, the list must be reversed so the most recently added order moves to the front.

## Clarifying Questions

- Are order IDs guaranteed to be unique? Assumed yes.
- Can the list be empty? Yes — handled as an edge case.
- Can the list have just one order? Yes — handled as an edge case.
- Reverse in place or return a new list? In place — more memory efficient.

## Approach

Walk through the list once and flip every pointer to point backwards instead of forwards. Three pointer variables are used — `prev`, `current`, and `next` — to reverse the links without losing track of the remaining list.

**Steps:**
1. Start with `prev = null` and `current = head`
2. Save `next = current.next` before overwriting it
3. Flip the arrow: `current.next = prev`
4. Advance: `prev = current`, `current = next`
5. Repeat until `current` is null
6. Set `head = prev` — this is the new head

## Time and Space Complexity

| Operation | Time | Space |
|-----------|------|-------|
| append    | O(n) | O(1)  |
| display   | O(n) | O(1)  |
| reverse   | O(n) | O(1)  |

The reverse operation is optimal — you cannot reverse a linked list faster than O(n) because every node must be visited at least once. No extra data structures are used so space stays O(1).

## Project Structure