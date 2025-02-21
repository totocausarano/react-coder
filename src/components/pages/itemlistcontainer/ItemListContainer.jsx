import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../common/ProductCard";
import {db} from "../../../firebaseConfig.js"
import {collection , addDoc , getDocs , query , where} from "firebase/firestore"
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams();
  
  useEffect(() => {
    let productsCollection = collection(db, "products"); 
    let consulta = productsCollection
    if (name) {
      let porcionDeLaColeccion =  query(productsCollection, where("category", "==", name));
      consulta = porcionDeLaColeccion; 
    }
    const getProducts = getDocs(consulta);
    getProducts
      .then((res) => {
        const array = res.docs.map(elemento => {
          return {
            id: elemento.id,
            ...elemento.data()
          }
        });
        setItems(array); 
      })
      .catch((error) => console.log(error));
  }, [name]);
if (items.length === 0) {
    return <h1>Cargando...</h1>;
  }
  console.log(items)
  return (
    <div className="item-list-container">
      {items.map((product) => (
        <ProductCard
          key={product.id}
          pictureUrl={product.pictureUrl}
          title={product.title}
          price={product.price}
          id={product.id}
          stock={product.stock}
        />
      ))}
    </div>
  );
};
