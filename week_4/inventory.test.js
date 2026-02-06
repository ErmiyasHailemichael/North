/**
 * Comprehensive Test Suite for Inventory Management System
 * Tests: 3 normal cases + 9 edge cases = 12 total test cases
 * 
 * Run: npm test
 */

const { duplicateZeros } = require('./inventory-solution');

describe('Inventory Management - Duplicate Zeros', () => {
  
  // ==================== NORMAL TEST CASES ====================
  describe('Normal Cases', () => {
    
    test('Case 1: Multiple zeros with mixed numbers', () => {
      const inventory = [4, 0, 1, 3, 0, 2, 5, 0];
      const expected = [4, 0, 0, 1, 3, 0, 0, 2];
      duplicateZeros(inventory);
      expect(inventory).toEqual(expected);
    });

    test('Case 2: Single zero in middle of array', () => {
      const inventory = [1, 2, 0, 3, 4, 5];
      const expected = [1, 2, 0, 0, 3, 4];
      duplicateZeros(inventory);
      expect(inventory).toEqual(expected);
    });

    test('Case 3: Zero at the beginning', () => {
      const inventory = [0, 1, 2, 3, 4];
      const expected = [0, 0, 1, 2, 3];
      duplicateZeros(inventory);
      expect(inventory).toEqual(expected);
    });
  });

  // ==================== EDGE TEST CASES ====================
  describe('Edge Cases', () => {
    
    test('Edge Case 1: Array with no zeros', () => {
      const inventory = [3, 2, 1];
      const expected = [3, 2, 1];
      duplicateZeros(inventory);
      expect(inventory).toEqual(expected);
    });

    test('Edge Case 2: Array with all zeros', () => {
      const inventory = [0, 0, 0];
      const expected = [0, 0, 0]; // Cannot add more zeros due to array length constraint
      duplicateZeros(inventory);
      expect(inventory).toEqual(expected);
    });

    test('Edge Case 3: Single element array with zero', () => {
      const inventory = [0];
      const expected = [0];
      duplicateZeros(inventory);
      expect(inventory).toEqual(expected);
    });

    test('Edge Case 4: Single element array without zero', () => {
      const inventory = [5];
      const expected = [5];
      duplicateZeros(inventory);
      expect(inventory).toEqual(expected);
    });

    test('Edge Case 5: Two element array with zero at end', () => {
      const inventory = [5, 0];
      const expected = [5, 0];
      duplicateZeros(inventory);
      expect(inventory).toEqual(expected);
    });

    test('Edge Case 6: Zero at last position (boundary case)', () => {
      const inventory = [8, 4, 5, 0];
      const expected = [8, 4, 5, 0];
      duplicateZeros(inventory);
      expect(inventory).toEqual(expected);
    });

    test('Edge Case 7: Empty array', () => {
      const inventory = [];
      const expected = [];
      duplicateZeros(inventory);
      expect(inventory).toEqual(expected);
    });

    test('Edge Case 8: Consecutive zeros', () => {
      const inventory = [1, 0, 0, 2];
      const expected = [1, 0, 0, 0]; // Second zero shifted out, first duplicated
      duplicateZeros(inventory);
      expect(inventory).toEqual(expected);
    });

    test('Edge Case 9: Large numbers in inventory', () => {
      const inventory = [1000, 0, 2000, 0, 3000];
      const expected = [1000, 0, 0, 2000, 0];
      duplicateZeros(inventory);
      expect(inventory).toEqual(expected);
    });

    test('Edge Case 10: Null/Undefined handling (throws)', () => {
      const inventory = null;
      expect(() => duplicateZeros(inventory)).toThrow();
    });

    test('Edge Case 11: Large array with sparse zeros', () => {
      const inventory = [1, 2, 3, 0, 4, 5, 6, 0, 7, 8];
      const expected = [1, 2, 3, 0, 0, 4, 5, 6, 0, 0];
      duplicateZeros(inventory);
      expect(inventory).toEqual(expected);
    });

    test('Edge Case 12: Zero at start and end', () => {
      const inventory = [0, 1, 2, 3, 0];
      const expected = [0, 0, 1, 2, 3];
      duplicateZeros(inventory);
      expect(inventory).toEqual(expected);
    });
  });
});
