# useWindowSize — Custom React Hook

## Overview
This project builds a custom React hook called `useWindowSize`.
It tracks the browser window's width and height in real time and switches between a mobile and desktop layout automatically.

Built for a streaming site scenario — compact layout on phones, full layout on laptops.

## How It Works
The hook uses `useState` to store the window dimensions and `useEffect` to listen for resize events.
When the window is resized, the state updates and the component re-renders with the new layout.
When the component unmounts, the event listener is cleaned up automatically.
```
## Project Structure
src/
├── hooks/
│   ├── useWindowSize.js         # Custom hook
│   └── useWindowSize.test.js    # Tests
├── components/
│   └── StreamingLayout.jsx      # Layout component using the hook
├── App.jsx                      # Root component
└── setupTests.js                # Vitest setup
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
| 1 | Returns correct width and height on initial render | Normal |
| 2 | Updates dimensions when window is resized | Normal |
| 3 | Detects mobile breakpoint when width is below 768px | Normal |
| 4 | Handles width of exactly 768px (boundary) | Edge |
| 5 | Handles very small window size (1 x 1) | Edge |
| 6 | Handles very large window size (3840 x 2160) | Edge |

## Breakpoint
| Width | Layout |
|-------|--------|
| Below 768px | Mobile — compact view |
| 768px and above | Desktop — full-sized view |
