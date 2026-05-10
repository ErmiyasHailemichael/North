import { useParams, useNavigate } from "react-router";
import { posts } from "../data/posts";

export default function PostView() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === Number(postId));

  if (!post) {
    return (
      <div style={{ padding: "40px 20px", textAlign: "center" }}>
        <h1>Post not found</h1>
        <button
          onClick={() => navigate("/")}
          style={{
            marginTop: "16px",
            padding: "10px 24px",
            backgroundColor: "#3b82f6",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Return to Feed
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px 20px", maxWidth: "700px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "8px" }}>{post.title}</h1>
      <p style={{ color: "#555", lineHeight: "1.7", marginBottom: "40px" }}>
        {post.content}
      </p>
      <button
        onClick={() => navigate("/")}
        style={{
          padding: "10px 24px",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        ← Return to Feed
      </button>
    </div>
  );
}