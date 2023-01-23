import { CartContext } from "../CartContext";
import { useContext } from "react"
import { getProductData } from "../productStore";

function CartProduct(props) {
    const cart        = useContext(CartContext);
    const id          = props.id;
    const quantity    = props.quantity;
    const productData = getProductData(id);

    return (
        <>
           <h3 className="font-bold"> {productData.title} </h3>
           <div className="flex justify-between">  
           <p>{quantity} Item </p>
           <button className="text-sm bg-red-500 hover:bg-red-700 px-2 py-1 rounded-lg text-white" onClick={() => cart.deleteFromCart(id)}>
             Remove
            </button>                
            
            </div> 
            <p> ${(quantity * productData.price).toFixed(2)} </p>
            <hr />
            <br />
        </>
    )
}

export default CartProduct;