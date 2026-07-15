import { createContext, useState } from "react";
import App from "../../App";

export const myStore = createContext()


export const ContextProvider=({children})=>{
    const [data ,setData]=useState("hie")
    return <myStore.Provider value={data} >
{children}
    </myStore.Provider>
}
   