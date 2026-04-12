import React from "react";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ marginBottom: "1.5rem" }}>About Me</h2>

        {/* Bio Section */}
        <div style={{
          padding: "2rem",
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          marginBottom: "1.5rem"
        }}>
          <h3 style={{ marginBottom: "0.75rem" }}>Who I Am</h3>
          <p style={{ color: "#666" }}>
            I am a passionate web developer with experience in building modern 
            web and mobile applications. I love working with React, Node.js, 
            and exploring new technologies.
          </p>
        </div>

        {/* Skills Section */}
        <div style={{
          padding: "2rem",
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          marginBottom: "1.5rem"
        }}>
          <h3 style={{ marginBottom: "0.75rem" }}>Skills</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {["React", "Node.js", "JavaScript", "TypeScript", "Gatsby", "Next.js", "Express.js", "GraphQL"].map((skill) => (
              <span key={skill} style={{
                background: "#333",
                color: "#fff",
                padding: "0.3rem 0.75rem",
                borderRadius: "4px",
                fontSize: "0.9rem"
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div style={{
          padding: "2rem",
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}>
          <h3 style={{ marginBottom: "0.75rem" }}>Contact</h3>
          <p style={{ color: "#666" }}>
            Feel free to reach out at contact@myportfolio.com
          </p>
        </div>
      </div>
    </Layout>
  );
}