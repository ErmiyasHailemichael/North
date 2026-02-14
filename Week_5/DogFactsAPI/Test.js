// test.js - Simple Manual Test Cases for Dog Facts API
// Run this AFTER starting your server in another terminal

console.log("==============================================");
console.log("   DOG FACTS API - MANUAL TEST GUIDE");
console.log("==============================================\n");

console.log("INSTRUCTIONS:");
console.log("1. Start your server first: node server.js");
console.log("2. Keep the server running in that terminal");
console.log("3. Open a NEW terminal window");
console.log("4. Run these commands one by one\n");

console.log("==============================================");
console.log("   NORMAL TEST CASES (3)");
console.log("==============================================\n");

console.log("TEST 1: Get all facts (no parameters)");
console.log("Command:");
console.log("  curl http://localhost:3000/facts");
console.log("\nExpected Result:");
console.log("  Status: 200");
console.log("  success: true");
console.log("  Returns array with 9 facts");
console.log("─────────────────────────────────────────────\n");

console.log("TEST 2: Get exactly 3 facts");
console.log("Command:");
console.log("  curl http://localhost:3000/facts?number=3");
console.log("\nExpected Result:");
console.log("  Status: 200");
console.log("  success: true");
console.log("  Returns array with exactly 3 facts");
console.log("─────────────────────────────────────────────\n");

console.log("TEST 3: Use 'limit' parameter (alias for 'number')");
console.log("Command:");
console.log("  curl http://localhost:3000/facts?limit=1");
console.log("\nExpected Result:");
console.log("  Status: 200");
console.log("  success: true");
console.log("  Returns array with exactly 1 fact");
console.log("─────────────────────────────────────────────\n");

console.log("==============================================");
console.log("   EDGE TEST CASES (3)");
console.log("==============================================\n");

console.log("TEST 4: Try to get 0 facts (invalid)");
console.log("Command:");
console.log("  curl http://localhost:3000/facts?number=0");
console.log("\nExpected Result:");
console.log("  Status: 400");
console.log("  success: false");
console.log("  error: 'Query parameter \\\'number\\\' must be a positive integer.'");
console.log("─────────────────────────────────────────────\n");

console.log("TEST 5: Use non-numeric value (invalid)");
console.log("Command:");
console.log("  curl http://localhost:3000/facts?number=abc");
console.log("\nExpected Result:");
console.log("  Status: 400");
console.log("  success: false");
console.log("  error: 'Query parameter \\\'number\\\' must be a positive integer.'");
console.log("─────────────────────────────────────────────\n");

console.log("TEST 6: Request more than maximum (should cap at 5)");
console.log("Command:");
console.log("  curl http://localhost:3000/facts?number=100");
console.log("\nExpected Result:");
console.log("  Status: 200");
console.log("  success: true");
console.log("  Returns array with 5 facts (capped at maximum)");
console.log("─────────────────────────────────────────────\n");

console.log("==============================================");
console.log("   BONUS TEST CASES (2)");
console.log("==============================================\n");

console.log("BONUS TEST 1: Get facts in raw text format");
console.log("Command:");
console.log("  curl http://localhost:3000/facts?number=2&raw=true");
console.log("\nExpected Result:");
console.log("  Status: 200");
console.log("  Returns plain text (not JSON)");
console.log("  One fact per line");
console.log("─────────────────────────────────────────────\n");

console.log("BONUS TEST 2: Access invalid route (404)");
console.log("Command:");
console.log("  curl http://localhost:3000/invalid-route");
console.log("\nExpected Result:");
console.log("  Status: 404");
console.log("  success: false");
console.log("  error: 'Route not found'");
console.log("─────────────────────────────────────────────\n");

console.log("==============================================");
console.log("   TESTING SUMMARY");
console.log("==============================================\n");
console.log("Total Test Cases: 8");
console.log("  - Normal Cases: 3");
console.log("  - Edge Cases: 3");
console.log("  - Bonus Cases: 2\n");
