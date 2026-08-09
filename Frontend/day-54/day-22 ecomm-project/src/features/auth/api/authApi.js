import api from "../../../config/api"

export const  LoginApi= async (credential)=>{
    try{
   const res =  await api.post("/auth/login",credential)
return res.data
    }catch(errors){
        console.log(errors.message)
    }

}

export const hydrateApi = async () => {
  const token = localStorage.getItem("accesstoken");

  if (!token) {
    return null;
  }

  try {
    const res = await api.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    console.log(error.message);

    return null;
  }
};