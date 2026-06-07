import useLocalStorage from "../hooks/useLocalStorage";

function ThemeToggle() {
  // Works just like useState but survives page refreshes
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const isDark = theme === "dark";

  return (
    <div style={isDark ? styles.darkContainer : styles.lightContainer}>
      <h1 style={styles.title}>⚙️ User Preferences</h1>
      <p style={isDark ? styles.darkText : styles.lightText}>
        Current theme: <strong>{theme}</strong>
      </p>

      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        style={isDark ? styles.darkButton : styles.lightButton}
      >
        Switch to {isDark ? "Light" : "Dark"} Mode
      </button>

      <p style={isDark ? styles.darkHint : styles.lightHint}>
        Try refreshing the page — your preference is saved.
      </p>
    </div>
  );
}

const styles = {
  darkContainer: {
    backgroundColor: "#1a1a1a",
    color: "white",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "sans-serif",
    transition: "all 0.3s ease",
  },
  lightContainer: {
    backgroundColor: "#f5f5f5",
    color: "#1a1a1a",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "sans-serif",
    transition: "all 0.3s ease",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  darkText: { color: "#ccc", fontSize: "1.1rem", marginBottom: "1.5rem" },
  lightText: { color: "#333", fontSize: "1.1rem", marginBottom: "1.5rem" },
  darkButton: {
    backgroundColor: "#f5f5f5",
    color: "#1a1a1a",
    border: "none",
    padding: "0.8rem 2rem",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",
    fontWeight: "bold",
  },
  lightButton: {
    backgroundColor: "#1a1a1a",
    color: "white",
    border: "none",
    padding: "0.8rem 2rem",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",
    fontWeight: "bold",
  },
  darkHint: { color: "#888", fontSize: "0.85rem", marginTop: "1.5rem" },
  lightHint: { color: "#888", fontSize: "0.85rem", marginTop: "1.5rem" },
};

export default ThemeToggle;
