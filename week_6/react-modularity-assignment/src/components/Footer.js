const Footer = () => {
  return (
    <footer
      style={{
        background: "#1a1a2e",
        color: "#a0a0b0",
        padding: "24px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderTop: "3px solid #e8c84a",
      }}
    >
      <span>© 2025 React Modularity Assignment</span>
      <span style={{ color: "#e8c84a" }}>Built with React</span>
    </footer>
  );
};

export default Footer;