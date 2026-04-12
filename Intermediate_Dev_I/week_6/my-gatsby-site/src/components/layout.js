import React from "react";
import "../styles/global.css";
import { Link } from "gatsby";

export default function Layout({ children }) {
  return (
    <div>
      <header style={{
        background: "#333",
        color: "#fff",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h1>
          <Link to="/" style={{ color: "#fff" }}>My Portfolio</Link>
        </h1>
        <nav style={{ display: "flex", gap: "1rem" }}>
          <Link to="/" style={{ color: "#fff" }}>Home</Link>
          <Link to="/about" style={{ color: "#fff" }}>About</Link>
        </nav>
      </header>

      <main style={{ minHeight: "80vh", padding: "2rem" }}>
        {children}
      </main>

      <footer style={{
        background: "#333",
        color: "#fff",
        textAlign: "center",
        padding: "1rem"
      }}>
        <p>© 2026 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}