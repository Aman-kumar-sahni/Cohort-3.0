import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginEmployee } from "../state/auth/authAction";

export const useAuthForm = (defaultValues, onSubmitApi) => {
  const navigate =useNavigate()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
  });



// Login
  const useLogin = (data) => {

  dispatch(loginEmployee(data))
  reset()

};



// Register
 const useRegister = () => {
  
};


  return {
    register,
    handleSubmit,
    errors,
    isLoading,
    serverError,
    useRegister,
    useLogin,
    navigate
  };
};
