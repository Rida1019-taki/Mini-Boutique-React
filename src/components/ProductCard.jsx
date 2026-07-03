
function ProductCard({product, addToCart, deleteProduct}){
    return (
      <div className="product-card">
          <div className="product-image-container">
              <img className="product-image" src={product.image} alt={product.name}/>
              <span className="product-category-tag">{product.category}</span>
          </div>
          <div className="product-details">
              <h3 className="product-title">{product.name}</h3>
              <p className="product-price">{product.price} DH</p>
              <div className="product-card-buttons">
                  <button className="btn-add" onClick={() => addToCart(product)}>
                    Ajouter au panier
                  </button>
                  <button className="btn-delete" onClick={() => deleteProduct(product.id)}>
                    Supprimer
                  </button>
              </div>
          </div>
      </div>
    );
}
export default ProductCard;