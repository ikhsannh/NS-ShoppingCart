import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Store from "./pages/Store"
import Success from "./pages/Success"
import Cancel from "./pages/Cancel"
import CartProvider from "./CartContext"

function App() {
    return (
       <CartProvider> 
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<Store />} />
                <Route path="success" element={<Success />} />
                <Route path="cancel" element={<Cancel />} />
            </Routes>
        </BrowserRouter>
       </CartProvider>
    )
}

export default App