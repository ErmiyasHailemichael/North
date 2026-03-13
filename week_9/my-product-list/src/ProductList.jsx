const products = [
  { id: 1, name: "Laptop", description: "High-performance laptop for professionals.", price: 1200 },
  { id: 2, name: "Headphones", description: "Noise-cancelling wireless headphones.", price: 250 },
  { id: 3, name: "Keyboard", description: "Mechanical keyboard with RGB lighting.", price: 150 },
  { id: 4, name: "Monitor", description: "4K ultra-wide display monitor.", price: 600 },
  { id: 5, name: "Mouse", description: "Ergonomic wireless mouse.", price: 80 },
];

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    padding: '20px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    width: '250px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  },
  name: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  description: {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '12px',
  },
  price: {
    fontSize: '1.1rem',
    color: '#2a9d8f',
    fontWeight: 'bold',
  },
};

function ProductList() {
  return (
    <div style={styles.container}>
      {products.map((product) => (
        <div key={product.id} style={styles.card}>
          <p style={styles.name}>{product.name}</p>
          <p style={styles.description}>{product.description}</p>
          <p style={styles.price}>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;