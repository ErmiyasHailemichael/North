# Counter App — React State Management

A simple React application built for the Intermediate Development II course. This project demonstrates state management using the `useState` hook, including asynchronous state updates, React's batching behavior, and the concept of state as a snapshot.

## How to Run

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Features

| Button | Description |
|---|---|
| **Increment** | Increases the count by 1 using `setCount(count + 1)` |
| **Increment After Delay** | Increases the count by 1 after a 2-second delay using `setTimeout`. Demonstrates that the state value is captured as a snapshot at the time the button is clicked |
| **Increment Twice (broken)** | Calls `setCount(count + 1)` twice in a row. Due to React's batching, the count only increases by 1, not 2 |
| **Correct Increment Twice** | Uses the updater function `setCount(prev => prev + 1)` twice. Correctly increases the count by 2 |
| **Reset** | Resets the count back to 0 |

## Concepts Demonstrated

- `useState` hook for managing local component state
- State as a snapshot — each render captures its own version of state
- Asynchronous state updates — state does not update immediately after calling the setter
- React batching — multiple `setState` calls in one event handler are batched into a single re-render
- Updater functions — using `prev => prev + 1` to safely depend on the previous state value

## Test Cases

### Normal Cases
1. **Basic increment** — click Increment once → count goes from 0 to 1
2. **Correct Increment Twice** — click once → count increases by exactly 2
3. **Reset** — increment a few times then click Reset → count returns to 0

### Edge Cases
1. **Increment Twice (broken)** — click once → count only increases by 1, not 2, due to batching
2. **Snapshot with delay** — click Increment After Delay, then click Increment 3 times before the 2 seconds are up. The delayed update fires using the old snapshot value, not the current count
3. **Multiple delays stacked** — click Increment After Delay 3 times rapidly → all three timers captured the same snapshot so the count only goes up by 1, not 3

## Built With

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)


## Video
[Video](https://youtu.be/S48KNrrnR1M)

## Author

Ermiya Hailemichael — Intermediate Development II