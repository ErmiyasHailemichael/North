// ================================
// DOG API FETCH PROJECT - TEST GUIDE
// ================================
// This is a MANUAL testing guide
// Follow these steps to test your application

console.log("==============================================");
console.log("   DOG API FETCH - MANUAL TEST GUIDE");
console.log("==============================================\n");

console.log("INSTRUCTIONS:");
console.log("1. Open index.html in your web browser");
console.log("2. Open the browser's Developer Console (F12)");
console.log("3. Follow the test cases below");

console.log("==============================================");
console.log("   NORMAL TEST CASES (3)");
console.log("==============================================\n");

console.log("TEST 1: Load Dog Breeds");
console.log("─────────────────────────────────────────────");
console.log("Steps:");
console.log("  1. Click the 'Load Breeds' button");
console.log("  2. Wait for the list to appear");
console.log("\nExpected Result:");
console.log("  A list of dog breed names appears");
console.log("  Breeds are clickable (cursor changes to pointer)");
console.log("  No error messages appear");
console.log("  Console shows no errors");
console.log("─────────────────────────────────────────────\n");

console.log("TEST 2: View Breed Details");
console.log("─────────────────────────────────────────────");
console.log("Steps:");
console.log("  1. Click 'Load Breeds' if not already loaded");
console.log("  2. Click on ANY breed name (e.g., 'Labrador Retriever')");
console.log("  3. Wait for details to appear");
console.log("\nExpected Result:");
console.log("  Breed Details section shows:");
console.log("    - Breed name");
console.log("    - Description");
console.log("    - Life span (min - max years)");
console.log("    - Male weight range");
console.log("    - Female weight range");
console.log("    - Hypoallergenic status (true/false)");
console.log("  No error messages appear");
console.log("─────────────────────────────────────────────\n");

console.log("TEST 3: Load Dog Facts");
console.log("─────────────────────────────────────────────");
console.log("Steps:");
console.log("  1. Click the 'Load Fact' button");
console.log("  2. Wait for facts to appear");
console.log("\nExpected Result:");
console.log("  Up to 3 dog facts appear in the Facts section");
console.log("  Each fact is displayed as a paragraph");
console.log("  Facts are readable and make sense");
console.log("  No error messages appear");
console.log("─────────────────────────────────────────────\n");

console.log("==============================================");
console.log("   EDGE TEST CASES (3)");
console.log("==============================================\n");

console.log("TEST 4: Load Dog Groups");
console.log("─────────────────────────────────────────────");
console.log("Steps:");
console.log("  1. Click the 'Load Groups' button");
console.log("  2. Wait for groups to appear");
console.log("\nExpected Result:");
console.log("  A list of dog groups appears (e.g., Sporting, Hound, etc.)");
console.log("  Group names are displayed in a list");
console.log("  No error messages appear");
console.log("─────────────────────────────────────────────\n");

console.log("TEST 5: Click Multiple Breeds (Rapid Switching)");
console.log("─────────────────────────────────────────────");
console.log("Steps:");
console.log("  1. Make sure breeds are loaded");
console.log("  2. Click on one breed");
console.log("  3. Immediately click on a DIFFERENT breed");
console.log("  4. Repeat 2-3 times rapidly");
console.log("\nExpected Result:");
console.log("  Details update correctly for each breed");
console.log("  No errors appear in console");
console.log("  Previous breed details are replaced (not duplicated)");
console.log("  Application doesn't freeze or crash");
console.log("─────────────────────────────────────────────\n");

console.log("TEST 6: Reload Facts Multiple Times");
console.log("─────────────────────────────────────────────");
console.log("Steps:");
console.log("  1. Click 'Load Fact' button");
console.log("  2. Wait for facts to appear");
console.log("  3. Click 'Load Fact' button again");
console.log("  4. Repeat 2-3 times");
console.log("\nExpected Result:");
console.log("  Facts are replaced with new ones (not duplicated)");
console.log("  Each click fetches fresh facts from the API");
console.log("  No errors appear");
console.log("  Page doesn't slow down after multiple clicks");
console.log("─────────────────────────────────────────────\n");

console.log("==============================================");
console.log("   BONUS TEST CASES (Optional)");
console.log("==============================================\n");

console.log("BONUS TEST 1: Test Without Internet");
console.log("─────────────────────────────────────────────");
console.log("Steps:");
console.log("  1. Disconnect from internet (turn off WiFi)");
console.log("  2. Refresh the page");
console.log("  3. Click 'Load Breeds' button");
console.log("\nExpected Result:");
console.log("  Alert message appears: 'Failed to load breeds.'");
console.log("  Console shows error message");
console.log("  Application doesn't crash");
console.log("─────────────────────────────────────────────\n");

console.log("BONUS TEST 2: Check Console for Errors");
console.log("─────────────────────────────────────────────");
console.log("Steps:");
console.log("  1. Open Developer Console (F12)");
console.log("  2. Go through all normal tests");
console.log("  3. Watch for any red error messages");
console.log("\nExpected Result:");
console.log("  No errors in console during normal operation");
console.log("  Only expected log messages appear");
console.log("─────────────────────────────────────────────\n");

console.log("==============================================");
console.log("   TESTING SUMMARY");
console.log("==============================================\n");
console.log("Total Test Cases: 6");
console.log("  - Normal Cases: 3");
console.log("  - Edge Cases: 3");
console.log("  - Bonus Cases: 2\n");
