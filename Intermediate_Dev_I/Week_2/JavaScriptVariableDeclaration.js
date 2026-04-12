// JavaScript Variable Declaration Assignment
// Refactoring var to const and let
// Ermiyas H.
// Intermediate Dev 1
// ============================================
// SCENARIO 1: Reassigning a person's name
// ============================================
let fullName = "John Doe";
fullName = "Jane Doe";
console.log(fullName);

/* 
 * Keyword chosen: let
 * 
 * Why let is appropriate:
 * The variable fullName is reassigned from "John Doe" to "Jane Doe". 
 * Since the value needs to change, we use 'let' which allows reassignment.
 * 
 * What would happen with const?
 * If we used const, we would get a TypeError: "Assignment to constant variable"
 * when trying to execute the line fullName = "Jane Doe". The const keyword
 * prevents any reassignment after the initial declaration.
 */


// ============================================
// SCENARIO 2: Checking if someone is an adult
// ============================================
const age = 30;
if (age > 18) {
    const adult = true;
    console.log(adult);
}

/* 
 * Keyword chosen: const (for both variables)
 * 
 * Why const is appropriate:
 * Neither 'age' nor 'adult' are reassigned after their initial declaration.
 * The age remains 30 throughout the code, and adult is only set once to true.
 * Using const communicates intent - these values should not change.
 * 
 * What would happen with let?
 * Using let would work functionally, but it's less precise. It would suggest
 * that these variables might be reassigned later, which isn't the case.
 * const is the better choice for variables that don't need reassignment.
 * 
 * Additional benefit of const for 'adult':
 * const also provides block scoping, so 'adult' only exists within the if block,
 * preventing accidental access outside its intended scope.
 */


// ============================================
// SCENARIO 3: Creating an array in a loop
// ============================================
const loopArray = [];
for (let i = 0; i < 5; i++) {
    loopArray.push(i);
}
console.log(loopArray);

/* 
 * Keywords chosen: const for loopArray, let for i
 * 
 * Why const for loopArray:
 * The loopArray variable itself is never reassigned.
 * We're only modifying the array's contents using push(), not reassigning the
 * variable to a new array. const protects the reference while still allowing
 * the array contents to be modified.
 * 
 * Why let for i:
 * The loop counter i is reassigned on each iteration (i++), so it must use let.
 * 
 * What would happen with different choices?
 * - If loopArray used let: Would work, but unnecessarily suggests it might be reassigned.
 * - If loopArray used const with loopArray = [1,2,3]: Would throw TypeError.
 * - If i used const: Would throw TypeError on the first increment (i++).
 * - If i used var: Would have function scope instead of block scope, potentially
 *   causing issues in more complex scenarios with closures.
 */


// ============================================
// SCENARIO 4: Defining a maximum value
// ============================================
const MAXIMUM = 100;
// MAXIMUM = 200;  // This line is commented out because it would cause an error

/* 
 * Keyword chosen: const
 * 
 * Why const is appropriate:
 * The variable name MAXIMUM (all caps) follows the convention for constants
 * that should never change. Using const enforces this at the language level.
 * The attempted reassignment to 200 should be prevented.
 * 
 * What happens with const?
 * The line MAXIMUM = 200 would throw a TypeError: "Assignment to constant variable".
 * This is actually the desired behavior! It prevents bugs where a constant value
 * is accidentally changed. I've commented out the reassignment line since it
 * would break the code.
 * 
 * What would happen with let?
 * Using let would allow the reassignment to 200, which defeats the purpose of
 * having a MAXIMUM constant. The code would run without errors, but the semantic
 * meaning of "maximum" as an unchanging value would be violated.
 */

console.log(MAXIMUM); // Outputs: 100


// ============================================
// SCENARIO 5: Changing color preferences
// ============================================
let colors = ["Red", "Green", "Blue"];
colors = ["Yellow", "Pink", "Purple"];
console.log(colors);

/* 
 * Keyword chosen: let
 * 
 * Why let is appropriate:
 * The colors variable is completely reassigned to a new array. This is different
 * from modifying an existing array - we're replacing the entire reference.
 * Since reassignment occurs, let is required.
 * 
 * What would happen with const?
 * Using const would throw a TypeError: "Assignment to constant variable" when
 * trying to execute colors = ["Yellow", "Pink", "Purple"]. 
 * 
 * Note the difference from Scenario 3:
 * - Scenario 3: loopArray.push(i) - modifying array contents (const works)
 * - Scenario 5: colors = [...] - reassigning to new array (requires let)
 * 
 * If we wanted to use const, we'd need to modify the array instead:
 * colors.length = 0; // clear array
 * colors.push("Yellow", "Pink", "Purple"); // add new values
 * But since the code reassigns, let is the correct choice.
 */


// ============================================
// SUMMARY OF const vs let USAGE
// ============================================
/*
 * Use const when:
 * - The variable will never be reassigned
 * - You want to communicate that a value should remain constant
 * - Working with objects/arrays that you'll modify but not reassign
 * 
 * Use let when:
 * - The variable will be reassigned
 * - Loop counters (for, while)
 * - Variables that track changing state
 * 
 * General rule: Default to const, only use let when reassignment is needed.
 * This makes code more predictable and catches accidental reassignments.
 */