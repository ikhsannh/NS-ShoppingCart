const Modal  = ({ setModalOn, setChoice }) => {
    const handleOnClick = ( ) => {
        setChoice(true)
        setModalOn(false)
    }
    const handleCancelClick = () => {
        setChoice(false)
        setModalOn(false)
    }

return (
   <>
    <div className= "bg-gray-100 opacity-90 fixed inset-0">
     <div className="flex h-screen  justify-center items-center">
      <div className="flex-col justify-center bg-zinc-900 py-12 px-24 border-4 border-sky-500 rounded-xl">
       <div className="flex text-lg text-white mb-10"> Showing Modal </div>
        <div className="flex">
         <button onClick={handleOnClick}     className="rounded px-4 py-2 text-white bg-green-400"> Yes </button>
         <button onClick={handleCancelClick} className="rounded px-4 py-2 ml-4 text-white bg-blue-500"> No </button>
        </div>
       </div>    
      </div>
     </div>
   </> 
)
}

export default Modal;