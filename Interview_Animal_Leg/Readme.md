# Animal Leg Count in the Forest

## Problem Statement

Given an array of animals representing different animals in a forest, return the count of animals that have exactly four legs.

**Input:** Array of animal names (strings)  
**Output:** Integer count of four-legged animals  
**Language:** JavaScript (Node.js)

---

## The Solution

```javascript
function countFourLeggedAnimals(animals) {
    // Array of animals that have four legs
    const fourLegged = ['lion', 'deer', 'elephant', 'horse', 'dog', 'cat'];
    
    // Initialize counter
    let count = 0;
    
    // Loop through each animal
    for (const animal of animals) {
        // Check if this animal has four legs
        if (fourLegged.includes(animal.toLowerCase())) {
            count++;
        }
    }
    
    return count;
}
```

### How It Works (Step by Step)

1. **Create reference array**: Store all four-legged animals
2. **Initialize counter**: Start at 0
3. **Loop through input**: Check each animal one by one
4. **Case-insensitive check**: Convert to lowercase, then check if it's in our array
5. **Count matches**: If found, add 1 to counter
6. **Return total**: Return the final count

---

## Complexity Analysis

### Time Complexity: O(n)
**What does this mean?**
- `n` = number of animals in input array
- We look at each animal exactly once
- For each animal, we check if it's in our fourLegged array
  - This check takes O(6) time since array has 6 items
  - But 6 is a constant, so we treat it as O(1)
- Total: O(n × 1) = O(n) - **Linear time**

**Why is this good?**
- We can't do better than O(n) because we must check every animal
- This is the optimal solution!

### Space Complexity: O(1)
**What does this mean?**
- We use a fixed-size array (6 animals) - doesn't grow
- We use one counter variable
- No matter how big the input is, we use the same amount of memory
- O(1) = **Constant space** - very efficient!

---


## Test Cases Covered

### Normal Cases (4 tests)
1. ✅ Example 1 from problem (mixed animals)
2. ✅ Example 2 from problem (mostly non-four-legged)
3. ✅ All six four-legged animals
4. ✅ Various mixed types

### Edge Cases (9 tests)
1. ✅ Empty array → returns 0
2. ✅ No four-legged animals → returns 0
3. ✅ All four-legged animals → correct count
4. ✅ Duplicate animals → each counted separately
5. ✅ Mixed case (LION, Lion, lion) → all counted
6. ✅ Single four-legged animal → returns 1
7. ✅ Single non-four-legged → returns 0
8. ✅ Unknown animals → ignored correctly
9. ✅ Large array (100 items) → handles efficiently

**Total: 13 comprehensive test cases** ✓

---


## Author
Ermiyas H.

## Date
January 22, 2026

---
## Flowchart

```
Start
  ↓
Input
  ↓
Init set
  ↓
Init count
  ↓
Is empty?
   ↙        ↘
 Yes        No
Return 0   Loop
             ↓
     Get animal
             ↓
     lowercase
             ↓
     In set?
       ↙      ↘
     Yes      No
   count++   skip
        ↘    ↙
     More animals?
        ↓
    Return count
        ↓
       End
```