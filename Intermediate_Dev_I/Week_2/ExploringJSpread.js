// Ermiyas H.
// Intermidate Dev 
// Assignment: Exploring JavaScript Spread Syntax
// ============================================
// TASK 1: Function Argument Expansion
// ============================================
console.log("=== TASK 1: Function Argument Expansion ===");

// Define a function that takes three arguments and returns their sum
function sum(a, b, c) {
    return a + b + c;
}

// Create an array with three numeric elements
const numbers = [10, 20, 30];

// Call the sum function using spread syntax to pass array elements as arguments
const result = sum(...numbers);

// Print the result
console.log("Numbers array:", numbers);
console.log("Sum of numbers:", result);
// Output: 60
console.log();


// ============================================
// TASK 2: Merging Arrays
// ============================================
console.log("=== TASK 2: Merging Arrays ===");

// Create two arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Merge arrays using spread syntax
const mergedArray = [...array1, ...array2];

// Print the merged array
console.log("Array 1:", array1);
console.log("Array 2:", array2);
console.log("Merged Array:", mergedArray);
// Output: [1, 2, 3, 4, 5, 6]
console.log();


// ============================================
// TASK 3: Array Element Insertion
// ============================================
console.log("=== TASK 3: Array Element Insertion ===");

// Create an array of colors
const colors = ['red', 'green', 'blue'];

// Create a new array with elements at beginning and end using spread syntax
const extendedColors = ['yellow', ...colors, 'purple'];

// Print the extended colors array
console.log("Original colors:", colors);
console.log("Extended colors:", extendedColors);
// Output: ['yellow', 'red', 'green', 'blue', 'purple']
console.log();


// ============================================
// TASK 4: Cloning and Modifying an Object
// ============================================
console.log("=== TASK 4: Cloning and Modifying an Object ===");

// Define an object with name and age properties
const person = {
    name: 'John',
    age: 30
};

// Clone the person object using spread syntax
const newPerson = { ...person };

// Modify the cloned object
newPerson.name = 'Jane';
newPerson.gender = 'female';

// Print both objects to verify they are separate
console.log("Original person:", person);
// Output: { name: 'John', age: 30 }

console.log("New person:", newPerson);
// Output: { name: 'Jane', age: 30, gender: 'female' }

console.log("Are they the same object?", person === newPerson);
// Output: false 
console.log();


// ============================================
// TASK 5: Combining Objects
// ============================================
console.log("=== TASK 5: Combining Objects ===");

// Create two objects with some overlapping properties
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };

// Combine objects using spread syntax (object2 properties overwrite object1)
const combinedObject = { ...object1, ...object2 };

// Print the combined object
console.log("Object 1:", object1);
console.log("Object 2:", object2);
console.log("Combined Object:", combinedObject);
// Output: { a: 1, b: 3, c: 4 }
console.log();
