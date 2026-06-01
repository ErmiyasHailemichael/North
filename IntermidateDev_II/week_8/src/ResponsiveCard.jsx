import { useState, useEffect } from "react";

export default function ResponsiveCard() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const isMobile = windowSize.width < 768;

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  // We use an empty array because handleResize doesn't depend on any
  // props or state. Without this array, the effect would re-run on every
  // render, adding a new event listener each time and causing a memory leak.
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f4f4f0",
    }}>
      <div data-testid="responsive-card" style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        gap: isMobile ? "12px" : "32px",
        backgroundColor: isMobile ? "#FAEEDA" : "#E6F1FB",
        border: `2px solid ${isMobile ? "#EF9F27" : "#378ADD"}`,
        borderRadius: "12px",
        padding: "32px 40px",
        transition: "all 0.3s",
      }}>
        <div style={{ textAlign: "center" }}>
          <span data-testid="breakpoint-badge" style={{
            backgroundColor: isMobile ? "#EF9F27" : "#378ADD",
            color: "#fff",
            padding: "4px 14px",
            borderRadius: "999px",
            fontSize: "12px",
            fontWeight: "600",
          }}>
            {isMobile ? "Mobile" : "Desktop"}
          </span>
          <p style={{ marginTop: "8px", fontSize: "13px" }}>
            {isMobile ? "Below 768px" : "768px or wider"}
          </p>
        </div>
        <div>
          <p>Width: <strong data-testid="width-display">{windowSize.width}px</strong></p>
          <p>Height: <strong data-testid="height-display">{windowSize.height}px</strong></p>
        </div>
      </div>
    </div>
  );
}