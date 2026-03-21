# Custom Alert Buttons in React — Week 10

A React + Vite project demonstrating **props**, the **children prop**, and **event handlers** through a reusable `AlertButton` component housed inside a `Toolbar`.

## 🧠 Concept

Each `AlertButton` accepts two props:
- `message` — the text shown in the browser alert when clicked
- `children` — the visible label rendered inside the button

This pattern makes the component fully reusable — the same component powers every button in the toolbar with different behavior.

## 🛠 Tech Stack

- React 18
- Vite
- Node.js built-in test runner

## 🚀 How to Run

1. Clone the repo and navigate into the project folder:
```bash
   cd alert-button-toolbar
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
node --test src/AlertButton.test.js
```

## ✅ Test Cases

**Normal Cases:**
1. Play button returns correct message on click
2. Upload button returns correct message on click
3. Volume button returns correct message on click

**Edge Cases:**
4. Button with empty message returns empty string
5. Button `children` prop renders correctly
6. Two buttons with same children but different messages stay independent

## 🎯 How It Works

- `AlertButton` — reusable button component that takes `message` and `children` as props
- `Toolbar` — renders multiple `AlertButton` components, each with unique props
- Clicking any button triggers `alert(message)` with that button's specific message