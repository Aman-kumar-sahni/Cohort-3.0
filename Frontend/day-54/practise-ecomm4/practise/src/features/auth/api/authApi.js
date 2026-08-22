// import { api } from "../../../config/api"

// export const loginHandleApi=async(credentials)=>{
//     try {
//         const res = await api.post("/auth/login",credentials)
// return res.data

//     } catch (error) {
//         console.log(error.message)
//     }


// }


// export const hydrateUserApi = async () => {
//   const token = localStorage.getItem("accessToken");

//   const res = await api.get("/auth/me", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   return res.data;
// };