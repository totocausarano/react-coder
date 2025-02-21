import { Link } from "react-router-dom";
import "./ProductCard.css";
export const ProductCard = ({ pictureUrl, title, price, id, stock }) => {
  return (
    <div className="item-card">
      <img className="item-image" src={pictureUrl} alt={title} />
      <h3 className="item-title">{title}</h3>
      <p className="item-price">${price}</p>
      <p className="item-description">Stock: {stock}</p>
      <Link to={`/item/${id}`} className="item-link">Ver detalle</Link>
    </div>
  );
};
