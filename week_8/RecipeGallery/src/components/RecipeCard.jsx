function RecipeCard({ recipe }) {
  const { title, category, time, servings, ingredients, image } = recipe;

  return (
    <div className="recipe-card">
      <div className="recipe-image-wrapper">
        <img
          src={image}
          alt={title}
          className="recipe-image"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/400x300?text=No+Image";
          }}
        />
        <span className="recipe-category">{category}</span>
      </div>

      <div className="recipe-body">
        <h2 className="recipe-title">{title}</h2>

        <div className="recipe-meta">
          <span className="meta-item">⏱ {time}</span>
          <span className="meta-divider">·</span>
          <span className="meta-item">🍽 {servings} servings</span>
        </div>

        <div className="ingredients-section">
          <h3 className="ingredients-heading">Ingredients</h3>
          <ul className="ingredients-list">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="ingredient-item">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;