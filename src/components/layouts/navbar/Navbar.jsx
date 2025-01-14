import { CartWidget } from "../../common/CartWidget";
import logo from "../../../assets/logo/logo-mate.png";
export const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="" />
      <div>
        <ul>
          <li>
            <h3>Mates</h3>
          </li>
          <li>
            <h3>Termos</h3>
          </li>
          <li>
            <h3>Materas</h3>
          </li>
          <li>
            <h3>Accesorios</h3>
            <li>Bombillas</li>
            <li>Yerba</li>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};
