
function duplicateZeros(inventory) {
  const n = inventory.length;
  
  // Step 1: Count zeros to find where the last element would end up
  let zeros = 0;
  for (let i = 0; i < n; i++) {
    if (inventory[i] === 0) {
      zeros++;
    }
  }
  
  // Step 2: Work backwards, copying elements to their final positions
  // Start from the end and work our way back
  let i = n - 1; // Read position
  let write = n + zeros - 1; // Where this element would go after all duplications
  
  // Handle edge case where the last written position would be exactly at the boundary
  // and the element is a zero
  while (i >= 0) {
    // If this element (after duplication) would be written at or after position n,
    // we need to adjust
    if (write < n) {
      inventory[write] = inventory[i];
    }
    
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