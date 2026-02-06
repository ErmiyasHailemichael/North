# Inventory Management 
---

## Algorithm Walkthrough

### Visual Example: [4, 0, 1, 3, 0, 2, 5, 0]

```
STEP 1: Count Zeros
Array: [4, 0, 1, 3, 0, 2, 5, 0]
Zeros: 0  ↑  0  0  ↑  0  0  ↑
Count: 3 zeros found

STEP 2: Calculate Positions
Original length (n): 8
Zero count: 3
Write position starts at: 8 + 3 - 1 = 10 (outside array)

STEP 3: Process Backward
Position 7 (value=0): writeIdx=10→9 (out of bounds, skip)
Position 6 (value=5): writeIdx=8 (out of bounds, skip)
Position 5 (value=2): writeIdx=7 ✓ write 2 → array[7]=2
Position 4 (value=0): writeIdx=6 ✓ write 0, then writeIdx=5 ✓ write 0
Position 3 (value=3): writeIdx=4 ✓ write 3
Position 2 (value=1): writeIdx=3 ✓ write 1
Position 1 (value=0): writeIdx=2 ✓ write 0, then writeIdx=1 ✓ write 0
Position 0 (value=4): writeIdx=0 ✓ write 4

RESULT: [4, 0, 0, 1, 3, 0, 0, 2] ✓
```

---
## 🔍 Key Implementation Details

## 🔁 Flowchart (Algorithm Steps)

```
START
  │
  ├─ Is array null or empty? ── YES → RETURN
  │
  ├─ Count zeros (zeroCount)
  │
  ├─ Set readIndex = n - 1
  │  Set writeIndex = n + zeroCount - 1
  │
  ├─ WHILE readIndex >= 0:
  │     ├─ If writeIndex < n: write inventory[writeIndex] = inventory[readIndex]
  │     ├─ If inventory[readIndex] == 0:
  │     │    ├─ writeIndex--
  │     │    └─ If writeIndex < n: write inventory[writeIndex] = 0
  │     ├─ readIndex--
  │     └─ writeIndex--
  │
  └─ END

Notes:
- Work backward to avoid overwriting unprocessed elements.
- Only write when `writeIndex < n` to keep within original bounds.
```
![alt text](flowchart.svg)
---

## 🔍 Key Implementation Details

### Bounds Checking
```javascript
if (writeIndex < n) {
  inventory[writeIndex] = inventory[readIndex];
}
// Prevents writing beyond original array
```

### Zero Duplication
```javascript
if (inventory[readIndex] === 0) {
  writeIndex--;  // Move position for duplicate
  if (writeIndex < n) {
    inventory[writeIndex] = 0;  // Write duplicate
  }
}
```

### Loop Termination
```javascript
while (readIndex >= 0 && writeIndex >= 0) {
  // Both conditions prevent infinite loops
  // Stops when we've processed all elements or hit bounds
}
```

---
