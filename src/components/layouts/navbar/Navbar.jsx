import { CartWidget } from "../../common/CartWidget";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../assets/logo/logo-mate.png";
export const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="Mate Logo" />
      </Link>
      <div>
        <ul>
          <Link to="/category/Mates">Mates</Link>
          <Link to="/category/Termos">Termos</Link>
          <Link to="/category/Materas">Materas</Link>
          <Link to="/category/Accesorios">Accesorios</Link>
        </ul>
      </div>
      <div className="cartwidget">
        <CartWidget />
      </div>
    </nav>
  );
};
