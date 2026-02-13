Perfect — let’s create a clean, professional `README.md` for your repository 👌

You can copy this directly into your `README.md` file.

---

# 🐶 Dog API Fetch Project

## 📌 Project Overview

This project demonstrates how to use the **JavaScript Fetch API** to retrieve and display data from the Dog API.

The application allows users to:

* Fetch and display a list of dog breeds
* Click a breed to view detailed information
* Fetch random dog facts
* Fetch and display dog groups

The project focuses on:

* Making HTTP requests using `fetch()`
* Handling API responses
* Error handling
* Dynamically updating the DOM
* Working with JSON data

---

## 🚀 Features

### ✅ Fetch Dog Breeds

* Sends a GET request to:

  ```
  https://dogapi.dog/api/v2/breeds
  ```
* Displays breed names in a clickable list.

### ✅ Breed Details

* When a breed is clicked:

  * Fetches detailed information using `/breeds/{id}`
  * Displays:

    * Name
    * Description
    * Life span
    * Weight range
    * Hypoallergenic status

### ✅ Dog Facts

* Fetches up to 3 random dog facts using:

  ```
  /facts?limit=3
  ```

### ✅ Dog Groups

* Fetches dog groups using:

  ```
  /groups
  ```

### ✅ Error Handling

* Checks `response.ok`
* Throws errors for bad responses
* Catches network errors
* Displays alerts when requests fail

---

## 🛠 Technologies Used

* HTML5
* JavaScript (ES6+)
* Fetch API
* Dog API ([https://dogapi.dog](https://dogapi.dog))

---

## 📂 Project Structure

```
dog-api-project/
│
├── index.html
├── script.js
└── README.md
```

---

## ▶️ How to Run the Project

### Option 1: Open Directly in Browser

1. Download or clone the repository
2. Open `index.html` in your web browser
3. Click the buttons to interact with the API

### Option 2 (Recommended): Use Live Server

If using VS Code:

1. Install the **Live Server** extension
2. Right-click `index.html`
3. Select **"Open with Live Server"**

---

## 🌐 API Endpoints Used

| Feature       | Endpoint         |
| ------------- | ---------------- |
| List Breeds   | `/breeds`        |
| Breed Details | `/breeds/{id}`   |
| Facts         | `/facts?limit=3` |
| Groups        | `/groups`        |

Base URL:

```
https://dogapi.dog/api/v2
```

---
