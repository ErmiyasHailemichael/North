// Import Express
const express = require('express');

// Create Express application instance
const app = express();

// Define port 
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log('Press CTRL+C to stop the server');
});