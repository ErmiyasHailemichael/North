# Dog Facts API v1 Replica

## Overview

This project is a simplified replica of the Dog Facts API (v1), built using **Node.js** and **Express.js**.

The API allows users to retrieve random dog facts in JSON format, with support for query parameters and raw text responses.

This project demonstrates:

* REST API development with Express
* Query parameter handling
* Input validation
* Error handling
* Modular project structure
* Professional API response formatting

---

## 🚀 Features

### ✅ GET /facts

Returns random dog facts.

### Query Parameters

| Parameter | Type    | Description                                 |
| --------- | ------- | ------------------------------------------- |
| number    | integer | Number of facts to return (max 5)           |
| limit     | integer | Alias for number                            |
| raw       | boolean | If true, returns plain text instead of JSON |

---

## 📥 Example Requests

### Get all facts

```
GET /facts
```

### Get 2 random facts

```
GET /facts?number=2
```

### Using alias

```
GET /facts?limit=3
```

### Raw text response

```
GET /facts?number=1&raw=true
```

---

## 📤 Example JSON Response

```json
{
  "facts": [
    "A group of pugs is called a grumble."
  ],
  "success": true
}
```

---

## ❌ Example Error Response

```json
{
  "success": false,
  "error": "Query parameter 'number' must be a positive integer."
}
```

Status Code: 400

---

## 🛠 Technologies Used

* Node.js
* Express.js
* JavaScript (ES6)

---

## 📂 Project Structure

```
dog-facts-api/
│
├── server.js
├── dog_facts.js
├── package.json
└── README.md
```

---

## ▶️ How to Run the Project

### 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd dog-facts-api
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Server

```bash
node server.js
```

Server runs at:

```
http://localhost:3000
```

---

## 🧪 Testing the API

Open in browser or Postman:

```
http://localhost:3000/facts
```

