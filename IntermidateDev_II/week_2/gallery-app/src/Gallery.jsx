import { useState } from 'react';

const images = [
  { id: 1, url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c', description: 'Healthy Salad Bowl' },
  { id: 2, url: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445', description: 'Fluffy Pancakes' },
  { id: 3, url: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327', description: 'Grilled Salmon' },
  { id: 4, url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836', description: 'Grilled Steak' },
  { id: 5, url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd', description: 'Veggie Bowl' },
];

function Gallery() {
  const [index, setIndex] = useState(0);

  function handlePrev() {
    if (index > 0) setIndex(index - 1);
  }

  function handleNext() {
    if (index < images.length - 1) setIndex(index + 1);
  }

  return (
    <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Recipe Gallery</h1>
      <img
        src={images[index].url}
        alt={images[index].description}
        style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px' }}
      />
      <p style={{ fontSize: '1.2rem', margin: '12px 0' }}>{images[index].description}</p>
      <p style={{ color: 'gray' }}>{index + 1} / {images.length}</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '12px' }}>
        <button onClick={handlePrev} disabled={index === 0}>Previous</button>
        <button onClick={handleNext} disabled={index === images.length - 1}>Next</button>
      </div>
    </div>
  );
}

export default Gallery;