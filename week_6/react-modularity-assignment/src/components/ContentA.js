import { Button } from "./SharedComponents";

export const ContentA = () => {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "2px solid #1a1a2e",
        borderRadius: "8px",
        padding: "32px",
        flex: 1,
      }}
    >
      <h2
        style={{
          fontSize: "26px",
          color: "#1a1a2e",
          marginBottom: "12px",
          marginTop: "0",
        }}
      >
        Component A
      </h2>

      <p
        style={{
          fontSize: "14px",
          color: "#555",
          lineHeight: "1.7",
          marginBottom: "24px",
        }}
      >
        This component uses a named export.
      </p>

      <Button label="Learn More" />
    </div>
  );
};