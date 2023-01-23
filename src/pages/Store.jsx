import React from 'react'
import { productsArray } from "../productStore";
import ProductCard from "../components/ProductCard";

function Store() {
  return (
    <>
      <h1 className="text-3xl text-center font-bold underline mb-10">
        Welcome to the Store!
      </h1>

      <div className="flex justify-around">
        {productsArray.map((product, idx) => (
          <div className="text-center bg-white rounded-lg px-20 py-8 ring-1 ring-slate-300/5 shadow-xl" key={idx}>
            <ProductCard product={product} />
          </div>
        ))}

      </div>
      <br />
      <hr />
    </>
  )
}

export default Store