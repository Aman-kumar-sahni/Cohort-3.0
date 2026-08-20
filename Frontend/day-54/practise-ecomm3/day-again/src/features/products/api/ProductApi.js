import { api } from "../../../config/api";

export const productApi  =async ()=>{
    try {
        
  const res = await api.get("/products");
  console.log(res.data.products)
        return res.data.products
    } catch (error) {
        console.log(error.message)
        
    }

}

