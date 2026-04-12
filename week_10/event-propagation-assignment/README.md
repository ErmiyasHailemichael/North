# Event Propagation Assignment — Week 10

A React + Vite project demonstrating **event bubbling** and how to stop it using `event.stopPropagation()`.

## 🧠 Concept

When you click an element inside a parent container, the click event naturally "bubbles up" to the parent — triggering both handlers. This project shows how to isolate the inner button's click so it does **not** trigger the outer container's handler.

## 🛠 Tech Stack

- React 18
- Vite
- Node.js built-in test runner

## 🚀 How to Run

1. Clone the repo and navigate into the project folder:
```bash
   cd event-propagation-assignment
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
node --test src/NestedButtons.test.js
```

## ✅ Test Cases

**Normal Cases:**
1. Inner click stops propagation
2. Outer click does not stop propagation
3. `stopPropagation` exists on the event object

**Edge Cases:**
4. Calling `stopPropagation` twice does not throw
5. `propagationStopped` starts as `false` before any handler runs
6. Inner and outer events are independent objects

## 🎯 How It Works

- Clicking the **blue outer container** → fires only the outer alert
- Clicking the **red inner button** → fires only the inner alert (propagation is stopped)

