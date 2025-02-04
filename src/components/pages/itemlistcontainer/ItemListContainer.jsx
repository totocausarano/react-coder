import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../products";
import { ProductCard } from "../../common/ProductCard";
export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    let filteredProducts = products.filter((product) => {
      return product.category === name;
    });
    const getProduct = new Promise((resolve, reject) => {
      const isLogged = true;
      if (isLogged) {
        resolve(!name ? products : filteredProducts);
      } else {
        reject("No se pudo cargar los productos");
      }
    });
    getProduct
      .then((result) => {
        setItems(result);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, [name]);
  return (
    <div>
      {items.map((product) => (
        <ProductCard
          key={product.id}
          pictureUrl={product.pictureUrl}
          title={product.title}
          price={product.price}
          id={product.id}
        />
      ))}
    </div>
  );
};
