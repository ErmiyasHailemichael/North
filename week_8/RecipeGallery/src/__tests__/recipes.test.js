import { test, describe } from "node:test";
import assert from "node:assert/strict";

const recipes = [
  { id: 1, title: "Spaghetti Carbonara", category: "Pasta", time: "30 min", servings: 4, ingredients: ["Spaghetti", "Eggs", "Pecorino Romano", "Guanciale", "Black Pepper"], image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop" },
  { id: 2, title: "Avocado Toast", category: "Breakfast", time: "10 min", servings: 2, ingredients: ["Sourdough Bread", "Avocado", "Lemon Juice", "Red Pepper Flakes", "Salt"], image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=400&h=300&fit=crop" },
  { id: 3, title: "Chicken Tikka Masala", category: "Curry", time: "45 min", servings: 6, ingredients: ["Chicken", "Tomatoes", "Heavy Cream", "Garam Masala", "Ginger", "Garlic"], image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop" },
  { id: 4, title: "Caesar Salad", category: "Salad", time: "20 min", servings: 4, ingredients: ["Romaine Lettuce", "Parmesan", "Croutons", "Caesar Dressing", "Anchovies"], image: "https://images.unsplash.com/photo-1512852939750-1305098529bf?w=400&h=300&fit=crop" },
  { id: 5, title: "Blueberry Pancakes", category: "Breakfast", time: "25 min", servings: 4, ingredients: ["Flour", "Eggs", "Milk", "Blueberries", "Butter", "Maple Syrup"], image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop" },
  { id: 6, title: "Beef Tacos", category: "Mexican", time: "30 min", servings: 4, ingredients: ["Ground Beef", "Taco Shells", "Cheddar", "Salsa", "Sour Cream", "Lettuce"], image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop" },
  { id: 7, title: "Margherita Pizza", category: "Italian", time: "40 min", servings: 4, ingredients: ["Pizza Dough", "Tomato Sauce", "Fresh Mozzarella", "Basil", "Olive Oil"], image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop" },
  { id: 8, title: "Mango Smoothie Bowl", category: "Breakfast", time: "10 min", servings: 2, ingredients: ["Frozen Mango", "Banana", "Coconut Milk", "Granola", "Chia Seeds"], image: "https://images.unsplash.com/photo-1490323914169-4b9e7ae1697e?w=400&h=300&fit=crop" },
];

function renderGallery(data) {
  return data.map((recipe) => ({ key: recipe.id, title: recipe.title, ingredients: recipe.ingredients, category: recipe.category }));
}

describe("Normal Cases", () => {
  test("TC-N1: recipes array contains 8 items", () => { assert.equal(recipes.length, 8); });
  test("TC-N2: every recipe has required fields", () => { recipes.forEach((r) => { assert.ok(r.id); assert.ok(r.title); assert.ok(Array.isArray(r.ingredients)); assert.ok(r.image.startsWith("http")); }); });
  test("TC-N3: map() renders one card per recipe with correct key", () => { const result = renderGallery(recipes); assert.equal(result.length, recipes.length); result.forEach((card, i) => assert.equal(card.key, recipes[i].id)); });
  test("TC-N4: all recipe IDs are unique", () => { const ids = recipes.map((r) => r.id); assert.equal(new Set(ids).size, ids.length); });
  test("TC-N5: each recipe has at least 3 ingredients", () => { recipes.forEach((r) => assert.ok(r.ingredients.length >= 3)); });
  test("TC-N6: servings is a positive number", () => { recipes.forEach((r) => assert.ok(typeof r.servings === "number" && r.servings > 0)); });
});

describe("Edge Cases", () => {
  test("TC-E1: map() on empty array returns empty array", () => { assert.deepEqual(renderGallery([]), []); });
  test("TC-E2: single-recipe array renders 1 card", () => { const result = renderGallery([recipes[0]]); assert.equal(result.length, 1); });
  test("TC-E3: recipe with 1 ingredient maps correctly", () => { const result = renderGallery([{ id: 99, title: "Rice", category: "Simple", time: "15 min", servings: 1, ingredients: ["Rice"], image: "https://example.com/rice.jpg" }]); assert.equal(result[0].key, 99); });
  test("TC-E4: special characters in title render correctly", () => { const result = renderGallery([{ id: 100, title: "Crêpes & Café", category: "Dessert", time: "20 min", servings: 2, ingredients: ["Flour", "Eggs"], image: "https://example.com/crepes.jpg" }]); assert.equal(result[0].title, "Crêpes & Café"); });
  test("TC-E5: duplicate titles with unique IDs are separate cards", () => { const dups = [{ id: 1, title: "Pancakes", category: "Breakfast", time: "10 min", servings: 2, ingredients: ["Flour"], image: "https://example.com/a.jpg" }, { id: 2, title: "Pancakes", category: "Breakfast", time: "10 min", servings: 2, ingredients: ["Flour"], image: "https://example.com/b.jpg" }]; const result = renderGallery(dups); assert.equal(result.length, 2); assert.notEqual(result[0].key, result[1].key); });
  test("TC-E6: 20-ingredient recipe maps without error", () => { const r = [{ id: 200, title: "Stew", category: "Stew", time: "2 hrs", servings: 8, ingredients: Array.from({ length: 20 }, (_, i) => `Ingredient ${i + 1}`), image: "https://example.com/stew.jpg" }]; assert.equal(renderGallery(r).length, 1); });
});