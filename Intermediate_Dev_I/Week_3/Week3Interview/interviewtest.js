/**
 * Test Suite for String Reversal Recursion
 * TextWise Solutions - ContentOptimizer
 * 
 * This file contains unit tests for the recursive string reversal function
 * using Node.js built-in test runner (available in Node.js 18+)
 */

const { test, describe } = require('node:test');
const assert = require('node:assert');
const { reverseString } = require('./stringReversal.js');

describe('String Reversal - Normal Cases', () => {
  
  test('Normal Case 1: Reverse a simple word', () => {
    const input = "hello";
    const expected = "olleh";
    const result = reverseString(input);
    assert.strictEqual(result, expected, `Expected "${expected}" but got "${result}"`);
    console.log(`✓ Test passed: "${input}" → "${result}"`);
  });

  test('Normal Case 2: Reverse a longer sentence', () => {
    const input = "ContentOptimizer";
    const expected = "rezimitpOtnetnoC";
    const result = reverseString(input);
    assert.strictEqual(result, expected, `Expected "${expected}" but got "${result}"`);
    console.log(`✓ Test passed: "${input}" → "${result}"`);
  });

  test('Normal Case 3: Reverse a string with spaces', () => {
    const input = "Text Wise";
    const expected = "esiW txeT";
    const result = reverseString(input);
    assert.strictEqual(result, expected, `Expected "${expected}" but got "${result}"`);
    console.log(`✓ Test passed: "${input}" → "${result}"`);
  });

  test('Normal Case 4: Reverse a string with numbers', () => {
    const input = "abc123";
    const expected = "321cba";
    const result = reverseString(input);
    assert.strictEqual(result, expected, `Expected "${expected}" but got "${result}"`);
    console.log(`✓ Test passed: "${input}" → "${result}"`);
  });
});

describe('String Reversal - Edge Cases', () => {
  
  test('Edge Case 1: Empty string', () => {
    const input = "";
    const expected = "";
    const result = reverseString(input);
    assert.strictEqual(result, expected, `Expected "${expected}" but got "${result}"`);
    console.log(`✓ Test passed: Empty string handled correctly`);
  });

  test('Edge Case 2: Single character', () => {
    const input = "a";
    const expected = "a";
    const result = reverseString(input);
    assert.strictEqual(result, expected, `Expected "${expected}" but got "${result}"`);
    console.log(`✓ Test passed: Single character "${input}" → "${result}"`);
  });

  test('Edge Case 3: Palindrome string', () => {
    const input = "racecar";
    const expected = "racecar";
    const result = reverseString(input);
    assert.strictEqual(result, expected, `Expected "${expected}" but got "${result}"`);
    console.log(`✓ Test passed: Palindrome "${input}" → "${result}"`);
  });

  test('Edge Case 4: String with special characters', () => {
    const input = "hello!@#";
    const expected = "#@!olleh";
    const result = reverseString(input);
    assert.strictEqual(result, expected, `Expected "${expected}" but got "${result}"`);
    console.log(`✓ Test passed: "${input}" → "${result}"`);
  });

  test('Edge Case 5: Two character string', () => {
    const input = "ab";
    const expected = "ba";
    const result = reverseString(input);
    assert.strictEqual(result, expected, `Expected "${expected}" but got "${result}"`);
    console.log(`✓ Test passed: "${input}" → "${result}"`);
  });

  test('Edge Case 6: String with only spaces', () => {
    const input = "   ";
    const expected = "   ";
    const result = reverseString(input);
    assert.strictEqual(result, expected, `Expected "${expected}" but got "${result}"`);
    console.log(`✓ Test passed: Spaces-only string handled correctly`);
  });
});

describe('String Reversal - Performance Test', () => {
  
  test('Performance: Moderately long string', () => {
    const input = "This is a longer string to test the recursive function performance";
    const result = reverseString(input);
    assert.strictEqual(result.length, input.length, `Length should be preserved`);
    console.log(`✓ Test passed: String of length ${input.length} reversed successfully`);
  });
});