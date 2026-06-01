# Week 9 — Dynamic Poll Dashboard with Chart.js

A React component that integrates the Chart.js library using useEffect to build a real-time voting dashboard.

## What it does

- Displays a poll for "Favorite JavaScript Framework" with four options
- Clicking Vote updates React state and the Chart.js bar chart in real time
- Uses useRef to store the canvas element and the chart instance
- Destroys the chart on unmount to prevent memory leaks

## Key useEffect concepts demonstrated

| Concept | Where |
|---|---|
| Imperative instantiation | Creates new Chart() on first render |
| State synchronization | Updates chart.data and calls .update() on re-renders |
| Cleanup execution | Calls .destroy() on unmount |
| Dependency array | [votes] — effect runs every time votes changes |

## How to run

```bash
npm install
npm run dev
```

Then open http://localhost:5173 and click the vote buttons.

## How to run tests

```bash
npm test
```

## Test cases

| ID | Type | What it checks |
|---|---|---|
| TC-N1 | Normal | All four frameworks render on screen |
| TC-N2 | Normal | All vote counts start at zero |
| TC-N3 | Normal | Clicking vote increases that framework's count by 1 |
| TC-E1 | Edge | Voting for one framework does not affect others |
| TC-E2 | Edge | Clicking multiple times keeps accumulating |
| TC-E3 | Edge | Canvas element is present in the DOM |