import { productsArray } from "../productStore";

function Product() {
  return (
    <>
      <h1 className="text-3xl text-center font-bold underline mb-10">
        Products
      </h1>

      <div className="flex justify-around">
        {productsArray.map((product, idx) => (
          <div className="text-center bg-white rounded-lg px-20 py-8 ring-1 ring-slate-300/5 shadow-xl" key={idx}>
            <h3 className="text-2xl mb-2 font-bold"> {product.title} </h3>
            <p className="text-xl mb-2">{product.price}</p>
            <div className="flex justify-between">
              <div className="text-xl mb-2 py-2">
                In cart 3
              </div>
              <div className="mb-1 pb-4">
                <button className="text-2xl bg-blue-500 hover:bg-blue-700 px-2 py-2 mx-2 rounded-lg text-white">+</button>
                <button className="text-2xl font-bold bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-lg text-white">-</button>
              </div>
            </div>
            <button className="text-xl bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-lg text-white">
              Add to Cart
            </button>
            <br />
            <button className="text-xl bg-red-500 hover:bg-red-700 px-3 py-2 rounded-lg text-white">
              Remove from cart
            </button>
          </div>
        ))}

      </div>
      <br />
      <hr />

    </>
  )
}

export default Product;
