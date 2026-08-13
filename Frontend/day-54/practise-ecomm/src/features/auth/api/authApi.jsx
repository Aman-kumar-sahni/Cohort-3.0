import { api } from "../../../config/api"

export const loginUserApi=async(credentials)=>{
try{
let res = await api.post("/auth/login",credentials);

return res.data
}catch(errors){
console.log(errors.message)
}
}
export const hydrateUserApi = async () => {
  const token = localStorage.getItem("accesstoken");


  try {
    const res = await api.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
return res.data
  } catch (errors) {
    console.log(errors.message);
  }
};