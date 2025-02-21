import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import "./Cart.css";

export const Cart = () => {
  const {cart, removeCart, removeById, getTotalAmaount} = useContext(CartContext);
  let total = getTotalAmaount();
  
  return (
    <div className="cart-container">
      <h1 className="cart-title">Carrito</h1>
      <div className="cart-items">
        {cart.map((product) => (
          <div key={product.id} className="cart-item">
            <img src={product.pictureUrl} alt={product.title} className="cart-item-image" />
            <div className="cart-item-info">
              <h2 className="cart-item-title">{product.title}</h2>
              <h2 className="cart-item-price">${product.price}</h2>
              <h2 className="cart-item-quantity">Cantidad: {product.quantity}</h2>
            </div>
            <button className="cart-button delete" onClick={() => removeById(product.id)}>
              Eliminar
            </button>
          </div>
        ))}
      </div>
      
      <div className="cart-footer">
        <Link to="/" className="cart-link">Volver al inicio</Link>
        <button className="cart-button clear" onClick={removeCart}>Vaciar Carrito</button>
        <h2 className="cart-total">El total a pagar es: ${total}</h2>
        {cart.length > 0 && (
          <Link to="/checkout" className="cart-link checkout">Finalizar compra</Link>
        )}
      </div>
    </div>
  );
};
