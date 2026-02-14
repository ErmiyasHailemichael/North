# Ticketing System Simulation

A queue-based ticketing system simulation that demonstrates customer service management with ticket generation and processing.

## Project Overview

This project implements a service center ticketing system where:
- Customers take numbered tickets
- Tickets are queued in arrival order (FIFO)
- Customers are served one at a time
- System tracks wait times and queue status

---

## Clarifying Questions

Before implementing, I considered these key questions:

### 1. Queue Data Structure
**Q:** Should I use an array or object for the queue?  
**A:** Object with front/rear pointers for O(1) operations vs array shift() which is O(n)

### 2. Ticket Numbering
**Q:** What should the starting ticket number be?  
**A:** 101 (configurable) - common in real ticketing systems

### 3. Timing Implementation
**Q:** How should I handle "random intervals" for arrivals and service?  
**A:** Use randomized delays (500-1500ms arrival, 800-2000ms service) with async/await

### 4. Phase Separation
**Q:** Should generation and processing be separate or interleaved?  
**A:** Separate phases for clarity (all tickets generated, then all served)

### 5. Empty Queue Handling
**Q:** What happens when serving from an empty queue?  
**A:** Return null gracefully (no errors thrown)

### 6. Ticket Information
**Q:** What information should each ticket contain?  
**A:** Number and timestamp (as specified), plus helper methods for formatting

---

## Architecture

### Class Structure
```
Ticket
├── number: int
├── timestamp: Date
└── methods: getFormattedTime(), getWaitTime(), toString()

TicketQueue
├── nextNumber: int
├── queue: object
├── front: int
├── rear: int
└── methods: takeTicket(), serveCustomer(), getRemainingCount(), isEmpty(), peek()
```

### Flow Diagram
```
┌─────────────────────────────────────┐
│     START SIMULATION                │
└──────────┬──────────────────────────┘
           │
           ▼
┌─────────────────────────────────────┐
│  PHASE 1: TICKET GENERATION         │
│                                     │
│  Loop for N customers:              │
│  ┌──────────────────────┐          │
│  │ Create new ticket    │          │
│  │ Add to queue         │          │
│  │ Wait random interval │          │
│  └──────────────────────┘          │
└──────────┬──────────────────────────┘
           │
           ▼
┌─────────────────────────────────────┐
│  PHASE 2: TICKET PROCESSING         │
│                                     │
│  While queue not empty:             │
│  ┌──────────────────────┐          │
│  │ Dequeue next ticket  │          │
│  │ Display ticket info  │          │
│  │ Calculate wait time  │          │
│  │ Wait service time    │          │
│  └──────────────────────┘          │
└──────────┬──────────────────────────┘
           │
           ▼
┌─────────────────────────────────────┐
│     END SIMULATION                  │
└─────────────────────────────────────┘
```

---

## Installation & Usage

### Prerequisites
- Node.js 16+ (uses built-in test runner)

### Setup
```bash
# Clone repository
git clone <your-repo-url>
cd ticketing-system

# No dependencies needed!
```

### Run Simulation
```bash
node simulation.js
```

### Run Tests
```bash
node --test test.js
```

---

## Test Cases

### Normal Cases (3)
1. **FIFO Order** - Verifies first-in-first-out behavior
2. **Queue Count** - Confirms count updates correctly
3. **Sequential Numbering** - Ensures tickets are numbered properly

### Edge Cases (6)
1. **Empty Queue** - Serving from empty queue returns null
2. **Single Ticket** - One customer processed correctly
3. **isEmpty() Function** - Boundary checking works
4. **Peek Operation** - Non-destructive queue inspection
5. **Large Volume** - Handles 1000+ tickets
6. **Peek on Empty** - Edge case for peek function

---

## Time & Space Complexity

| Operation | Time | Space |
|-----------|------|-------|
| takeTicket() | O(1) | O(1) |
| serveCustomer() | O(1) | O(1) |
| getRemainingCount() | O(1) | O(1) |
| isEmpty() | O(1) | O(1) |

**Overall:** O(n) time, O(n) space for n customers


---

## File Structure
```
ticketing-system/
├── Ticket.js           # Ticket class
├── TicketQueue.js      # Queue implementation
├── simulation.js       # Main simulation
├── test.js            # Unit tests
├── COMPLEXITY.md      # Complexity analysis
├── README.md          # This file
└── flowchart.png      # Visual diagram
```

