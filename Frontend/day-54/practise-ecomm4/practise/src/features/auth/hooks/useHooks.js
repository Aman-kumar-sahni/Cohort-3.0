import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { loginUserAction } from "../state/authAction";

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
  
// const res = await loginHandleApi(data)
// localStorage.setItem("accessToken",res.accessToken)
dispatch(loginUserAction(data))

reset()
}
return {register,handleSubmit,errors,loginHandle}

}