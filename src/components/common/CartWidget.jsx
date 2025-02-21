import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  let total = getTotalItems(); 
  
  return (
    <Link to="/cart">
      <HiOutlineShoppingCart />
      <h2>{total}</h2>
    </Link>
  );
};
