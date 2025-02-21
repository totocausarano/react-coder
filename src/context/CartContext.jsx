import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart([...cart, product]);
    }
    const removeCart = ()=>{
        setCart([]);
    }
    const removeById = (id)=>{
        let nuevoArray = cart.filter (elemento => elemento.id !== id );
        setCart(nuevoArray)
    }
    const getTotalAmaount = () =>{
        let acc = 0
        for (let i = 0; i < cart.length; i++ ){
            acc += cart [i].price * cart [i].quantity;
        }
        return acc;
    }
    const getTotalItems = () =>{
        let total = cart.reduce ((acc, item ) => {
            return acc + item.quantity
        },0)
        return total;
    }
    let data = {
        cart,
        addToCart,
        removeCart,
        removeById,
        getTotalAmaount,
        getTotalItems,
    }
    return <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>

}
