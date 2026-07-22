import { createContext, useState } from "react";
import axios from "axios";
export const MyStore= createContext()

export const ContextProvider =({children})=>{
    const [product,setProducts]=useState([])
 const GetProducts=async ()=>{
       try {
     let res =   await axios.get ('https://fakestoreapi.com/products'
)
     setProducts(res.data)
       }catch(error){
        console.log(error.message)

       }
       
    }
    

    return <MyStore.Provider value= {{product,setProducts,GetProducts}}>{children}</MyStore.Provider>
}