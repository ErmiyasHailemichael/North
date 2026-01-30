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

// ========================================
// START SERVER
// ========================================

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log('Press CTRL+C to stop the server');
});