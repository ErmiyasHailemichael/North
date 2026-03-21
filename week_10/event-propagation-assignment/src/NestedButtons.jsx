function NestedButtons() {
  const handleOuterClick = () => {
    alert("Outer container clicked!");
  };

  const handleInnerClick = (e) => {
    e.stopPropagation();
    alert("Inner button clicked!");
  };

  return (
    <div
      onClick={handleOuterClick}
      style={{
        backgroundColor: "#4a90d9",
        padding: "60px",
        borderRadius: "12px",
        textAlign: "center",
        cursor: "pointer",
      }}
    >
      <p style={{ color: "white", marginBottom: "20px" }}>
        I am the Outer Container — click me!
      </p>

      <button
        onClick={handleInnerClick}
        style={{
          backgroundColor: "#e74c3c",
          color: "white",
          padding: "12px 24px",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        I am the Inner Button
      </button>
    </div>
  );
}

export default NestedButtons;