import { useParams, Link } from "react-router";
import recipes from "../data/recipes";

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div style={{ padding: "40px 20px", textAlign: "center" }}>
        <h1>Recipe not found</h1>
        <Link to="/gallery">Back to Gallery</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px 20px", maxWidth: "700px", margin: "0 auto" }}>
      <Link
        to="/gallery"
        style={{ color: "#e67e22", textDecoration: "none", fontSize: "14px" }}
      >
        ← Back to Gallery
      </Link>

      <img
        src={recipe.image}
        alt={recipe.title}
        style={{
          width: "100%",
          height: "320px",
          objectFit: "cover",
          borderRadius: "8px",
          margin: "24px 0",
        }}
      />

      <h1 style={{ marginBottom: "8px" }}>{recipe.title}</h1>
      <p style={{ color: "#888", fontSize: "14px", marginBottom: "24px" }}>
        {recipe.category} · {recipe.time}
      </p>

      <h2 style={{ marginBottom: "12px" }}>Ingredients</h2>
      <ul style={{ paddingLeft: "20px", marginBottom: "32px" }}>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} style={{ marginBottom: "6px" }}>
            {ingredient}
          </li>
        ))}
      </ul>

      <h2 style={{ marginBottom: "12px" }}>Cooking Instructions</h2>
      <p style={{ color: "#555", lineHeight: "1.7" }}>
        Cooking instructions for {recipe.title} will be available soon.
      </p>
    </div>
  );
}