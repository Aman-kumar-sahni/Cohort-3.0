import { api } from "../../../config/api";
export const loginHandleApi=async (credentials)=>{
 const res = await api.post("/auth/login",credentials)
 return res.data


}


export const hydrateUser=async()=>{
    const token = localStorage.getItem("accessToken")
    const res = await api.get("/auth/me",{
        headers:{
            Authorization:`Bearer ${token}`
        }

    }          ,
    

)
    return res.data

}