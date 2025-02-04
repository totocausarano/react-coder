import { Link } from "react-router-dom";
export const Cart = () => {
  return (
    <div>
      <h1>Carrito</h1>
      <Link to="/">Volver al inicio</Link>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
};
