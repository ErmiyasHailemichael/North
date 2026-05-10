import { Link } from "react-router";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "60px 20px" }}>
      <h1>Welcome to Recipe Gallery</h1>
      <p style={{ fontSize: "18px", color: "#555", marginBottom: "32px" }}>
        Browse our collection of delicious recipes from around the world.
      </p>
      <Link
        to="/gallery"
        style={{
          backgroundColor: "#e67e22",
          color: "white",
          padding: "12px 28px",
          borderRadius: "6px",
          textDecoration: "none",
          fontSize: "16px",
        }}
      >
        Browse Recipes
      </Link>
    </div>
  );
}