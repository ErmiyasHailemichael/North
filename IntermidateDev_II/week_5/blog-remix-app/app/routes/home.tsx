import { Link } from "react-router";
import { posts } from "../data/posts";

export default function Home() {
  return (
    <div style={{ padding: "40px 20px", maxWidth: "700px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "8px" }}>Blog Feed</h1>
      <p style={{ color: "#666", marginBottom: "32px" }}>
        Welcome to the blog. Click a post to read more.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/post/${post.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "20px",
                backgroundColor: "white",
              }}
            >
              <h2 style={{ margin: "0 0 8px", fontSize: "18px" }}>
                {post.title}
              </h2>
              <p style={{ margin: "0", color: "#888", fontSize: "14px" }}>
                {post.content.substring(0, 80)}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}