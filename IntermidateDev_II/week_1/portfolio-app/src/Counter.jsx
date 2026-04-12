import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleIncrementAfterDelay() {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
  }

  function handleIncrementTwice() {
    setCount(count + 1);
    setCount(count + 1);
  }

  function handleCorrectIncrementTwice() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div className="container">
      <h1>Counter App</h1>
      <p className="subtitle">React State Management Demo</p>

      <div className="count-display">{count}</div>

      <div className="buttons">
        <button onClick={handleIncrement}>Increment</button>

        <button onClick={handleIncrementAfterDelay}>
          Increment After Delay (2s)
        </button>

        <button onClick={handleIncrementTwice}>
          Increment Twice (broken)
        </button>

        <button onClick={handleCorrectIncrementTwice}>
          Correct Increment Twice
        </button>

        <button className="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}