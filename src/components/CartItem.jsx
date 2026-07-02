function CartItem({item, removeFormatCart}){
    return(
        <div>
            {item.name} - {item.price} DH
            <button onClick={() => removeFormatCart(item.id)}>
                X
            </button>
        </div>
    );
}
export default CartItem;