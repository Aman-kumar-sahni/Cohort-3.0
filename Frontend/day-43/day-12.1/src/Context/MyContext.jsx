import { createContext, useState } from "react";

export const MyStore= createContext()


export const ContextProvider =({children})=>{
    const [toggle,setToggle]=useState(true)
    const [cartItem,setCartItem]=useState([])
return  <MyStore.Provider value={{toggle,setToggle,cartItem,setCartItem}}>
    {children}
</MyStore.Provider>


}