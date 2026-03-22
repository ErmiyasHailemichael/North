# Dynamic Alert Buttons with Props — Week 10

A React + Vite project demonstrating **dynamic rendering** using `.map()`, the **key prop**, and **props** passed from an array of data.

## 🧠 Concept

Instead of hardcoding each button, the `Toolbar` component holds an array of button objects and uses `.map()` to render an `AlertButton` for each one. Adding a new button is as simple as adding a new object to the array.

## 🛠 Tech Stack

- React 18
- Vite
- Node.js built-in test runner

## 🚀 How to Run

1. Navigate into the project folder:
```bash
   cd dynamic-toolbar-assignment
```
2. Install dependencies:
```bash
   npm install
```
3. Start the dev server:
```bash
   npm run dev
```
4. Open your browser at `http://localhost:5173`

## 🧪 How to Run Tests
```bash
node --test src/Toolbar.test.js
```

## ✅ Test Cases

**Normal Cases:**
1. Download button returns correct message
2. Share button returns correct message
3. All four buttons are rendered from the array

**Edge Cases:**
4. Every button has a non-empty message
5. Every button has a non-empty children label
6. All button messages are unique

## 🎯 How It Works

- `buttons` array in `Toolbar.jsx` holds all button data as objects
- `.map()` iterates over the array and returns an `AlertButton` for each item
- Each `AlertButton` receives `message` and `children` as props
- The `key` prop uses the array index to uniquely identify each rendered element

## YouTube
[YouTube](https://youtu.be/VbN3FYVCWn0)