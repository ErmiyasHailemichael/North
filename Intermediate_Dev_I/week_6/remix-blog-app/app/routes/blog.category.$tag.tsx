import { useParams, Link } from "react-router";

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

export default function BlogCategory() {
  const { tag } = useParams();
  const filteredPosts = posts.filter((post) => post.category === tag);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <Link to="/" style={{ color: "#333", display: "block", marginBottom: "1rem" }}>
        ← Back to Home
      </Link>
      <h2 style={{ marginBottom: "1.5rem", textTransform: "capitalize" }}>
        {tag} Posts
      </h2>
      {filteredPosts.length === 0 ? (
        <p style={{ color: "#666" }}>No posts found for this category.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {filteredPosts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.slug}>
              <div style={{
                padding: "1.5rem",
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
              }}>
                <h3>{post.title}</h3>
                <p style={{ color: "#666", marginTop: "0.5rem" }}>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}