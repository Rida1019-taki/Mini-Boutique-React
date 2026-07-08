import ProductImage from "../ProductImage/ProductImage";
import "./ProductCard.css"

function ProductCard({ product, addToCart, deleteProduct }) {
    return (
        <div className="product-card">
            <div className="product-image">
                <ProductImage src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
                <h3>{product.name}</h3>
                <div className="product-footer">
                    <div className="price">
                        {product.price.toLocaleString()} <small>DH</small>
                    </div>
                    <div className="actions">
                        <button className="btn-add" onClick={() => addToCart(product)}>
                            Ajouter
                        </button>
                        <button className="btn-delete" onClick={() => deleteProduct(product.id)}>
                            X
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
