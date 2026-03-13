import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

const products = [
  { id: 1, name: "Laptop", description: "High-performance laptop for professionals.", price: 1200 },
  { id: 2, name: "Headphones", description: "Noise-cancelling wireless headphones.", price: 250 },
  { id: 3, name: "Keyboard", description: "Mechanical keyboard with RGB lighting.", price: 150 },
  { id: 4, name: "Monitor", description: "4K ultra-wide display monitor.", price: 600 },
  { id: 5, name: "Mouse", description: "Ergonomic wireless mouse.", price: 80 },
];

// Normal cases
describe('ProductList - Normal Cases', () => {
  it('should contain 5 products', () => {
    assert.equal(products.length, 5);
  });

  it('should have unique ids for each product', () => {
    const ids = products.map((p) => p.id);
    const uniqueIds = new Set(ids);
    assert.equal(uniqueIds.size, products.length);
  });

  it('should have a name, description, and price for each product', () => {
    products.forEach((p) => {
      assert.ok(p.name);
      assert.ok(p.description);
      assert.ok(p.price);
    });
  });
});

// Edge cases
describe('ProductList - Edge Cases', () => {
  it('should return empty array when filtered with no matches', () => {
    const result = products.filter((p) => p.name === 'Nonexistent');
    assert.equal(result.length, 0);
  });

  it('should handle filtering by price correctly', () => {
    const affordable = products.filter((p) => p.price < 100);
    assert.equal(affordable.length, 1);
    assert.equal(affordable[0].name, 'Mouse');
  });

  it('should return correct product when searched by id', () => {
    const result = products.find((p) => p.id === 3);
    assert.equal(result.name, 'Keyboard');
  });
});