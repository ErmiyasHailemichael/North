import { recipes } from "../data/recipes";
import RecipeCard from "./RecipeCard";

function RecipeGallery() {
  return (
    <div className="gallery-container">
      <header className="gallery-header">
        <p className="gallery-subtitle">From Our Kitchen</p>
        <h1 className="gallery-title">Recipe Gallery</h1>
        <p className="gallery-description">
          A curated collection of {recipes.length} delicious recipes
        </p>
      </header>

      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default RecipeGallery;