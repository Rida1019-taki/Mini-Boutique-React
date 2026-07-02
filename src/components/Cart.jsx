import CartItem from "./CartItem";

function Cart({cart, total, removeFormatCard}){
    return(
        <div>
            <h2>Panier</h2>
            <p>Nombre : {cart.length}</p>
            {cart.map(item =>
            <CartItem
                key = {item.id}
                item={item}
                removeFormatCart={removeFormatCard}
            />
            )}
            <h3>Total : {total} DH</h3>
        </div>
    );
}
export default Cart;