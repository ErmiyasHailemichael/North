import React, { useState } from 'react';
import { useImmer } from 'use-immer';

const ShoppingListWithImmer = () => {
  // 1. Initialize State with useImmer
  const [shoppingList, updateShoppingList] = useImmer([
    { 
      id: 1, 
      name: 'Oat Milk', 
      quantity: 2, 
      details: { category: 'Dairy', notes: 'Get the unsweetened one' } 
    }
  ]);

  // Local state for the input field
  const [newItemName, setNewItemName] = useState('');

  // 2. Logic: Add Item
  const addItem = (e) => {
    e.preventDefault();
    if (!newItemName.trim()) return; // Edge case check: don't add empty names

    updateShoppingList(draft => {
      draft.push({
        id: Date.now(),
        name: newItemName,
        quantity: 1,
        details: { category: 'General', notes: '' }
      });
    });
    setNewItemName(''); // Clear input
  };

  // 3. Logic: Update nested notes
  const updateNote = (id, newNote) => {
    updateShoppingList(draft => {
      const item = draft.find(i => i.id === id);
      if (item) {
        item.details.notes = newNote;
      }
    });
  };

  // 4. Logic: Remove item
  const removeItem = (id) => {
    updateShoppingList(draft => {
      const index = draft.findIndex(i => i.id === id);
      if (index !== -1) draft.splice(index, 1);
    });
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'Arial' }}>
      <h2>🛒 My Shopping List</h2>

      {/* Add Item Form */}
      <form onSubmit={addItem} style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="Enter item name..."
          style={{ padding: '8px', width: '70%' }}
        />
        <button type="submit" style={{ padding: '8px 15px', marginLeft: '10px' }}>Add</button>
      </form>

      {/* List Rendering */}
      {shoppingList.length === 0 ? (
        <p>Your list is empty!</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {shoppingList.map(item => (
            <li key={item.id} style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '10px', borderRadius: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong>{item.name}</strong>
                <button onClick={() => removeItem(item.id)} style={{ background: '#ff4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                  Remove
                </button>
              </div>
              
              <div style={{ marginTop: '10px' }}>
                <small>Category: {item.details.category}</small>
                <br />
                <label style={{ fontSize: '0.8rem' }}>Notes: </label>
                <input 
                  type="text" 
                  value={item.details.notes}
                  onChange={(e) => updateNote(item.id, e.target.value)}
                  placeholder="Add a note..."
                  style={{ width: '100%', marginTop: '5px', padding: '5px' }}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingListWithImmer;