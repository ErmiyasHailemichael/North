// Import Express
const express = require('express');

// Create Express application instance
const app = express();

// Define port 
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

// Route 3 & 4: Conditional routing with /foo
app.get('/foo', (req, res, next) => {
  const random = Math.random();
  console.log(`Random value: ${random}`);
  
  if (random > 0.5) {
    res.send('sometimes this');
  } else {
    console.log('Calling next()...');
    next();
  }
});

app.get('/foo', (req, res) => {
  res.send('and sometimes that');
});

// Route 5: Regular expression route
app.get(/\/user(name)?$/, (req, res) => {
  res.send('Matched: ' + req.path);
});

// Route 6: Dynamic route with parameter
app.get('/user/:username', (req, res) => {
  const username = req.params.username;
  res.send(`Hello ${username}`);
});

// Route 7: Query string handling
app.get('/get', (req, res) => {
  // Log query parameters to console
  console.log('Query parameters received:');
  console.log(req.query);
  
  // Send response showing the query parameters
  res.send(`Query parameters: ${JSON.stringify(req.query)}`);
});

// ========================================
// START SERVER
// ========================================

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log('Press CTRL+C to stop the server');
});