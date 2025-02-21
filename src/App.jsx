import { Navbar } from "./components/layouts/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemlistcontainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetail } from "./components/pages/ItemDetail/ItemDetail";
import { Cart } from "./components/pages/carrito/Cart";
import { CartContextProvider } from "./context/CartContext";
import { Checkout } from "./components/pages/checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} /> 
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}
export default App;
