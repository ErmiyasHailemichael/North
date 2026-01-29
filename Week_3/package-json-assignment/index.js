// Import Express (a dependency)
const express = require('express');
const app = express();
const port = 3000;

console.log("Welcome to Package.json Exploration!");
console.log("Author: Ermiyas");
console.log("This project demonstrates package.json configuration");

// Create a simple route
app.get('/', (req, res) => {
  res.send('Hello! This app uses Express from dependencies!');
});

app.listen(port, () => {
  console.log(`\nExpress server running at http://localhost:${port}`);
  console.log('Press CTRL+C to stop the server');
});