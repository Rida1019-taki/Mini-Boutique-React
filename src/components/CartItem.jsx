const categoryColors = {
    'Informatique': '#4f46e5',
    'Électronique': '#0891b2',
    'Maison': '#d97706',
};

function CartItem({ item, removeFromCart }) {
    const color = categoryColors[item.category] || '#6b7280';

    return (
        <div className="cart-item">
            <div className="cart-item-thumb" style={{ background: color }}>
                {item.name.charAt(0)}
            </div>
            <div className="cart-item-info">
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">{item.price.toLocaleString()} DH</span>
            </div>
            <button className="btn-remove" onClick={() => removeFromCart(item.id)}>
                X
            </button>
        </div>
    );
}

export default CartItem;