---

## Design Decisions

### 1. Object-Based Queue
**Why:** O(1) enqueue/dequeue vs O(n) for array.shift()

### 2. Separate Phases
**Why:** Matches requirement for separated generation/processing

### 3. Async/Await Timing
**Why:** Non-blocking delays for realistic simulation

### 4. Null Returns
**Why:** Graceful error handling without exceptions

---

## Sample Output
```
╔════════════════════════════════════╗
║  TICKETING SYSTEM SIMULATION       ║
╚════════════════════════════════════╝

=== TICKET GENERATION PHASE ===

Customer arrived: Ticket #101 (Issued: 10:30:45 AM)
  Queue size: 1
Customer arrived: Ticket #102 (Issued: 10:30:46 AM)
  Queue size: 2
...

📊 Generation complete: 8 customers waiting

=== TICKET PROCESSING PHASE ===

Now serving: Ticket #101 (Issued: 10:30:45 AM)
   Wait time: 5.32 seconds
   Remaining in queue: 7
...

All customers served! Total: 8
```




# Time and Space Complexity Analysis

## Data Structure Choice: Object-Based Queue

We use an object with front/rear pointers instead of an array for optimal performance.

### Why Not Array?
- Array `shift()` is O(n) - requires reindexing all elements
- Our object-based approach achieves O(1) for all operations

---

## Operations Complexity

### 1. takeTicket()
**Time Complexity: O(1)**
- Create ticket object: O(1)
- Assign to queue[rear]: O(1)
- Increment rear: O(1)

**Space Complexity: O(1)**
- Adds one ticket object to queue

**Code:**
```javascript
takeTicket() {
    const ticket = new Ticket(this.nextNumber++);  // O(1)
    this.queue[this.rear] = ticket;                 // O(1)
    this.rear++;                                     // O(1)
    return ticket;
}
```

---

### 2. serveCustomer()
**Time Complexity: O(1)**
- Check isEmpty: O(1)
- Access queue[front]: O(1)
- Delete queue[front]: O(1)
- Increment front: O(1)

**Space Complexity: O(1)**
- Removes one ticket from queue

**Code:**
```javascript
serveCustomer() {
    if (this.isEmpty()) return null;    // O(1)
    const served = this.queue[this.front]; // O(1)
    delete this.queue[this.front];       // O(1)
    this.front++;                         // O(1)
    return served;
}
```

---

### 3. getRemainingCount()
**Time Complexity: O(1)**
- Simple arithmetic operation

**Space Complexity: O(1)**
- No additional space used

---

### 4. isEmpty()
**Time Complexity: O(1)**
- Simple comparison operation

**Space Complexity: O(1)**
- No additional space used

---

### 5. peek()
**Time Complexity: O(1)**
- Access queue[front] directly

**Space Complexity: O(1)**
- No additional space used

---

## Overall System Complexity

### For N Customers:

**Ticket Generation Phase:**
- Time: O(n) - must generate each ticket
- Space: O(n) - stores n tickets

**Ticket Processing Phase:**
- Time: O(n) - must serve each customer
- Space: O(1) - tickets are removed

**Total:**
- Time: O(n)
- Space: O(n) - dominated by queue storage

---

## Optimization Comparison

### Array-Based Queue (Original)
```javascript
// Using array methods
serveCustomer() {
    return ticketQueue.shift(); // O(n) - BAD!
}
```
- Time: O(n) per serve operation
- For n customers: O(n²) total!

### Object-Based Queue (Optimized)
```javascript
// Using object with pointers
serveCustomer() {
    const served = queue[front]; // O(1) - GOOD!
    delete queue[front];
    front++;
    return served;
}
```
- Time: O(1) per serve operation
- For n customers: O(n) total

**Improvement: Reduced from O(n²) to O(n)**

---

## Trade-offs

### Object-Based Queue
**Pros:**
- O(1) enqueue and dequeue
- Simple implementation
- No shifting overhead

**Cons:**
- Memory not reclaimed until garbage collection
- Slightly more memory usage than array
- Front pointer keeps incrementing (but this is negligible)

**Conclusion:** The O(1) operations make this the clear winner for a queue implementation.