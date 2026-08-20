import { api } from "../../../config/api";

export const productApi  =async ()=>{
    try {
        
  const res = await api.get("/products");
        return res.data.products
    } catch (error) {
        console.log(error.message)
        
    }

}

export const productCategory= async ()=>{
    try {
        const res= await api.get("/products/category-list")

    return res.data

    } catch (error) {
        console.log(error.message)
        
    }
}

