import { useState } from "react";
import CartItem from "./CartItem";

function Cart({ cart, total, removeFromCart, clearCart }) {
    const [showSuccess, setShowSuccess] = useState(false);

    function handleCheckout() {
        if (cart.length > 0) {
            clearCart();
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 2000);
        }
    }

    return (
        <div className="cart">
            <h2>Mon Panier</h2>
            <p className="cart-count">Articles : <strong>{cart.length}</strong></p>

            {showSuccess ? (
                <div className="success">
                    <h3>Merci !</h3>
                    <p>Votre commande a ete enregistree.</p>
                </div>
            ) : (
                <>
                    <div className="cart-items">
                        {cart.length === 0 ? (
                            <div className="cart-empty">Votre panier est vide</div>
                        ) : (
                            cart.map((item, index) => (
                                <CartItem
                                    key={`${item.id}-${index}`}
                                    item={item}
                                    removeFromCart={removeFromCart}
                                />
                            ))
                        )}
                    </div>

                    <div className="cart-total">
                        <span>Total :</span>
                        <span>{total.toLocaleString()} DH</span>
                    </div>

                    <button
                        className="btn-checkout"
                        disabled={cart.length === 0}
                        onClick={handleCheckout}
                    >
                        Valider la commande
                    </button>
                </>
            )}
        </div>
    );
}

export default Cart;
