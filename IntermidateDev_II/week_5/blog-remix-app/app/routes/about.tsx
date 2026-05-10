export default function About() {
  return (
    <div style={{ padding: "40px 20px", maxWidth: "700px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "16px" }}>About This Blog</h1>
      <p style={{ color: "#555", lineHeight: "1.7", marginBottom: "16px" }}>
        This blog is a multi-page React Router application built as part of an
        Intermediate Development II course. It demonstrates file-based routing,
        dynamic routes, and persistent layout using the Outlet pattern.
      </p>
      <p style={{ color: "#555", lineHeight: "1.7" }}>
        Posts cover topics like React Router, state management, and the future
        of web development.
      </p>
    </div>
  );
}