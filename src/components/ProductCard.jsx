import React from 'react';
import ProductImage from './ProductImage';

function ProductCard({ product, addToCart, deleteProduct }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <ProductImage src={product.image} alt={product.name} category={product.category} />
        <span className="product-category-tag">{product.category}</span>
      </div>
      <div className="product-details">
        <h3 className="product-title" title={product.name}>{product.name}</h3>
        <div className="product-footer">
          <div className="price-block">
            <span className="price-value">{product.price.toLocaleString()}</span>
            <span className="price-currency">DH</span>
          </div>
          <div className="product-actions">
            <button className="btn-add-cart" onClick={() => addToCart(product)}>
              Ajouter
            </button>
            <button 
              className="btn-delete-item-inline" 
              onClick={() => deleteProduct(product.id)} 
              title="Supprimer le produit"
              aria-label="Supprimer le produit"
            >
              🗑️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;