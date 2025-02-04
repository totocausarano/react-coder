import { Link } from "react-router-dom";
import "./ProductCard.css";
export const ProductCard = ({ pictureUrl, title, price, id }) => {
  return (
    <div>
      <img src={pictureUrl} alt="" />
      <h3>{title}</h3>
      <p>{price}</p>
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </div>
  );
};
