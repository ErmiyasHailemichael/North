function runTests() {
    console.log("\n--- Starting Unit Tests ---");

    // Helper to reset the system for each test
    const reset = () => {
        ticketQueue = [];
        nextNumber = 101;
    };

    // --- NORMAL CASES ---

    // Test 1: FIFO Order
    reset();
    takeTicket(); // 101
    takeTicket(); // 102
    let firstServed = ticketQueue[0].number;
    if (firstServed === 101) {
        console.log("✅ Test 1 Passed: FIFO Order maintained.");
    } else {
        console.log("❌ Test 1 Failed: FIFO Order broken.");
    }

    // Test 2: Queue Length
    reset();
    takeTicket();
    takeTicket();
    if (getRemainingCount() === 2) {
        console.log("✅ Test 2 Passed: Queue length is correct.");
    } else {
        console.log("❌ Test 2 Failed: Queue length is incorrect.");
    }

    // Test 3: Serving Decrements Queue
    reset();
    takeTicket();
    serveCustomer();
    if (getRemainingCount() === 0) {
        console.log("✅ Test 3 Passed: Serving removes item from queue.");
    } else {
        console.log("❌ Test 3 Failed: Serving did not remove item.");
    }

    // --- EDGE CASES ---

    // Test 4: Empty Queue Handling
    reset();
    // This should not crash the program
    try {
        serveCustomer();
        console.log("✅ Test 4 Passed: Empty queue handled gracefully.");
    } catch (e) {
        console.log("❌ Test 4 Failed: Program crashed on empty queue.");
    }

    // Test 5: Single Item
    reset();
    takeTicket();
    serveCustomer();
    if (ticketQueue.length === 0 && nextNumber === 102) {
        console.log("✅ Test 5 Passed: Single item processed correctly.");
    } else {
        console.log("❌ Test 5 Failed: Single item logic error.");
    }

    // Test 6: Numbering Consistency
    reset();
    for(let i=0; i<5; i++) takeTicket();
    if (nextNumber === 106) {
        console.log("✅ Test 6 Passed: Ticket numbering is consistent.");
    } else {
        console.log("❌ Test 6 Failed: Ticket numbering error.");
    }

    console.log("--- Tests Complete ---\n");
}

// Run the tests!
runTests();