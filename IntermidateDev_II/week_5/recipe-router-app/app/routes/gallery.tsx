import { Link } from "react-router";
import recipes from "../data/recipes.js";

export default function Gallery() {
  return (
    <div style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "32px" }}>Recipe Gallery</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "24px",
        }}
      >
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
                backgroundColor: "white",
                transition: "box-shadow 0.2s",
              }}
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                style={{ width: "100%", height: "180px", objectFit: "cover" }}
              />
              <div style={{ padding: "16px" }}>
                <h2 style={{ fontSize: "18px", marginBottom: "8px" }}>
                  {recipe.title}
                </h2>
                <p style={{ color: "#888", fontSize: "14px", margin: "0" }}>
                  {recipe.category} · {recipe.time}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}