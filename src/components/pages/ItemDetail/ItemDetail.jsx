import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Counter } from "../../common/counter/Counter";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import "./ItemDetail.css";

export const ItemDetail = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let productRef = doc(productsCollection, id);
    const getProduct = getDoc(productRef)
    getProduct
      .then((res) => setItem({...res.data(), id: res.id}))
      .catch((error) => { console.log(error)});
  }, [id]);

  return (
    <div className="item-detail-container">
      <div className="item-detail-card">
        <div className="item-detail-image">
          <img src={item?.pictureUrl} alt={item?.title} />
        </div>
        <div className="item-detail-info">
          <h1 className="item-detail-title">{item?.title}</h1>
          <p className="item-detail-description">{item?.description}</p>
          <p className="item-detail-price">${item?.price}</p>
          <Counter item={item}/>
        </div>
      </div>
    </div>
  );
};
