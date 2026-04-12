function AlertButton({ message, children }) {
  return (
    <button
      onClick={() => alert(message)}
      style={{
        backgroundColor: "#2ecc71",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "8px",
        fontSize: "16px",
        cursor: "pointer",
        margin: "8px",
      }}
    >
      {children}
    </button>
  );
}

export default AlertButton;