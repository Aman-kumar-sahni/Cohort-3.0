import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addUsers } from "../state/authSlice";
import { Navigate, useNavigate } from "react-router";
import { loginUserApi } from "../api/authApi";

const useAuth = () => {
    const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const loginHandle = async(data) => {
    const response= await loginUserApi(data)
    console.log(response)
    localStorage.setItem("accesstoken",response.accessToken)
dispatch(addUsers(response))

  };

  const registerHandle = (data) => {
  };

  
  return {
    register,
    handleSubmit,
    watch,
    reset,
    errors,
    loginHandle,
    registerHandle,
  };
};

export default useAuth;