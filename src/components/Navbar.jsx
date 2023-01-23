import { Dialog, Transition } from '@headlessui/react';
import { useState, Fragment, useContext } from 'react';
import { CartContext } from "../CartContext";
import CartProduct from './CartProduct';

function Navbar() {
  // -------- >> state variables
  const [isOpen, setIsOpen] = useState(false);
  const cart = useContext(CartContext);

  // -------- >> onCLick event to toggle modal
  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }

  //stripe
  const checkout = async () => {
    await fetch('http://localhost:4000/checkout', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ items: cart.items })
    }).then((response) => {
      return response.json();
    }).then((response) => {
      if (response.url) {
        window.location.assign(response.url);
      }
    })
  }

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <>
      <div className="text-3xl text-center flex justify-between mx-20 mb-5 mt-5">
        <div className="font-bold">
          NS Store
        </div>
        <div>
          <button
            type="button"
            onClick={openModal}
            className="text-2xl bg-indigo-500 hover:bg-indigo-700 px-3 py-2 rounded-lg text-white"
          >
            Cart {productsCount} Items
          </button>
        </div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                   <div className='flex justify-between mb-5'>
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-extrabold leading-6 text-gray-900"
                    >
                      Shopping Cart
                    </Dialog.Title>
                    <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>
                    <div>
                      {/* function get data from product card then display to checkout cart items */}
                      {productsCount > 0 ?
                        <>
                         
                          <hr />
                          <p className="text-sm text-gray-500 mb-2">
                            Detail purchase
                          </p>
                          {cart.items.map((currentProduct, idx) => (

                            <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>

                          ))}

                          <h1 className='text-2xl font-bold'>Total: ${cart.getTotalCost().toFixed(3)}</h1>

                          {/* Stripe */}
                          
                          <h1 className="text-center text-xl cursor-pointer bg-green-500 hover:bg-green-700 px-3 py-2 rounded-lg text-white mt-1" onClick={checkout}>
                            Purchase now
                          </h1>
                             
                        </>
                        :
                        <h1>There are no items in your cart.</h1>
                      }
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  )
}

export default Navbar;

