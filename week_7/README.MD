# Simple Text Editor with Undo Stack
**Week 7 — Stack Data Structure Assignment**

---

## Overview
A simple text editor that supports adding characters, deleting the last character, and undoing the last operation — all powered by a **stack** (LIFO: Last In, First Out).

---

## Clarifying Questions
*(Asked before coding, as in a real interview)*

1. **What counts as one "undo"?** — One undo reverses exactly one operation (one add or one delete).
2. **Can we undo indefinitely?** — Yes, as long as the undo stack is not empty.
3. **What happens if we undo on an empty stack?** — Print a message; do not crash.
4. **What happens if we delete from empty text?** — Print a message; do not crash.
5. **Do we need a redo feature?** — Not required for this assignment.
6. **Single characters only, or whole words?** — Single characters per operation.

---

## Flowchart / Diagram

```
┌─────────────────────────────────────────────────────────┐
│                     TEXT EDITOR                         │
│                                                         │
│   text = ""          undoStack = []                     │
└─────────────────────────────────────────────────────────┘

addText('H')
  ├── text = "H"
  └── undoStack = [ {add, 'H'} ]   ← PUSH

addText('i')
  ├── text = "Hi"
  └── undoStack = [ {add,'H'}, {add,'i'} ]   ← PUSH

deleteText()
  ├── removedChar = 'i'
  ├── text = "H"
  └── undoStack = [ {add,'H'}, {add,'i'}, {delete,'i'} ]   ← PUSH

undo()
  ├── pop → {delete, 'i'}        ← POP (LIFO)
  ├── reverse a delete → re-add 'i'
  ├── text = "Hi"
  └── undoStack = [ {add,'H'}, {add,'i'} ]

undo()
  ├── pop → {add, 'i'}           ← POP (LIFO)
  ├── reverse an add → remove last char
  ├── text = "H"
  └── undoStack = [ {add,'H'} ]

undo() on empty stack
  └── "Nothing to undo" message (no crash)

deleteText() on empty text
  └── "Nothing to delete" message (no crash)
```

---

## Data Structures Used

### `TextOperation`
```js
class TextOperation {
  constructor(type, character)
  // type: 'add' | 'delete'
  // character: the char involved
}
```

### `TextEditor`
```js
class TextEditor {
  text = ""           // current string
  undoStack = []      // stack of TextOperation objects

  addText(char)       // push char, push op to stack
  deleteText()        // remove last char, push op to stack
  undo()              // pop stack, reverse the operation
  display()           // print current text
  peek()              // view top of stack (no remove)
  isStackEmpty()      // check if stack is empty
}
```

---

## Time & Space Complexity

| Operation     | Time  | Space | Why |
|---------------|-------|-------|-----|
| `addText`     | O(1)  | O(1)  | Append to string + push to stack |
| `deleteText`  | O(1)  | O(1)  | Slice last char + push to stack |
| `undo`        | O(1)  | O(1)  | Pop from stack + reverse op |
| `peek`        | O(1)  | O(1)  | Access last element of array |
| `isStackEmpty`| O(1)  | O(1)  | Check array length |

**Overall Space Complexity: O(n)** where n = total number of operations performed (each operation pushes one item onto the undoStack).

---

## How to Run

```bash
# Install Node.js (v18+ recommended)

# Run the demo
node textEditor.js

# Run all tests
node --test textEditor.test.js
```

---

## Test Cases

### Normal Cases (6)
1. `addText` appends characters correctly
2. `deleteText` removes the last character
3. `undo` reverses an `addText`
4. `undo` reverses a `deleteText`
5. Multiple consecutive undos work correctly
6. Undo stack tracks operations in LIFO order

### Edge Cases (8)
7. `deleteText` on empty text does not crash
8. `undo` on empty stack does not crash
9. `undo` after failed delete does not crash
10. Single character: add then undo returns to empty
11. Alternating add/delete/undo sequence is correct
12. `isStackEmpty` returns `true` on new editor
13. `isStackEmpty` returns `false` after an operation
14. `TextOperation` stores type and character correctly

**Result: 14/14 tests pass ✅**

---

## Optimization Notes
The current solution is already optimal for this use case — all core operations are O(1). A potential trade-off exists with **space**: each operation adds one item to the undoStack, so a very long session could grow the stack unboundedly. An optimization would be to cap the stack at a maximum size (e.g., last 100 operations), trading unlimited undo history for bounded memory use.

[Video Link](https://youtu.be/9gar90o3K70)