import { useForm } from "react-hook-form";
import { loginHandleApi } from "../api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";

const authHooks = () => {
    const dispatch = useDispatch()
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginHandle = async  (data) => {
    const response = await  loginHandleApi(data)
    localStorage.setItem("accessToken",response.accessToken)
    dispatch(addUser(response))

    reset()

  };

  const registerHandle = (data) => {
    console.log(data);
  };

  

  return {
    register,
    watch,
    reset,
    handleSubmit,
    errors,
    loginHandle,
    registerHandle,
  };
};

export default authHooks;