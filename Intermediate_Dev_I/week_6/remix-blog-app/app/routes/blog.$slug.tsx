import { useParams, Link } from "react-router";

const posts: Record<string, { title: string; category: string; content: string }> = {
  "getting-started-with-react": {
    title: "Getting Started with React",
    category: "tech",
    content: "React is a JavaScript library for building user interfaces. It uses a component-based architecture that makes it easy to build complex UIs from small, reusable pieces. In this post we will explore the basics of React and how to build your first component.",
  },
  "top-10-lifestyle-tips": {
    title: "Top 10 Lifestyle Tips",
    category: "lifestyle",
    content: "Living a healthy lifestyle doesn't have to be complicated. Small changes in your daily routine can make a big difference. From drinking more water to getting enough sleep, these simple habits can significantly improve your quality of life.",
  },
  "understanding-nextjs": {
    title: "Understanding Next.js",
    category: "tech",
    content: "Next.js is a React framework that enables server-side rendering and static site generation. It provides a great developer experience with features like file-based routing, API routes, and built-in CSS support.",
  },
  "healthy-morning-routine": {
    title: "Healthy Morning Routine",
    category: "lifestyle",
    content: "Starting your day with a good routine can set the tone for the rest of the day. Whether it's exercising, meditating, or simply enjoying a healthy breakfast, a morning routine helps you stay focused and energized throughout the day.",
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? posts[slug] : null;

  if (!post) {
    return (
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2>Post not found</h2>
        <Link to="/" style={{ color: "#333" }}>← Back to Home</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <Link to="/" style={{ color: "#333", display: "block", marginBottom: "1rem" }}>
        ← Back to Home
      </Link>
      <div style={{
        padding: "2rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ marginBottom: "0.5rem" }}>{post.title}</h2>
        <span style={{
          background: "#333",
          color: "#fff",
          padding: "0.2rem 0.5rem",
          borderRadius: "4px",
          fontSize: "0.8rem"
        }}>
          {post.category}
        </span>
        <p style={{ marginTop: "1.5rem", color: "#666" }}>{post.content}</p>
      </div>
    </div>
  );
}