function CartItem({item, removeFormatCart}){
    return(
        <div className="cart-item">
            <div className="cart-item-info">
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">{item.price} DH</span>
            </div>
            <button className="btn-remove-item" onClick={() => removeFormatCart(item.id)} title="Retirer">
                ✕
            </button>
        </div>
    );
}
export default CartItem;