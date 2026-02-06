# Inventory Management System
## Duplicate Zeros - In-Place Array Manipulation


> A technical interview solution demonstrating efficient in-place array manipulation with optimal O(n) time complexity and O(1) space complexity.

---

## 📋 Table of Contents

- [Problem Statement](#-problem-statement)
- [Solution Overview](#-solution-overview)
- [Algorithm Walkthrough](#-algorithm-walkthrough)
- [Installation & Setup](#-installation--setup)
- [Running Tests](#-running-tests)
- [Complexity Analysis](#-complexity-analysis)
- [Project Structure](#-project-structure)
- [Implementation Details](#-implementation-details)
- [Documentation](#-documentation)
- [Author](#-author)

---

## 🎯 Problem Statement

You are interviewing with a retail company that needs to enhance its inventory management system. The system tracks product stock counts in an array, where **zero represents an out-of-stock product**.

### Requirements

When a product is out of stock (value = 0), the system must:
1. **Duplicate the zero** (representing a restock order)
2. **Shift subsequent elements right**
3. **Modify the array in-place** (no additional arrays)
4. **Preserve the original array length** (elements beyond bounds are discarded)

### Examples

**Example 1: Multiple Zeros**
```javascript
Input:  [4, 0, 1, 3, 0, 2, 5, 0]
Output: [4, 0, 0, 1, 3, 0, 0, 2]
```

**Example 2: No Zeros**
```javascript
Input:  [3, 2, 1]
Output: [3, 2, 1]
```

**Example 3: Consecutive Zeros**
```javascript
Input:  [1, 0, 0, 2]
Output: [1, 0, 0, 0]
```

---

## 💡 Solution Overview

This solution implements a **two-pass backward iteration algorithm** that achieves optimal performance:

- ⏱️ **Time Complexity:** O(n)
- 💾 **Space Complexity:** O(1)
- ✅ **In-place Modification:** Yes
- 🎯 **Interview Optimal:** Yes

### Why Backward Iteration?

Working **backwards** is crucial because:
- Prevents overwriting unprocessed elements
- Allows safe in-place modification
- Avoids need for auxiliary storage

---

## 🔄 Algorithm Walkthrough

### Visual Example: `[4, 0, 1, 3, 0, 2, 5, 0]`

```
┌─────────────────────────────────────────────────────────────┐
│ STEP 1: Count Zeros                                         │
└─────────────────────────────────────────────────────────────┘
Array: [4, 0, 1, 3, 0, 2, 5, 0]
        0  ↑  0  0  ↑  0  0  ↑
Zeros found: 3

┌─────────────────────────────────────────────────────────────┐
│ STEP 2: Calculate Write Position                            │
└─────────────────────────────────────────────────────────────┘
Original length (n): 8
Zero count: 3
Write position: 8 + 3 - 1 = 10 (conceptual position)

┌─────────────────────────────────────────────────────────────┐
│ STEP 3: Process Backward (Right to Left)                    │
└─────────────────────────────────────────────────────────────┘
i=7 (val=0): write[10]=0, write[9]=0  → Out of bounds ✗
i=6 (val=5): write[8]=5               → Out of bounds ✗
i=5 (val=2): write[7]=2               → ✓ Written
i=4 (val=0): write[6]=0, write[5]=0   → ✓ Both written
i=3 (val=3): write[4]=3               → ✓ Written
i=2 (val=1): write[3]=1               → ✓ Written
i=1 (val=0): write[2]=0, write[1]=0   → ✓ Both written
i=0 (val=4): write[0]=4               → ✓ Written

┌─────────────────────────────────────────────────────────────┐
│ RESULT                                                       │
└─────────────────────────────────────────────────────────────┘
Output: [4, 0, 0, 1, 3, 0, 0, 2] ✓
```

### Algorithm Flow

```
START
  │
  ├─ Is array empty? ── YES → RETURN
  │
  ├─ Phase 1: Count total zeros
  │    └─ Iterate 0 to n-1, increment counter
  │
  ├─ Phase 2: Initialize pointers
  │    ├─ readIndex = n - 1
  │    └─ writeIndex = n + zeros - 1
  │
  ├─ Phase 3: Process backward
  │    WHILE readIndex >= 0:
  │      ├─ IF writeIndex < n:
  │      │    └─ Copy: arr[writeIndex] = arr[readIndex]
  │      │
  │      ├─ IF arr[readIndex] == 0:
  │      │    ├─ writeIndex--
  │      │    └─ IF writeIndex < n:
  │      │         └─ Duplicate: arr[writeIndex] = 0
  │      │
  │      ├─ readIndex--
  │      └─ writeIndex--
  │
  └─ END (array modified in-place)
```

---

### Quick Start

```bash
# 1. Clone the repository
git clone <your-repository-url>
cd inventory-management

# 2. Verify Node.js version
node --version
# Should output: v18.x.x or higher

# 3. No dependencies required!
# This project uses Node.js built-in features only
```

---

## 🧪 Running Tests

### Execute Test Suite

```bash
node inventory-management.test.js
```

### Expected Output

```
✓ All test cases passed!

TAP version 13
✓ Normal Case 1: Multiple zeros with mixed numbers
✓ Normal Case 2: Single zero in middle of array
✓ Normal Case 3: Zero at the beginning
✓ Edge Case 1: Array with no zeros
✓ Edge Case 2: Array with all zeros
✓ Edge Case 3: Single element array with zero
✓ Edge Case 4: Single element array without zero
✓ Edge Case 5: Two element array with zero at end
✓ Edge Case 6: Zero at last position (boundary case)
✓ Edge Case 7: Empty array
✓ Edge Case 8: Consecutive zeros
✓ Edge Case 9: Large numbers in inventory

tests 12 | pass 12 | fail 0
```

### Test Coverage

| Category | Test Cases | Description |
|----------|------------|-------------|
| **Normal Cases** | 3 | Multiple zeros, single zero, zero at start |
| **Edge Cases** | 9 | Empty array, no zeros, all zeros, boundary conditions |
| **Total** | **12** | Comprehensive coverage of all scenarios |

---

## 📊 Complexity Analysis

### Time Complexity: **O(n)**

```javascript
// Pass 1: Count zeros
for (let i = 0; i < n; i++) {        // O(n)
  if (inventory[i] === 0) zeros++;
}

// Pass 2: Place elements
while (i >= 0) {                     // O(n)
  // ... placement logic
}

// Total: O(n) + O(n) = O(n)
```

**Each element is visited exactly twice**, making this the optimal solution.

### Space Complexity: **O(1)**

```javascript
let zeros = 0;        // Variable 1
let i = n - 1;        // Variable 2
let write = n + z - 1; // Variable 3
const n = len;        // Variable 4
```

**Only 4 variables used**, regardless of array size. No auxiliary data structures.

### Comparison with Alternative Approaches

| Approach | Time | Space | In-Place | Verdict |
|----------|------|-------|----------|---------|
| **Extra Array** | O(n) | O(n) | ❌ | Violates constraint |
| **Forward Shift** | O(n²) | O(1) | ✅ | Too slow |
| **Our Solution** | O(n) | O(1) | ✅ | ✅ **Optimal** |

---

## 📂 Project Structure

```
inventory-management/
├── 📄 inventory-management.js          # Core solution implementation
├── 🧪 inventory-management.test.js     # Comprehensive test suite
├── 📖 README.md                         # This file
├── ❓ CLARIFYING_QUESTIONS.md          # Interview preparation questions
├── 📊 COMPLEXITY_ANALYSIS.md           # Detailed complexity analysis
├── 📈 FLOWCHART.md                     # Visual diagrams and flowcharts
├── 🎥 VIDEO_SCRIPT.md                  # Video presentation script
└── 🚫 .gitignore                       # Git ignore rules
```

---

## 🔍 Implementation Details

### Core Function

```javascript
function duplicateZeros(inventory) {
  const n = inventory.length;
  
  // Phase 1: Count zeros
  let zeros = 0;
  for (let i = 0; i < n; i++) {
    if (inventory[i] === 0) zeros++;
  }
  
  // Phase 2: Process backward
  let i = n - 1;                    // Read pointer
  let write = n + zeros - 1;        // Write pointer
  
  while (i >= 0) {
    // Write element if within bounds
    if (write < n) {
      inventory[write] = inventory[i];
    }
    
    // Duplicate zero if applicable
    if (inventory[i] === 0) {
      write--;
      if (write < n) {
        inventory[write] = 0;
      }
    }
    
    i--;
    write--;
  }
}
```

### Key Implementation Techniques

**1. Bounds Checking**
```javascript
if (write < n) {
  inventory[write] = inventory[i];
}
```
Prevents writing beyond original array length.

**2. Zero Duplication Logic**
```javascript
if (inventory[i] === 0) {
  write--;
  if (write < n) {
    inventory[write] = 0;
  }
}
```
Writes zero twice when encountered.

**3. Pointer Movement**
```javascript
i--;        // Always move read pointer
write--;    // Always move write pointer
```
Ensures systematic backward traversal.

---

### Interview Preparation Checklist

- [ ] Review problem statement thoroughly
- [ ] Ask clarifying questions (see CLARIFYING_QUESTIONS.md)
- [ ] Explain approach before coding
- [ ] Write clean, commented code
- [ ] Test with provided examples
- [ ] Discuss edge cases
- [ ] Analyze time and space complexity
- [ ] Explain trade-offs and alternatives

---

## 🎯 Learning Outcomes

By completing this project, you demonstrate:

- ✅ **Array Manipulation:** In-place modification techniques
- ✅ **Algorithm Design:** Two-pointer approach
- ✅ **Optimization:** Achieving O(n) time with O(1) space
- ✅ **Edge Case Handling:** Comprehensive boundary testing
- ✅ **Code Quality:** Clean, maintainable implementation
- ✅ **Communication:** Technical documentation skills



---
