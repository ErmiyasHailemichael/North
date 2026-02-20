import { Button } from "./SharedComponents";

export const ContentB = () => {
  return (
    <div
      style={{
        background: "#1a1a2e",
        border: "2px solid #e8c84a",
        borderRadius: "8px",
        padding: "32px",
        flex: 1,
      }}
    >
      <h2
        style={{
          fontSize: "26px",
          color: "#f0f0f0",
          marginBottom: "12px",
          marginTop: "0",
        }}
      >
        Component B
      </h2>

      <p
        style={{
          fontSize: "14px",
          color: "#a0a0b0",
          lineHeight: "1.7",
          marginBottom: "24px",
        }}
      >
        This component also uses a named export.
      </p>

      <Button label="Explore" />
    </div>
  );
};