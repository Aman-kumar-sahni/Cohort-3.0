import { useForm } from "react-hook-form"
import { loginHandleApi } from "../api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";

export const useHooks =()=>{
  const dispatch = useDispatch()

const {
  register,
  handleSubmit,
  formState: { errors },
  watch,
  reset,
} = useForm();


const loginHandle=async (data)=>{
  
const res = await loginHandleApi(data)
localStorage.setItem("accessToken",res.accessToken)
dispatch(addUser(res))

reset()
}
return {register,handleSubmit,errors,loginHandle}

}