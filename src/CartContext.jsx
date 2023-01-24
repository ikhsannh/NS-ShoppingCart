import { createContext, useState } from "react";
import { getProductData } from "./productStore";

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
})

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([]);
    
//get product quantity
function getProductQuantity(id) {
const quantity = cartProducts.find(product => product.id === id)?.quantity;
 
 if ( quantity === undefined ) {
     return 0;
    }
     return quantity;
 };

//add one to cart
function addOneToCart(id) {
    const quantity = getProductQuantity(id);

        if (quantity === 0 ) { // product is not in cart 
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else { // product is in cart
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                                // if condition
                    ? { ...product, quantity: product.quantity + 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )
        }
};
    
//remove one from cart
function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);
     
        if (quantity == 1) {  // eslint-disable-line
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                                // if condition
                    ? { ...product, quantity: product.quantity - 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )
        }
};

//delete from cart
function deleteFromCart(id) {
// [] if an object meets a condition, add the object to array
// [product1, product2, product3]
  setCartProducts(
    cartProducts =>
    cartProducts.filter(currentProduct => {
    return currentProduct.id !== id;  
    })
  )
};

//get total cost
function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity);
        })
        return totalCost;
    }

const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
}
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;