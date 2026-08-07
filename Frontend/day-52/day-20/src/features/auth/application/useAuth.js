import { useNavigate } from "react-router"
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./authSlice";
export const useAuth =()=>{
  const dispatch = useDispatch()
const [registerUser,setregisteredUser]=useState(JSON.parse(localStorage.getItem("user"))||[])
console.log(registerUser)
   const navigate =  useNavigate()
   const {
  register,
  handleSubmit,
  watch,
  reset,

  formState: { errors },
} = useForm({
  mode: "onChange",
});

const registerForm =(data)=>{
 let arr = [...registerUser,data]
 setregisteredUser(arr)
 localStorage.setItem("user",JSON.stringify(arr))
 reset()
toast.success("user registered")

}

   
const loginForm =(data)=>{
const user = registerUser.find((val)=>val.email===data.email&&val.password===data.password)
if(!user) return  toast.error("inavlid user")
if(user){
  localStorage.setItem("loggedInUser",JSON.stringify(user))
  dispatch(addUser(user))
  
}
toast.success("user Logged in ")
navigate("/home")

}
return {register,registerForm,handleSubmit,watch,reset,loginForm,errors}


}