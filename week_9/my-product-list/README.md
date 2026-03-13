
```md
# My Product List

A static product list built with React and Vite.

## How to Run

1. Navigate into the project directory:
   ```
   cd my-product-list
   ```

2. Switch to Node 20:
   ```
   nvm use 20
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:5173`

## How to Run Tests

```
node --test src/ProductList.test.js
```

## Features

- Renders a list of 5 products using React's `map()` function
- Each product displays a name, description, and price
- Each list item has a unique `key` prop using the product's `id`
- `ProductList` is a separate reusable component imported into `App.jsx`

## Test Cases

**Normal Cases:**
- Products array contains exactly 5 items
- Every product has a unique id
- Every product has a name, description, and price

**Edge Cases:**
- Filtering by a non-existent name returns an empty array
- Filtering by price under $100 returns only the Mouse
- Finding a product by id returns the correct product
```
