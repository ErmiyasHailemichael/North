// Import Express
const express = require('express');

// Create Express application instance
const app = express();

// Define port (use environment variable or default to 3000)
const port = process.env.PORT || 3000;

// ========================================
// ROUTES
// ========================================

// Route 1: Root path 
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Route 2: About path 
app.get('/about', (req, res) => {
  res.send('About page');
});

// Route 3: Conditional routing - /foo
// First handler - randomly decides what to do
app.get('/foo', (req, res, next) => {
  // Generate random number between 0 and 1
  const random = Math.random();
  
  console.log(`Random value: ${random}`); 
  
  if (random > 0.5) {
    // 50% chance - send response and stop
    res.send('sometimes this');
  } else {
    // 50% chance - pass control to next handler
    console.log('Calling next()...');
    next();
  }
});

// Route 4: Second handler for /foo
// Only runs if first handler calls next()
app.get('/foo', (req, res) => {
  res.send('and sometimes that');
});

// ========================================
// START SERVER
// ========================================

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log('Press CTRL+C to stop the server');
});