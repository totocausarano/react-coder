import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
export const CartWidget = () => {
  return (
    <Link to="/cart">
      <HiOutlineShoppingCart />
    </Link>
  );
};
