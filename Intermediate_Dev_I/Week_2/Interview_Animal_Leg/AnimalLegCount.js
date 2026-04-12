/**
 * Tech Interview Problem: Animal Leg Count in the Forest
 * 
 * Problem: Given an array of animals, count how many have exactly four legs.
 * 
 * Author: Ermiyas H.
 * Date: January 22, 2026
 */

/**
 * Count the number of animals with exactly four legs in the given array.

 * Time Complexity: O(n × k) where n is the number of animals and k is the size of fourLegged array (k=6, small constant)
 * Space Complexity: O(1) - constant space for the lookup array and counter
 */
function countFourLeggedAnimals(animals) {
    // Array of animals that have four legs
    const fourLegged = ['lion', 'deer', 'elephant', 'horse', 'dog', 'cat'];
    
    // Initialize counter to track how many four-legged animals we find
    let count = 0
    
    // Loop through each animal in the input array
    for (const animal of animals) {
        // Convert to lowercase for case-insensitive comparison
        // Check if this animal is in our four-legged array
        if (fourLegged.includes(animal.toLowerCase())) {
            count++;  // Found a four-legged animal, increment counter
        }
    }
    
    // Return the total count
    return count;
}

// Animal reference guide for clarity
const ANIMAL_LEG_REFERENCE = {
    fourLegs: ['lion', 'deer', 'elephant', 'horse', 'dog', 'cat'],
    twoLegs: ['monkey', 'parrot', 'ostrich'],
    noLegs: ['snake', 'worm'],
    multipleLegs: ['spider', 'ant', 'centipede']
};

// Export for testing
module.exports = {
    countFourLeggedAnimals,
    ANIMAL_LEG_REFERENCE
};

// Quick manual test when run directly
if (require.main === module) {
    console.log('=== Quick Manual Tests ===\n');
    
    const test1 = ['lion', 'monkey', 'deer', 'snake', 'elephant'];
    console.log('Test 1:', test1);
    console.log('Result:', countFourLeggedAnimals(test1));
    console.log('Expected: 3');
    console.log('Explanation: lion, deer, and elephant have 4 legs\n');
    
    const test2 = ['frog', 'horse', 'spider', 'ant'];
    console.log('Test 2:', test2);
    console.log('Result:', countFourLeggedAnimals(test2));
    console.log('Expected: 1');
    console.log('Explanation: Only horse has 4 legs\n');
    
    const test3 = ['LION', 'Lion', 'deer'];
    console.log('Test 3 (case test):', test3);
    console.log('Result:', countFourLeggedAnimals(test3));
    console.log('Expected: 3');
    console.log('Explanation: All are four-legged (case-insensitive)\n');
}