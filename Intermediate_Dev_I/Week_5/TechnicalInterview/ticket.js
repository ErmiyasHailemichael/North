/**
 * Ticket Class
 * Represents a customer ticket in the queue system
 */
class Ticket {
    constructor(number) {
        this.number = number;
        this.timestamp = new Date();
    }

    getFormattedTime() {
        return this.timestamp.toLocaleTimeString();
    }

    getWaitTime() {
        return Date.now() - this.timestamp.getTime();
    }

    toString() {
        return `Ticket #${this.number} (Issued: ${this.getFormattedTime()})`;
    }
}

module.exports = Ticket;