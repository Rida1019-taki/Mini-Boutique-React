import ProductImage from './ProductImage';

function ProductCard({ product, addToCart, deleteProduct }) {
  return (
    <div className="product-card">
      <div className="product-image-wrap">
        <ProductImage src={product.image} alt={product.name} category={product.category} />
      </div>
      <div className="product-info">
        <h3 title={product.name}>{product.name}</h3>
        <div className="product-footer">
          <div className="product-price">
            {product.price.toLocaleString()} <small>DH</small>
          </div>
          <div className="product-actions">
            <button className="btn-add" onClick={() => addToCart(product)}>
              Ajouter
            </button>
            <button
              className="btn-delete"
              onClick={() => deleteProduct(product.id)}
              aria-label="Supprimer"
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
