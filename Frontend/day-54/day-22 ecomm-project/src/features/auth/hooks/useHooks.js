
import { useForm } from "react-hook-form";
import {  LoginApi } from "../api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";
export const authHooks =()=>{
 const dispatch = useDispatch()
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
console.log(data)
}
const loginForm =async (data)=>{
  try {
 let response = await   LoginApi(data)
localStorage.setItem("accesstoken",response.accessToken)
      dispatch(addUser(response))


  }catch (erros){
    console.log(erros.message)
  }
   
      
}

    return {
register, handleSubmit,watch,reset,errors,registerForm,
loginForm,

    }
}

