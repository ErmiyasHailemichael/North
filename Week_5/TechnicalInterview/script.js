function createTicketSystem(startNumber = 101) {
    let nextNumber = startNumber;

    // Optimized queue implementation
    let queue = {};
    let front = 0;
    let rear = 0;

    function takeTicket() {
        const ticket = {
            number: nextNumber++,
            timestamp: new Date()
        };

        queue[rear] = ticket;
        rear++;

        return ticket;
    }

    function serveCustomer() {
        if (front === rear) {
            return null;
        }

        const served = queue[front];
        delete queue[front];
        front++;

        return served;
    }

    function getRemainingCount() {
        return rear - front;
    }

    function isEmpty() {
        return rear === front;
    }

    return {
        takeTicket,
        serveCustomer,
        getRemainingCount,
        isEmpty
    };
}

module.exports = createTicketSystem;
