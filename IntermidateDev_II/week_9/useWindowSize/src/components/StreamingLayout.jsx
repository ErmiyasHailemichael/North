import useWindowSize from "../hooks/useWindowSize";

// Breakpoint: anything under 768px is considered mobile
const MOBILE_BREAKPOINT = 768;

function StreamingLayout() {
  const { width, height } = useWindowSize();
  const isMobile = width < MOBILE_BREAKPOINT;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>StreamZone</h1>

      {/* Show current window dimensions */}
      <p style={styles.dimensions}>
        Window: {width} x {height}
      </p>

      {/* Switch layout based on screen width */}
      {isMobile ? (
        <div style={styles.mobileLayout}>
          <h2>📱 Mobile Layout</h2>
          <p>Compact view for phone screens.</p>
          <div style={styles.mobilePlayer}>▶ Now Playing</div>
        </div>
      ) : (
        <div style={styles.desktopLayout}>
          <h2>🖥️ Desktop Layout</h2>
          <p>Full-sized view for laptop and desktop screens.</p>
          <div style={styles.desktopPlayer}>▶ Now Playing (Full Screen)</div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "sans-serif",
    textAlign: "center",
    padding: "2rem",
    backgroundColor: "#0f0f0f",
    minHeight: "100vh",
    color: "white",
  },
  title: {
    fontSize: "2rem",
    color: "#e50914",
    marginBottom: "0.5rem",
  },
  dimensions: {
    color: "#aaa",
    fontSize: "0.9rem",
    marginBottom: "2rem",
  },
  mobileLayout: {
    backgroundColor: "#1a1a1a",
    borderRadius: "12px",
    padding: "1.5rem",
    maxWidth: "360px",
    margin: "0 auto",
  },
  mobilePlayer: {
    backgroundColor: "#e50914",
    borderRadius: "8px",
    padding: "1rem",
    marginTop: "1rem",
    fontWeight: "bold",
  },
  desktopLayout: {
    backgroundColor: "#1a1a1a",
    borderRadius: "12px",
    padding: "2.5rem",
    maxWidth: "900px",
    margin: "0 auto",
  },
  desktopPlayer: {
    backgroundColor: "#e50914",
    borderRadius: "8px",
    padding: "2rem",
    marginTop: "1.5rem",
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
};

export default StreamingLayout;
