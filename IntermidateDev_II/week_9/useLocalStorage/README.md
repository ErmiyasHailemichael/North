# useLocalStorage — Custom React Hook

## Overview
This project builds a custom React hook called `useLocalStorage`.
It works exactly like useState but automatically saves its value to the browser's localStorage every time it changes.
That means user preferences like dark mode survive page refreshes.

## How It Works
The hook uses useState with a lazy initializer to check localStorage on first render.
If a saved value exists for the given key, it loads that. Otherwise it uses the initial value.
useEffect watches for state changes and writes the updated value back to localStorage automatically.

## Project Structure
```
src/
├── hooks/
│   ├── useLocalStorage.js        # Custom hook
│   └── useLocalStorage.test.js   # Tests
├── components/
│   └── ThemeToggle.jsx           # Dark/light mode component using the hook
├── App.jsx                       # Root component
└── setupTests.js                 # Vitest setup
```
## How to Run

### Install dependencies
```bash
npm install
```

### Start the dev server
```bash
npm run dev
```

### Run tests
```bash
npx vitest run
```

## Test Cases
| # | Test | Type |
|---|------|------|
| 1 | Returns initial value when nothing is in localStorage | Normal |
| 2 | Updates the value when the setter is called | Normal |
| 3 | Persists the value to localStorage when state changes | Normal |
| 4 | Loads existing value from localStorage on mount | Edge |
| 5 | Handles storing an object value | Edge |
| 6 | Handles storing a number value | Edge |
