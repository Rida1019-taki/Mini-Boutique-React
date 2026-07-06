import { useState } from 'react';

const categoryColors = {
  'Informatique': '#4f46e5',
  'Électronique': '#0891b2',
  'Maison': '#d97706',
};

function ProductImage({ src, alt, category }) {
  const [error, setError] = useState(false);

  const color = categoryColors[category] || '#6b7280';

  if (error || !src) {
    return (
      <div
        className="product-image-placeholder"
        style={{ background: color }}
      >
        {category || 'Produit'}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
    />
  );
}

export default ProductImage;
