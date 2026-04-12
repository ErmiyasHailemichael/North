/**
 * Tech Interview Prep: 
 * 
 * Problem: Given a sorted array of growth percentages (may include negatives),
 * return an array of squared values sorted in non-decreasing order.
 * 
 * Approach: Two-Pointer Technique
 * - Since the input is already sorted, the largest squares are always
 *   at either the far left (most negative) or far right (most positive).
 * - We use two pointers (left & right) and fill the result from the back.
 * 
 * Time Complexity:  O(n) — we visit each element exactly once
 * Space Complexity: O(n) — we create one new array of the same size
 */

function sortedSquaredGrowth(growthPercentages) {
  const n = growthPercentages.length;
  const result = new Array(n);

  let left = 0;
  let right = n - 1;
  let position = n - 1; // fill result from the back

  while (left <= right) {
    const leftSquare = growthPercentages[left] ** 2;
    const rightSquare = growthPercentages[right] ** 2;

    if (leftSquare > rightSquare) {
      result[position] = leftSquare;
      left++;
    } else {
      result[position] = rightSquare;
      right--;
    }

    position--;
  }

  return result;
}

module.exports = { sortedSquaredGrowth };

// Run
const example1 = sortedSquaredGrowth([-5, -2, 0, 3, 10]);
console.log("Example 1:", example1);

const example2 = sortedSquaredGrowth([-8, -3, 2, 4, 12]);
console.log("Example 2:", example2);