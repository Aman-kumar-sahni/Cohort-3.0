import { createContext, useState } from "react";

export const myStore = createContext()


export const  ContextProvider= ({children})=>{
    const [data ,setData]=useState("name")
    return <myStore.Provider value = {data}>
{children}
    </myStore.Provider>
}