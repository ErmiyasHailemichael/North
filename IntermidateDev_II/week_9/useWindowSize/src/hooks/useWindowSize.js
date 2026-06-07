import { useState, useEffect } from "react";

// Custom hook that tracks the browser window's width and height
function useWindowSize() {
  // Initialize state with the current window dimensions
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Handler that updates state whenever the window is resized
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Attach the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty array = run once on mount

  return windowSize;
}

export default useWindowSize;
