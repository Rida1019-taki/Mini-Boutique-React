import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css"

function ProductList({ products, addToCart, deleteProduct }) {
    return (
        <div className="product-grid">
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                    deleteProduct={deleteProduct}
                />
            ))}
        </div>
    );
}

export default ProductList;
