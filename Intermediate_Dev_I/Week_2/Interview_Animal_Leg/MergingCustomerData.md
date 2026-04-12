# Merging Customer Data for Market Analysis 📊

## Problem Statement

Merge two sorted customer data arrays into one sorted array. The result should be stored in the first array.

**Input:** 
- `customerData1` - First sorted array (has extra space at end filled with 0s)
- `m` - Number of actual customer IDs in customerData1
- `customerData2` - Second sorted array
- `n` - Number of customer IDs in customerData2

**Output:** 
- The merged sorted array stored in `customerData1`

**Language:** JavaScript

---

## Real-World Context

Imagine you're working at a company that has:
- **Database 1:** Customer IDs `[101, 104, 107]`
- **Database 2:** Customer IDs `[102, 105, 108]`

You need to combine them into one sorted list for analysis:
- **Result:** `[101, 102, 104, 105, 107, 108]`

---

## Solution Overview

This solution uses **concepts you already know**:
- Arrays (basic data structure)
- `while` loops (basic loops)
- `.push()` method (add to array)
- Array indexing `arr[i]`
- Comparisons `<=`, `<`


---

## The Solution (Step by Step)

```javascript
function mergeCustomerData(customerData1, m, customerData2, n) {
    // Step 1: Create temporary array to store merged result
    const merged = [];
    
    // Step 2: Set up two pointers
    let i = 0;  // Points to customerData1
    let j = 0;  // Points to customerData2
    
    // Step 3: Compare elements and add smaller one
    while (i < m && j < n) {
        if (customerData1[i] <= customerData2[j]) {
            merged.push(customerData1[i]);
            i++;
        } else {
            merged.push(customerData2[j]);
            j++;
        }
    }
    
    // Step 4: Add remaining from customerData1
    while (i < m) {
        merged.push(customerData1[i]);
        i++;
    }
    
    // Step 5: Add remaining from customerData2
    while (j < n) {
        merged.push(customerData2[j]);
        j++;
    }
    
    // Step 6: Copy back to customerData1
    for (let k = 0; k < merged.length; k++) {
        customerData1[k] = merged[k];
    }
}
```

---

## How It Works (Example)

### Input:
```javascript
customerData1 = [101, 104, 107, 0, 0, 0]  // m = 3
customerData2 = [102, 105, 108]           // n = 3
```

### Step-by-Step Process:

```
Start:
  customerData1: [101, 104, 107, 0, 0, 0]
  customerData2: [102, 105, 108]
  merged: []
  i = 0, j = 0

Compare 101 vs 102:
  101 is smaller → add 101 to merged
  merged: [101]
  i = 1, j = 0

Compare 104 vs 102:
  102 is smaller → add 102 to merged
  merged: [101, 102]
  i = 1, j = 1

Compare 104 vs 105:
  104 is smaller → add 104 to merged
  merged: [101, 102, 104]
  i = 2, j = 1

Compare 107 vs 105:
  105 is smaller → add 105 to merged
  merged: [101, 102, 104, 105]
  i = 2, j = 2

Compare 107 vs 108:
  107 is smaller → add 107 to merged
  merged: [101, 102, 104, 105, 107]
  i = 3, j = 2

No more in customerData1, add remaining from customerData2:
  merged: [101, 102, 104, 105, 107, 108]

Copy back to customerData1:
  customerData1: [101, 102, 104, 105, 107, 108]
```

---

## Examples

### Example 1: Both arrays have elements
```javascript
Input: 
  customerData1 = [101, 104, 107, 0, 0, 0], m = 3
  customerData2 = [102, 105, 108], n = 3
Output: 
  [101, 102, 104, 105, 107, 108]
```

### Example 2: Second array is empty
```javascript
Input: 
  customerData1 = [103, 0, 0], m = 1
  customerData2 = [], n = 0
Output: 
  [103, 0, 0]  (only first m=1 element matters)
```

### Example 3: First array is empty
```javascript
Input: 
  customerData1 = [0, 0, 0], m = 0
  customerData2 = [201, 202, 203], n = 3
Output: 
  [201, 202, 203]
```

---


## Complexity Analysis

### Time Complexity: O(m + n)

**What does this mean?**
- We look at each element from both arrays exactly once
- If customerData1 has `m` elements and customerData2 has `n` elements
- Total operations: `m + n`
- This is **linear time** - very efficient!

**Example:**
- Array 1: 3 elements
- Array 2: 3 elements
- Total: 3 + 3 = 6 operations

### Space Complexity: O(m + n)

**What does this mean?**
- We create a `merged` array to hold all elements
- Size of merged array: `m + n`
- This uses extra memory proportional to input size

**Example:**
- Array 1: 3 elements
- Array 2: 3 elements
- Merged array: 6 elements

### Can We Do Better?

**Time: No** - We must look at every element at least once  
**Space: Yes!** - We could merge "backwards" without extra array

---

## Test Cases Covered

### Normal Cases (4 tests)
1. ✅ Example 1 from problem (both arrays have elements)
2. ✅ Different sized arrays
3. ✅ Multiple elements to merge
4. ✅ Larger dataset

### Edge Cases (8 tests)
1. ✅ Second array is empty
2. ✅ First array is empty (m=0)
3. ✅ All data1 elements smaller than data2
4. ✅ All data2 elements smaller than data1
5. ✅ Single element in each array
6. ✅ Arrays with duplicate values
7. ✅ Very small arrays
8. ✅ Data2 has only one element

**Total: 12 comprehensive test cases** 

## Flow chart
![alt text](<Screenshot 2026-01-22 at 10.45.15 PM.png>)
---

## Video Link

[Watch the solution explanation](https://www.canva.com/design/DAG_NxPbe0I/xuMDHlXX4agppMYpbxPcXw/edit?utm_content=DAG_NxPbe0I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
