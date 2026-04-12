/**
 * Demo Script - Shows Algorithm in Action
 * Run: npm run demo
 */

const { duplicateZeros } = require('./inventory-solution');

console.log('='.repeat(60));
console.log('INVENTORY MANAGEMENT SYSTEM - DUPLICATE ZEROS DEMO');
console.log('='.repeat(60));

// Demo 1: Main Example
console.log('\n Demo 1: Main Example with Multiple Zeros');
console.log('-'.repeat(60));
const inventory1 = [4, 0, 1, 3, 0, 2, 5, 0];
console.log('Input: ', inventory1);
duplicateZeros(inventory1);
console.log('Output:', inventory1);
console.log('✓ Each zero duplicated, elements shifted right');

// Demo 2: No Zeros
console.log('\n Demo 2: Array with No Zeros');
console.log('-'.repeat(60));
const inventory2 = [3, 2, 1];
console.log('Input: ', inventory2);
duplicateZeros(inventory2);
console.log('Output:', inventory2);
console.log('✓ No changes needed');

// Demo 3: All Zeros
console.log('\n Demo 3: Array with All Zeros');
console.log('-'.repeat(60));
const inventory3 = [0, 0, 0];
console.log('Input: ', inventory3);
duplicateZeros(inventory3);
console.log('Output:', inventory3);
console.log('✓ Cannot add more zeros (no space in fixed-size array)');

// Demo 4: Single Zero
console.log('\n Demo 4: Single Zero in Middle');
console.log('-'.repeat(60));
const inventory4 = [1, 2, 0, 3, 4, 5];
console.log('Input: ', inventory4);
duplicateZeros(inventory4);
console.log('Output:', inventory4);
console.log('✓ Zero duplicated, elements shifted');

// Demo 5: Zero at End
console.log('\n Demo 5: Zero at Last Position');
console.log('-'.repeat(60));
const inventory5 = [8, 4, 5, 0];
console.log('Input: ', inventory5);
duplicateZeros(inventory5);
console.log('Output:', inventory5);
console.log('✓ Last zero duplicates, overflow is discarded');

// Demo 6: Consecutive Zeros
console.log('\n Demo 6: Consecutive Zeros');
console.log('-'.repeat(60));
const inventory6 = [1, 0, 0, 2];
console.log('Input: ', inventory6);
duplicateZeros(inventory6);
console.log('Output:', inventory6);
console.log('✓ Both zeros affect positioning');

// Demo 7: Large Numbers
console.log('\n Demo 7: Large Stock Numbers');
console.log('-'.repeat(60));
const inventory7 = [1000, 0, 2000, 0, 3000];
console.log('Input: ', inventory7);
duplicateZeros(inventory7);
console.log('Output:', inventory7);
console.log('✓ Works with any numeric values');

// Demo 8: Single Element
console.log('\n Demo 8: Single Element (Zero)');
console.log('-'.repeat(60));
const inventory8 = [0];
console.log('Input: ', inventory8);
duplicateZeros(inventory8);
console.log('Output:', inventory8);
console.log('✓ Cannot duplicate in single-element array');

// Performance Analysis
console.log('\n' + '='.repeat(60));
console.log('COMPLEXITY ANALYSIS');
console.log('='.repeat(60));
console.log('Time Complexity: O(n)');
console.log('  ├─ Pass 1: Count zeros (n iterations)');
console.log('  └─ Pass 2: Place elements (n iterations)');
console.log('');
console.log('Space Complexity: O(1)');
console.log('  └─ Only uses 4 variables regardless of array size');
console.log('');
console.log('✓ In-place modification: YES');
console.log('✓ Optimal for interview: YES');

console.log('\n' + '='.repeat(60));
console.log('Demo completed successfully! 🎉');
console.log('='.repeat(60));
