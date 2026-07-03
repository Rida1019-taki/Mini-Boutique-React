import CartItem from "./CartItem";

function Cart({cart, total, removeFormatCard}){
    return(
        <div className="cart-container">
            <h2 className="cart-title">
                <span>🛒</span> Panier
            </h2>
            <p className="cart-count">Articles : <strong>{cart.length}</strong></p>
            <div className="cart-items">
                {cart.length === 0 ? (
                    <p className="cart-empty-text">Le panier est vide.</p>
                ) : (
                    cart.map((item, index) => (
                        <CartItem
                            key={`${item.id}-${index}`}
                            item={item}
                            removeFormatCart={removeFormatCard}
                        />
                    ))
                )}
            </div>
            <div className="cart-total-section">
                <span>Total :</span>
                <span className="cart-total-value">{total} DH</span>
            </div>
        </div>
    );
}
export default Cart;