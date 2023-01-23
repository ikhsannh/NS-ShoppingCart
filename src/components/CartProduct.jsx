import { CartContext } from "../CartContext";
import { useContext } from "react"
import { getProductData } from "../productStore";

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id   = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    return (
        <>
            <h3> {productData.title} </h3>
            <p>{quantity} total</p>
            <p> ${(quantity * productData.price).toFixed(2)} </p>
            <button className="text-xl bg-red-500 hover:bg-red-700 px-3 py-2 rounded-lg text-white" onClick={() => cart.deleteFromCart(id)}>
             Remove
            </button>
            <hr />
        </>
    )
}

export default CartProduct;