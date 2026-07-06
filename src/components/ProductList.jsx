import ProductCard from "./ProductCard";

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
