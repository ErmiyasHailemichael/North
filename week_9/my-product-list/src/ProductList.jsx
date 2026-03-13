const products = [
  { id: 1, name: "Laptop", description: "High-performance laptop for professionals.", price: 1200 },
  { id: 2, name: "Headphones", description: "Noise-cancelling wireless headphones.", price: 250 },
  { id: 3, name: "Keyboard", description: "Mechanical keyboard with RGB lighting.", price: 150 },
  { id: 4, name: "Monitor", description: "4K ultra-wide display monitor.", price: 600 },
  { id: 5, name: "Mouse", description: "Ergonomic wireless mouse.", price: 80 },
];

function ProductList() {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;