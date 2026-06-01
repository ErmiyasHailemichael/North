# Week 8 — Responsive Card with useEffect

A React component that listens to the browser window size in real time using the `useEffect` hook.

## What it does

- Displays the current window width and height live on screen
- Switches between **Mobile** (below 768px) and **Desktop** (768px or wider) modes
- Changes background color and layout direction at the breakpoint
- Cleans up the resize event listener on unmount to prevent memory leaks

## How to run

```bash
npm install
npm run dev
```

Then open http://localhost:5173 and resize your browser window.

## How to run tests

```bash
npm test
```

## Test cases

| ID | Type | What it checks |
|---|---|---|
| TC-N1 | Normal | Shows Desktop mode when width is above 768px |
| TC-N2 | Normal | Shows Mobile mode when width is below 768px |
| TC-N3 | Normal | Dimensions update live when window is resized |
| TC-E1 | Edge | 767px is treated as Mobile |
| TC-E2 | Edge | 768px is treated as Desktop |
| TC-E3 | Edge | Event listener is removed on unmount |