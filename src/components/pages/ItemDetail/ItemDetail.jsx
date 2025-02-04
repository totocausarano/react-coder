import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../products";

export const ItemDetail = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  console.log("recibimos el id", id);
  useEffect(() => {
    let produtcSelected = products.find(
      (product) => product.id === parseInt(id)
    );
    console.log("🔍 Producto encontrado:");
    setItem(produtcSelected);
  }, [id]);
  return (
    <div>
      <h1>{item?.title}</h1>
      <p>{item?.description}</p>
      <p>{item?.price}</p>
    </div>
  );
};
