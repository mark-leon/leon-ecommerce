import { createContext, useContext, useReducer } from "react";
import { Dummy } from "../Components/DummyData/Dummy";
import { cartReducer, productReducer } from "./Reducer";

const Cart = createContext();
const Context = ({children}) =>{
    const [state,dispatch] = useReducer(cartReducer,{
        products: Dummy,
        cart:[],
    })
    console.log(state.cart)
    const [productState,productDispatch] = useReducer(productReducer,{
        searchQuery:"",
    })
    return (
        <Cart.Provider value = {{state,dispatch,productState,productDispatch}}>
            {children}
        </Cart.Provider>
    )
}

export const CartState = () =>{
    return useContext(Cart);
};

export default Context;