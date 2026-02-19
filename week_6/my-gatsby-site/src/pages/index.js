import React from "react";
import Layout from "../components/layout";
import ProjectCard from "../components/project-card";

const projects = [
  {
    title: "Weather Dashboard",
    description: "A weather app that fetches real-time data from a public API and displays forecasts.",
    category: "Web App",
    link: "#",
  },
  {
    title: "Blog Platform",
    description: "A full-stack blog platform built with Node.js and Express with user authentication.",
    category: "Full Stack",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with Gatsby and GraphQL.",
    category: "Static Site",
    link: "#",
  },
  {
    title: "Mobile Todo App",
    description: "A cross-platform mobile app built with Expo and React Native.",
    category: "Mobile",
    link: "#",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section style={{
        background: "#f4f4f4",
        padding: "4rem 2rem",
        textAlign: "center",
        marginBottom: "2rem",
        borderRadius: "8px"
      }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Hi, I'm a Web Developer
        </h2>
        <p style={{ fontSize: "1.2rem", color: "#666" }}>
          I build modern web and mobile applications
        </p>
      </section>

      {/* Projects Section */}
      <section style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ marginBottom: "1.5rem" }}>My Projects</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              category={project.category}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}