export const Button = ({ label }) => {
  return (
    <button
      style={{
        background: "#1a1a2e",
        color: "#e8c84a",
        border: "2px solid #e8c84a",
        padding: "10px 24px",
        fontSize: "14px",
        cursor: "pointer",
        borderRadius: "4px",
      }}
    >
      {label}
    </button>
  );
};