const TicketQueue = require('./ticketQueue');

/**
 * Ticketing System Simulation
 * Demonstrates ticket generation and processing with timing
 */

// Helper function to pause execution
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Get random interval between min and max milliseconds
function getRandomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Phase 1: Generate Tickets
 * Simulates customers arriving at random intervals
 */
async function generateTickets(queue, count) {
    console.log('\n=== TICKET GENERATION PHASE ===\n');
    
    for (let i = 0; i < count; i++) {
        const ticket = queue.takeTicket();
        console.log(`Customer arrived: ${ticket.toString()}`);
        console.log(`  Queue size: ${queue.getRemainingCount()}`);
        
        // Random arrival interval (500-1500ms)
        if (i < count - 1) {
            const interval = getRandomInterval(500, 1500);
            await sleep(interval);
        }
    }
    
    console.log(`\nGeneration complete: ${queue.getRemainingCount()} customers waiting\n`);
}

/**
 * Phase 2: Process Tickets
 * Serves customers with varying service times
 */
async function processTickets(queue) {
    console.log('=== TICKET PROCESSING PHASE ===\n');
    
    let served = 0;
    
    while (!queue.isEmpty()) {
        const ticket = queue.serveCustomer();
        served++;
        
        const waitTime = ticket.getWaitTime();
        console.log(`Now serving: ${ticket.toString()}`);
        console.log(`   Wait time: ${(waitTime / 1000).toFixed(2)} seconds`);
        console.log(`   Remaining in queue: ${queue.getRemainingCount()}`);
        
        // Random service time (800-2000ms)
        const serviceTime = getRandomInterval(800, 2000);
        await sleep(serviceTime);
    }
    
    console.log(`\nAll customers served! Total: ${served}\n`);
}

/**
 * Run the complete simulation
 */
async function runSimulation() {
    console.log('╔════════════════════════════════════╗');
    console.log('║  TICKETING SYSTEM SIMULATION       ║');
    console.log('╚════════════════════════════════════╝');
    
    const queue = new TicketQueue(101);
    const customerCount = 8;
    
    // Phase 1: Generate tickets
    await generateTickets(queue, customerCount);
    
    // Small pause between phases
    await sleep(1000);
    
    // Phase 2: Process tickets
    await processTickets(queue);
    
    console.log('Simulation complete!');
}

// Run if executed directly
if (require.main === module) {
    runSimulation().catch(console.error);
}

module.exports = { runSimulation, generateTickets, processTickets };