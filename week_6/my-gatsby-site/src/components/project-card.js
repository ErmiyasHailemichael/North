import React from "react";

export default function ProjectCard({ title, description, category, link }) {
  return (
    <div style={{
      padding: "1.5rem",
      border: "1px solid #ddd",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
      <h3 style={{ marginBottom: "0.5rem" }}>{title}</h3>
      <p style={{ color: "#666", marginBottom: "0.75rem" }}>{description}</p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{
          background: "#333",
          color: "#fff",
          padding: "0.2rem 0.5rem",
          borderRadius: "4px",
          fontSize: "0.8rem"
        }}>
          {category}
        </span>
        <a href={link} style={{ color: "#333", fontWeight: "bold" }}>
          View Project →
        </a>
      </div>
    </div>
  );
}