function CartItem({ item, removeFromCart }) {
    return (
        <div className="cart-item">
            <div className="item-thumb" style={{ background: "#999" }}>
                {item.name.charAt(0)}
            </div>
            <div className="item-info">
                <span className="item-name">{item.name}</span>
                <span className="item-price">{item.price.toLocaleString()} DH</span>
            </div>
            <button className="btn-remove-item" onClick={() => removeFromCart(item.id)}>
                X
            </button>
        </div>
    );
}

export default CartItem;
