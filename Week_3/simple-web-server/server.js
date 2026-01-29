import http from 'http';
import fs from 'fs/promises';

// Define the hostname and port
const hostname = 'localhost';
const port = process.env.PORT || 3000;

// Create the HTTP server with a request handler function
const server = http.createServer(async (req, res) => {
    console.log(`Received request for: ${req.url}`);

    // Handle different routes
    if (req.url === '/') {
        // Home page route
        try {
            const data = await fs.readFile('./home.html', 'utf8');
            res.setHeader('Content-Type', 'text/html');
            res.writeHead(200);
            res.end(data);
        } catch (error) {
            console.error('Error reading home.html:', error);
            res.writeHead(500);
            res.end('Internal Server Error');
        }
    } else if (req.url === '/about') {
        // About page route
        res.setHeader('Content-Type', 'text/plain');
        res.writeHead(200);
        res.end('This is the About page. Welcome to my simple web server!');
    }
    // Step 5: Handle 404 Responses 
    else {
        // 404 - Route not found
        res.setHeader('Content-Type', 'text/plain');
        res.writeHead(404);
        res.end('404 - Page Not Found');
    }
});
// Start listening for connections
server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});