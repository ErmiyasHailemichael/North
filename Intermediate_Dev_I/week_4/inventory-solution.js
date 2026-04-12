/**
 * Inventory Management - Duplicate Zeros (simple in-place shift)
 * This implementation shifts elements to the right when a zero is found.
 * Time: O(n*m) in worst-case where m is number of zeros
 * Space: O(1)
 */

function duplicateZeros(inventory) {
  const n = inventory.length;
  
//   inventory = [4, 0, 1, 3, 0, 2, 5, 0]
// n = 8
  // Step 1: Count zeros to find where the last element would end up
  let zeros = 0;
  for (let i = 0; i < n; i++) {
    if (inventory[i] === 0) {
      zeros++;
    }
  }

//   Array: [4, 0, 1, 3, 0, 2, 5, 0]
// Index:  0  1  2  3  4  5  6  7

// i = 0: inventory[0] = 4  → Not zero, zeros = 0
// i = 1: inventory[1] = 0  → Zero found! zeros = 1
// i = 2: inventory[2] = 1  → Not zero, zeros = 1
// i = 3: inventory[3] = 3  → Not zero, zeros = 1
// i = 4: inventory[4] = 0  → Zero found! zeros = 2
// i = 5: inventory[5] = 2  → Not zero, zeros = 2
// i = 6: inventory[6] = 5  → Not zero, zeros = 2
// i = 7: inventory[7] = 0  → Zero found! zeros = 3

// Final: zeros = 3
  
  // Step 2: Work backwards, copying elements to their final positions
  // Start from the end and work our way back
  let i = n - 1; // Read position
  let write = n + zeros - 1; // Where this element would go after all duplications
  

/*
Original positions:  0  1  2  3  4  5  6  7
Read pointer (i):                        ↑ (at position 7)

Conceptual positions after duplication:
                     0  1  2  3  4  5  6  7  8  9  10
Write pointer:                                      ↑ (at position 10)

Actual array (only 0-7 exist):
                     0  1  2  3  4  5  6  7
Can only write here: ✓  ✓  ✓  ✓  ✓  ✓  ✓  ✓  ✗  ✗  ✗
*/
  // Handle edge case where the last written position would be exactly at the boundary
  // and the element is a zero
  while (i >= 0) {
    // If this element (after duplication) would be written at or after position n,
    // we need to adjust
    if (write < n) {
      inventory[write] = inventory[i];
    }
//     i = 7, write = 10
// inventory[7] = 0

// Check: Is write (10) < n (8)? NO!
// Result: We DON'T write. This element falls outside the array.
    // If it's a zero and we have space for the duplicate
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

module.exports = { duplicateZeros };
