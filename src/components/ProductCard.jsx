import { CartContext } from "../CartContext";
import { useContext } from "react";

function Product(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);


  return (
    <>
      <h3 className="text-2xl mb-2 font-bold"> {product.title} </h3>
      <p className="text-xl mb-2">{product.price}</p>
      {productQuantity > 0 ?
        <>
          <div className="flex justify-between">

            <div
              className="text-xl mb-2 py-2"
            >
              In cart: {productQuantity}
            </div>
            <div className="mb-1 pb-4">
              <button className="text-2xl bg-blue-500 hover:bg-blue-700 px-2 py-2 mx-2 rounded-lg text-white"
                onClick={() => cart.addOneToCart(product.id)}
              >+</button>
              <button className="text-2xl font-bold bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-lg text-white"
                onClick={() => cart.removeOneFromCart(product.id)}
              >-</button>
            </div>
          </div>
          <button className="text-xl bg-red-500 hover:bg-red-700 px-3 py-2 rounded-lg text-white" onClick={() => cart.deleteFromCart(product.id)}>
          Remove to Cart
        </button>
        </>
        :
        <button className="text-xl bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-lg text-white" onClick={() => cart.addOneToCart(product.id)}>
          Add to Cart
        </button>
      }
    </>
  )
}

export default Product;
