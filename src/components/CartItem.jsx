import React from 'react';
import ProductImage from './ProductImage';

function CartItem({ item, removeFormatCart }) {
  return (
    <div className="cart-item">
      <div className="cart-item-media">
        <ProductImage src={item.image} alt={item.name} category={item.category} />
      </div>
      <div className="cart-item-info">
        <span className="cart-item-name" title={item.name}>{item.name}</span>
        <span className="cart-item-price">{item.price.toLocaleString()} DH</span>
      </div>
      <button className="btn-remove-item" onClick={() => removeFormatCart(item.id)} title="Retirer">
        ✕
      </button>
    </div>
  );
}

export default CartItem;