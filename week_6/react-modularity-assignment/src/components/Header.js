const Header = () => {
  return (
    <header
      style={{
        background: "#1a1a2e",
        padding: "20px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "3px solid #e8c84a",
      }}
    >
      <h1
        style={{
          color: "#f0f0f0",
          fontSize: "20px",
          fontWeight: "600",
          margin: "0",
        }}
      >
        React Modularity
      </h1>
    </header>
  );
};

export default Header;