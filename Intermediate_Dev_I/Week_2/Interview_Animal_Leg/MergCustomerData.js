/**
 * Tech Interview Problem: Merging Customer Data for Market Analysis
 * 
 * Problem: Merge two sorted arrays into one sorted array
 * 
 * Author: [Your Name]
 * Date: January 22, 2026
 */

/**
 * Merge two sorted customer data arrays into one sorted array.
 * The result is stored in customerData1.
 * Time Complexity: O(m + n) - we look at each element once
 * Space Complexity: O(m + n) - we create a temporary array for merging
 */
function mergeCustomerData(customerData1, m, customerData2, n) {
    // Step 1: Create a temporary array to hold merged results
    const merged = [];
    
    // Step 2: Set up pointers for both arrays
    let i = 0;  // Points to current position in customerData1
    let j = 0;  // Points to current position in customerData2
    
    // Step 3: Compare elements and add smaller one to merged array
    while (i < m && j < n) {
        if (customerData1[i] <= customerData2[j]) {
            // customerData1's element is smaller, add it
            merged.push(customerData1[i]);
            i++;  // Move to next element in customerData1
        } else {
            // customerData2's element is smaller, add it
            merged.push(customerData2[j]);
            j++;  // Move to next element in customerData2
        }
    }
    
    // Step 4: Add any remaining elements from customerData1
    while (i < m) {
        merged.push(customerData1[i]);
        i++;
    }
    
    // Step 5: Add any remaining elements from customerData2
    while (j < n) {
        merged.push(customerData2[j]);
        j++;
    }
    
    // Step 6: Copy merged array back into customerData1
    for (let k = 0; k < merged.length; k++) {
        customerData1[k] = merged[k];
    }
    
    // Note: We modify customerData1 directly, so no return needed
}

/**
 * Helper function to print array nicely
 */
function printArray(arr, label) {
    console.log(`${label}: [${arr.join(', ')}]`);
}

// Export for testing
module.exports = {
    mergeCustomerData,
    printArray
};

// Quick manual tests when run directly
if (require.main === module) {
    console.log('=== Quick Manual Tests ===\n');
    
    // Test 1: Example from problem
    console.log('Test 1: Both arrays have elements');
    const test1 = [101, 104, 107, 0, 0, 0];
    const test1b = [102, 105, 108];
    console.log('Before merge:');
    printArray(test1, 'customerData1');
    printArray(test1b, 'customerData2');
    mergeCustomerData(test1, 3, test1b, 3);
    console.log('After merge:');
    printArray(test1, 'Result');
    console.log('Expected: [101, 102, 104, 105, 107, 108]\n');
    
    // Test 2: Second array is empty
    console.log('Test 2: Empty second array');
    const test2 = [103, 0, 0];
    const test2b = [];
    console.log('Before merge:');
    printArray(test2, 'customerData1');
    printArray(test2b, 'customerData2');
    mergeCustomerData(test2, 1, test2b, 0);
    console.log('After merge:');
    printArray(test2, 'Result');
    console.log('Expected: [103]\n');
    
    // Test 3: First array is empty
    console.log('Test 3: Empty first array');
    const test3 = [0, 0, 0];
    const test3b = [201, 202, 203];
    console.log('Before merge:');
    printArray(test3, 'customerData1');
    printArray(test3b, 'customerData2');
    mergeCustomerData(test3, 0, test3b, 3);
    console.log('After merge:');
    printArray(test3, 'Result');
    console.log('Expected: [201, 202, 203]\n');
}