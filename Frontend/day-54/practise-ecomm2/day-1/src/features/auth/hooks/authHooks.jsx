import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../state/authActions";

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
    // const response = await  loginHandleApi(data)
    // localStorage.setItem("accessToken",response.accessToken)
    // dispatch(addUser(response))
dispatch(loginUserAction(data))
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