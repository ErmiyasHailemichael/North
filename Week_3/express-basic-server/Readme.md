# Express Basic Server

A Node.js web server built with Express.js demonstrating fundamental routing concepts including basic routes, conditional routing, regular expressions, dynamic parameters, query strings, and error handling.

## Author

**Ermiyas Hailemichael**  
Week 3 Assignment - Intermediate Dev

## Project Description

This project implements a basic Express server that demonstrates various routing techniques and patterns commonly used in modern web applications. The server handles different types of HTTP requests and showcases Express.js routing capabilities.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [API Routes](#api-routes)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [Console Output](#console-output)
- [Key Concepts Demonstrated](#key-concepts-demonstrated)
- [Environment Variables](#environment-variables)
- [NPM Scripts](#npm-scripts)
- [Learning Outcomes](#learning-outcomes)
- [Troubleshooting](#troubleshooting)
- [Repository](#repository)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

This server implements all required assignment features:

- Basic routing with static paths
- Conditional routing with `next()` middleware
- Regular expression route matching
- Dynamic route parameters
- Query string parameter handling
- 404 error handling for undefined routes
- Console logging for debugging

## Technologies Used

- **Node.js** v18.20.8
- **Express.js** v5.x
- **npm** v10.8.2

## Installation

### Prerequisites

- Node.js (v18 or higher)
- npm (v10 or higher)

### Setup Instructions

1. Clone or navigate to the project directory:
```bash
cd express-basic-server
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. For development with auto-restart:
```bash
npm run dev
```

The server will start on `http://localhost:3000` (or the port specified in the `PORT` environment variable).

## API Routes

### 1. Root Route

**Endpoint:** `GET /`

**Description:** Returns a simple "Hello World" message.

**Response:**
```
Hello World
```

---

### 2. About Route

**Endpoint:** `GET /about`

**Description:** Returns information about the page.

**Response:**
```
About page
```

---

### 3. Conditional Routing - Foo

**Endpoint:** `GET /foo`

**Description:** Demonstrates conditional routing using `next()`. Randomly returns one of two responses.

**Behavior:**
- 50% chance: Returns "sometimes this"
- 50% chance: Calls `next()` and returns "and sometimes that"

**Possible Responses:**
```
sometimes this
```
or
```
and sometimes that
```

**Technical Details:**
- Uses `Math.random()` to generate random behavior
- Demonstrates multiple route handlers for the same path
- Shows proper use of `next()` to pass control between handlers

---

### 4. Regular Expression Route

**Endpoint:** `GET /user` or `GET /username`

**Description:** Uses regular expression pattern to match multiple URL variations.

**Pattern:** `/\/user(name)?$/`
- Matches `/user` (without "name")
- Matches `/username` (with "name")
- Does NOT match `/users`, `/user/john`, etc.

**Response:**
```
Matched: /user
```
or
```
Matched: /username
```

---

### 5. Dynamic Route with Parameters

**Endpoint:** `GET /user/:username`

**Description:** Captures username from URL and returns personalized greeting.

**Parameters:**
- `:username` - Any value in the URL path

**Responses:**
```
Hello john
Hello sarah
Hello ermi
```

**Technical Details:**
- Uses route parameters (`:username`)
- Accesses parameter via `req.params.username`
- Works with any username value

---

### 6. Query String Handling

**Endpoint:** `GET /get`

**Description:** Accepts and displays query string parameters.

**Query Parameters:** Any key-value pairs

**Examples:**

Single parameter:

Response:
```
Query parameters: {"name":"john"}
```

Multiple parameters:

Response:
```
Query parameters: {"name":"john","age":"25","city":"Seattle"}
```

No parameters:

Response:
```
Query parameters: {}
```

**Technical Details:**
- Accesses query parameters via `req.query`
- Logs all parameters to console
- Returns JSON string of query object

---

### 7. 404 Error Handler

**Endpoint:** Any undefined route

**Description:** Catches all requests that don't match any defined route and returns a 404 error.

**Response:**
```
404 - Not Found
```

**HTTP Status Code:** 404

**Technical Details:**
- Uses `app.use()` middleware (no path specified)
- Placed after all other routes
- Logs 404 errors to console with method and URL

## Project Structure
```
express-basic-server/
├── server.js           # Main application file
├── package.json        # Project dependencies and scripts
├── package-lock.json   # Locked dependency versions
├── README.md          # This file
└── node_modules/      # Installed dependencies
```

## Testing

### Manual Testing

### Browser Testing

Open these URLs in your browser:

- http://localhost:3000/
- http://localhost:3000/about
- http://localhost:3000/foo (refresh multiple times)
- http://localhost:3000/user
- http://localhost:3000/username
- http://localhost:3000/user/john
- http://localhost:3000/get?name=test&age=25
- http://localhost:3000/nonexistent

## Console Output

The server logs various events to the console:

- Server startup message
- Random values for `/foo` route
- Query parameters received for `/get` route
- 404 errors with method and URL

**Example console output:**
```
Server is running on http://localhost:3000
Press CTRL+C to stop the server
Random value: 0.7234
Query parameters received:
{ name: 'john', age: '25' }
404 - Route not found: GET /nonexistent
```

## Key Concepts Demonstrated

### 1. Basic Routing
Simple static routes that return plain text responses.

### 2. Route Methods
Using different HTTP methods (GET, POST, etc.) with Express.

### 3. Middleware with `next()`
Passing control between multiple route handlers using the `next()` function.

### 4. Regular Expressions
Pattern matching in routes using regex for flexible URL matching.

### 5. Route Parameters
Capturing dynamic values from URL paths using `:paramName` syntax.

### 6. Query Strings
Accessing URL query parameters using `req.query`.

### 7. Error Handling
Implementing catch-all 404 handlers for undefined routes.

### 8. Middleware Order
Understanding that Express processes routes in order and the importance of placing error handlers last.

## Environment Variables

The server supports the following environment variables:

- `PORT` - The port number for the server (default: 3000)

**Usage:**
```bash
PORT=8080 npm start
```

## NPM Scripts

Defined in `package.json`:

- `npm start` - Start the server with Node.js
- `npm run dev` - Start with nodemon for auto-restart on file changes

## Learning Outcomes

This project demonstrates understanding of:

1. Express.js framework fundamentals
2. HTTP request/response cycle
3. Route definition and organization
4. Middleware concepts and `next()` function
5. Regular expression pattern matching
6. Dynamic route parameters
7. Query string parameter handling
8. Error handling and status codes
9. Console logging for debugging
10. Project initialization and dependency management

## Troubleshooting

### Server won't start

**Problem:** Port already in use
**Solution:** Either stop the other process or use a different port:
```bash
PORT=8080 npm start
```

### Routes not working

**Problem:** Changes not reflected
**Solution:** 
- If using `npm start`: Restart the server (CTRL+C, then `npm start`)
- If using `npm run dev`: Should auto-restart (check if nodemon is installed)

### 404 for valid routes

**Problem:** Route order issue
**Solution:** Make sure the 404 handler is placed AFTER all other routes in `server.js`

## Repository

GitHub: https://github.com/ErmiyasHailemichael/North/tree/main/Week_3/express-basic-server

## License

ISC

## Acknowledgments

- Express.js documentation: https://expressjs.com/
- Node.js documentation: https://nodejs.org/
- YouTube Tutorial: [Express.js Routing Basics](https://youtu.be/cfOOTbbxMUI)