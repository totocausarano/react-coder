import { useState, useContext } from "react";
import { CartContext } from "../../../context/CartContext.jsx";
import { db } from "../../../firebaseConfig.js";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore"; 
import "./Checkout.css";

export const Checkout = () => {
    const { cart, getTotalAmaount, removeCart } = useContext(CartContext); 
    const [ticketNumber, setTicketNumber] = useState(null);
    const [userInfo, setUserInfo] = useState({
      nombre: "",
      telefono: "",
      email: "",
    });
    const comprar = (evento) => {
      evento.preventDefault();
  
      let total = getTotalAmaount(); 
      let order = {
        buyer: userInfo,
        items: cart,
        total: total,
      };
  

      let ordersCollection = collection(db, "orders");
      const newOrder = addDoc(ordersCollection, order);
      newOrder.then((res) => {
        setTicketNumber(res.id);
        removeCart();
      });
  
      let productsCollection = collection(db, "products");
      order.items.forEach((elemento) => {
        let refDoc = doc(productsCollection, elemento.id);
        updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
      });
    };
  
    const capturarDatos = (evento) => {
      const { value, name } = evento.target;
      setUserInfo({ ...userInfo, [name]: value });
    };
  
    return (
      <div className="checkout-container">
        {ticketNumber ? (
          <div className="ticket-message">
            <h1>Tu comprobante es: {ticketNumber}</h1>
          </div>
        ) : (
          <form onSubmit={comprar} className="checkout-form">
            <h2 className="checkout-title">Finalizar Compra</h2>
            <div className="input-group">
              <input
                type="text"
                placeholder="Nombre"
                name="nombre"
                onChange={capturarDatos}
                className="checkout-input"
                required
              />
              <input
                type="tel"
                placeholder="Teléfono"
                name="telefono"
                onChange={capturarDatos}
                className="checkout-input"
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={capturarDatos}
                className="checkout-input"
                required
              />
            </div>
            <button className="checkout-button">Comprar</button>
          </form>
        )}
      </div>
    );
};
  
 
  