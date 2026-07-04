import React, { useState } from 'react';
import CartItem from "./CartItem";
import { CheckIcon } from './Icons';

function Cart({ cart, total, removeFormatCard, clearCart }) {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCheckout = () => {
    if (cart.length > 0) {
      setShowSuccess(true);
      setTimeout(() => {
        clearCart();
        setShowSuccess(false);
      }, 4000);
    }
  };

  return (
    <div className="cart-container animate-scale">
      <h2 className="cart-title">
        <span>🛒</span>
        <span>Mon Panier</span>
      </h2>
      <p className="cart-count">
        Articles dans le panier : <strong>{cart.length}</strong>
      </p>
      
      {showSuccess ? (
        <div className="checkout-success-view">
          <div className="success-icon-wrapper">
            <CheckIcon className="w-8 h-8 text-white" />
          </div>
          <h3>Commande Validée !</h3>
          <p>Votre commande a été enregistrée avec succès.</p>
          <span className="success-subtext">Merci pour votre confiance !</span>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.length === 0 ? (
              <div className="cart-empty-state">
                <span className="cart-empty-icon">🛍️</span>
                <span className="cart-empty-text">Votre panier est vide</span>
              </div>
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
          
          <div className="cart-summary">
            <div className="cart-total-section">
              <span>Total :</span>
              <span className="cart-total-value">{total.toLocaleString()} DH</span>
            </div>
            <button 
              className={`btn-checkout ${cart.length === 0 ? 'disabled' : ''}`}
              disabled={cart.length === 0}
              onClick={handleCheckout}
            >
              Valider la commande
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;