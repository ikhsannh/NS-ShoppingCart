function Navbar() {
    return (
     <>
       <div className="text-3xl text-center flex justify-between mx-20 mb-5 mt-5">
            <div className="font-bold">
                  Ecommerce Store
            </div>

            <div>
              <button type="button" className="text-2xl bg-indigo-500 hover:bg-indigo-700 px-3 py-2 rounded-lg text-white">    
                  Cart (5 items)
              </button>
            </div>
       </div> 
     </>
     )
   }
 
 export default Navbar;
 