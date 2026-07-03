import ProductCard from "./ProductCard";

function ProductList({product, addToCart, deleteProduct}){
    return(
        <div className="product-grid">
            {
                product.map(product => (
                    <ProductCard
                    key = {product.id}
                    product={product}
                    addToCart={addToCart}
                    deleteProduct={deleteProduct}/>
                ))
            }
        </div>
    );
}
export default ProductList;