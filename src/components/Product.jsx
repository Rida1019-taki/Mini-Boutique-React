
function Product({product}){
    return (
      <div>
          <img src={product.image} alt={product.name}/>
          <h3>{product.name}</h3>
          <p>Prix : {product.price}</p>
          <p>Categorie : {product.category}</p>
      </div>
    );
}