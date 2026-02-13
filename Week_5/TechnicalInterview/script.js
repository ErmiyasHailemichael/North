// variable to keep track of the queue
let ticketQueue = [];
let nextNumber = 101;

// Function to create and add a ticket (Enqueue)
function takeTicket() {
    const ticket = {
        number: nextNumber++,
        timestamp: new Date().toLocaleTimeString()
    };
    
    ticketQueue.push(ticket);
    console.log(`Customer took Ticket #${ticket.number} at ${ticket.timestamp}`);
}

// Function to serve the customer (Dequeue)
function serveCustomer() {
    if (ticketQueue.length === 0) {
        console.log("The line is empty!");
        return;
    }

    // .shift() removes the FIRST element of the array
    const served = ticketQueue.shift();
    console.log(`Now serving Ticket #${served.number} (Wait over!)`);
}

// Simple logic to check size
function getRemainingCount() {
    return ticketQueue.length;
}