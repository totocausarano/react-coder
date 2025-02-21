import {useContext, useState} from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

export const Counter = ({item}) => {
    const [contador , setContador] = useState(1);
    const {addToCart} = useContext(CartContext);
    const sumar = () => {
        if (contador < item.stock){
            setContador(contador + 1);
        }
    };
    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }};
    const onAdd = () => {
        let objetoParaELCarrito = {
            ...item,
            quantity: contador,
        };
        addToCart(objetoParaELCarrito)
        Swal.fire({
            title: "¡Producto agregado!",
            text: `${item.title} (${contador}) se añadió al carrito.`, 
            imageWidth: 100,
            imageHeight: 100,
            icon: "success",
            showConfirmButton: false,
            timer: 1500, 
        });
    };
    return (
        <div>
            <button onClick={sumar}>Sumar</button>
            <h2>{contador}</h2>
            <button onClick={restar}>Restar</button>
            <button onClick={onAdd}> Agregar al carrito </button>

        </div>
    )
    };

