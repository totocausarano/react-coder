import { Navbar } from "./components/layouts/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemlistcontainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetail } from "./components/pages/ItemDetail/ItemDetail";
import { Cart } from "./components/pages/carrito/Cart";
function App() {
  console.log("App");
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:name" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
