
function ProductCard({product, addToCart, deleteProduct}){
    return (
      <div>
          <img src={product.image} alt={product.name}/>
          <h3>{product.name}</h3>
          <p>Prix : {product.price}</p>
          <p>Categorie : {product.category}</p>
          <button onClick={() => addToCart(product)}>
            Ajouter
          </button>
          <button onClick={() => deleteProduct(product.id)}>
            Supprimer
          </button>
      </div>
    );
}
export default ProductCard;