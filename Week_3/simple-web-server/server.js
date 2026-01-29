import http from 'http';
import fs from 'fs/promises'

// define host and port
const host = 'localhost';
const port = process.env.PORT || 3000;
// create the HTTP server
const server = http.createServer(async (req, res) => {
    
    console.log(`Received request for ${req.url}`);
});
