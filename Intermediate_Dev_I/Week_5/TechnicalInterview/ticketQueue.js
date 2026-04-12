const Ticket = require('./ticket');

/**
 * TicketQueue Class
 * Manages the queue of tickets using object-based queue for O(1) operations
 */
class TicketQueue {
    constructor(startNumber = 101) {
        this.nextNumber = startNumber;
        this.queue = {};
        this.front = 0;
        this.rear = 0;
    }

    /**
     * Generate a new ticket and add to queue
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     * returns {Ticket} The newly created ticket
     */
    takeTicket() {
        const ticket = new Ticket(this.nextNumber++);
        this.queue[this.rear] = ticket;
        this.rear++;
        return ticket;
    }

    /**
     * Serve the next customer in queue
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     * returns {Ticket|null} The served ticket or null if queue is empty
     */
    serveCustomer() {
        if (this.isEmpty()) {
            return null;
        }

        const served = this.queue[this.front];
        delete this.queue[this.front];
        this.front++;
        return served;
    }

    /**
     * Get count of customers waiting
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     * returns {number} Number of tickets in queue
     */
    getRemainingCount() {
        return this.rear - this.front;
    }

    /**
     * Check if queue is empty
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     * @returns {boolean} True if queue is empty
     */
    isEmpty() {
        return this.rear === this.front;
    }

    /**
     * Peek at next ticket without removing
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     * returns {Ticket|null} Next ticket or null
     */
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.queue[this.front];
    }
}

module.exports = TicketQueue;