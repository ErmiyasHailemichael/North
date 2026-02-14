const test = require('node:test');
const assert = require('node:assert');
const Ticket = require('./ticket');
const TicketQueue = require('./ticketQueue');

// ==========================================
// NORMAL TEST CASES
// ==========================================

test('Normal Case 1: FIFO Order is maintained', () => {
    const queue = new TicketQueue(101);
    
    queue.takeTicket(); // 101
    queue.takeTicket(); // 102
    queue.takeTicket(); // 103
    
    const first = queue.serveCustomer();
    const second = queue.serveCustomer();
    const third = queue.serveCustomer();
    
    assert.strictEqual(first.number, 101);
    assert.strictEqual(second.number, 102);
    assert.strictEqual(third.number, 103);
});

test('Normal Case 2: Queue count updates correctly', () => {
    const queue = new TicketQueue();
    
    assert.strictEqual(queue.getRemainingCount(), 0);
    
    queue.takeTicket();
    queue.takeTicket();
    assert.strictEqual(queue.getRemainingCount(), 2);
    
    queue.serveCustomer();
    assert.strictEqual(queue.getRemainingCount(), 1);
    
    queue.serveCustomer();
    assert.strictEqual(queue.getRemainingCount(), 0);
});

test('Normal Case 3: Ticket numbering is sequential', () => {
    const queue = new TicketQueue(500);
    
    const t1 = queue.takeTicket();
    const t2 = queue.takeTicket();
    const t3 = queue.takeTicket();
    
    assert.strictEqual(t1.number, 500);
    assert.strictEqual(t2.number, 501);
    assert.strictEqual(t3.number, 502);
});

test('Normal Case 4: Timestamp is recorded on ticket creation', () => {
    const beforeTime = Date.now();
    const ticket = new Ticket(1);
    const afterTime = Date.now();
    
    const ticketTime = ticket.timestamp.getTime();
    assert.ok(ticketTime >= beforeTime && ticketTime <= afterTime);
});

// ==========================================
// EDGE TEST CASES
// ==========================================

test('Edge Case 1: Serving from empty queue returns null', () => {
    const queue = new TicketQueue();
    
    const result = queue.serveCustomer();
    assert.strictEqual(result, null);
});

test('Edge Case 2: Single ticket is processed correctly', () => {
    const queue = new TicketQueue(101);
    
    const ticket = queue.takeTicket();
    assert.strictEqual(queue.getRemainingCount(), 1);
    
    const served = queue.serveCustomer();
    assert.strictEqual(served.number, ticket.number);
    assert.strictEqual(queue.getRemainingCount(), 0);
    assert.ok(queue.isEmpty());
});

test('Edge Case 3: isEmpty() works correctly', () => {
    const queue = new TicketQueue();
    
    assert.strictEqual(queue.isEmpty(), true);
    
    queue.takeTicket();
    assert.strictEqual(queue.isEmpty(), false);
    
    queue.serveCustomer();
    assert.strictEqual(queue.isEmpty(), true);
});

test('Edge Case 4: Peek does not remove ticket', () => {
    const queue = new TicketQueue(200);
    
    queue.takeTicket();
    queue.takeTicket();
    
    const peeked = queue.peek();
    assert.strictEqual(peeked.number, 200);
    assert.strictEqual(queue.getRemainingCount(), 2);
    
    const served = queue.serveCustomer();
    assert.strictEqual(served.number, 200);
    assert.strictEqual(queue.getRemainingCount(), 1);
});

test('Edge Case 5: Large number of tickets', () => {
    const queue = new TicketQueue(1);
    const count = 1000;
    
    // Generate many tickets
    for (let i = 0; i < count; i++) {
        queue.takeTicket();
    }
    
    assert.strictEqual(queue.getRemainingCount(), count);
    
    // Serve all
    for (let i = 0; i < count; i++) {
        const ticket = queue.serveCustomer();
        assert.strictEqual(ticket.number, i + 1);
    }
    
    assert.ok(queue.isEmpty());
});

test('Edge Case 6: Peek on empty queue returns null', () => {
    const queue = new TicketQueue();
    
    const result = queue.peek();
    assert.strictEqual(result, null);
});