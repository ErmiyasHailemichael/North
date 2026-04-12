import { Link } from "react-router";

const posts = [
  {
    slug: "getting-started-with-react",
    title: "Getting Started with React",
    category: "tech",
    excerpt: "Learn the basics of React and how to build your first component.",
  },
  {
    slug: "top-10-lifestyle-tips",
    title: "Top 10 Lifestyle Tips",
    category: "lifestyle",
    excerpt: "Simple habits that can improve your daily life significantly.",
  },
  {
    slug: "understanding-nextjs",
    title: "Understanding Next.js",
    category: "tech",
    excerpt: "A deep dive into Next.js and its powerful features.",
  },
  {
    slug: "healthy-morning-routine",
    title: "Healthy Morning Routine",
    category: "lifestyle",
    excerpt: "Start your day right with these simple morning habits.",
  },
];

export default function Home() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ marginBottom: "1.5rem" }}>Latest Posts</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {posts.map((post) => (
          <Link to={`/blog/${post.slug}`} key={post.slug}>
            <div style={{
              padding: "1.5rem",
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}>
              <h3>{post.title}</h3>
              <p style={{ color: "#666", margin: "0.5rem 0" }}>{post.excerpt}</p>
              <span style={{
                background: "#333",
                color: "#fff",
                padding: "0.2rem 0.5rem",
                borderRadius: "4px",
                fontSize: "0.8rem"
              }}>
                {post.category}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}