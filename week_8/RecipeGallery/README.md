# Recipe Gallery

A React application that displays a curated gallery of recipes using list rendering with the `map()` method. Built with Vite + React for AD311 Intermediate Development 1 (Week 8).

## Features

- Renders 8 recipe cards from a static data array using `map()`
- Each card displays: title, category badge, cook time, servings, and ingredients
- Unique `key` prop on each card using recipe `id`
- Responsive CSS Grid layout
- 12 passing unit tests (6 normal + 6 edge cases)

## Project Structure
```
recipe-gallery/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── data/
│   │   └── recipes.js
│   ├── components/
│   │   ├── RecipeGallery.jsx
│   │   └── RecipeCard.jsx
│   └── __tests__/
│       └── recipes.test.js
```

## Getting Started

### Install & Run
```bash
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

### Run Tests
```bash
node --test src/__tests__/recipes.test.js
```

## Test Cases

| # | Type | Description |
|---|------|-------------|
| N1 | Normal | Array contains exactly 8 recipes |
| N2 | Normal | Every recipe has required fields |
| N3 | Normal | map() renders one card per recipe with correct key |
| N4 | Normal | All recipe IDs are unique |
| N5 | Normal | Each recipe has at least 3 ingredients |
| N6 | Normal | Servings is a positive number |
| E1 | Edge | map() on empty array returns empty array |
| E2 | Edge | Single-recipe array renders 1 card |
| E3 | Edge | Recipe with 1 ingredient maps correctly |
| E4 | Edge | Special characters in title render correctly |
| E5 | Edge | Duplicate titles with unique IDs are separate cards |
| E6 | Edge | 20-ingredient recipe maps without error |

## Technologies

- React 18
- Vite
- Node.js built-in test runner
- CSS Grid & Flexbox
- Google Fonts (Playfair Display + DM Sans)