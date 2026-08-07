// src/app/routes/AppRoutes.jsx

import {
  createBrowserRouter,
  Navigate,
} from "react-router";

import { RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../../features/auth/presentation/Login";
import Register from "../../features/auth/presentation/Register";
import MainLayout from "../layouts/MainLayout";
import Home from "../../features/home/presentaion/Home";
import { toast } from "react-toastify";
import { addUser } from "../../features/auth/application/authSlice";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ProtectedRoutes from "./protectedRoutes";
const AppRoutes = () => {
 const dispatch = useDispatch()
  const hydrationUsers =()=>{
 const loggedInuser =  JSON.parse(  localStorage.getItem("loggedInUser"))
 if(!loggedInuser){
  toast.error("unAuthorized Error")
return;
 }
 if(loggedInuser){
  dispatch(addUser(loggedInuser))
 }}
useEffect(()=>{
  hydrationUsers()
},[])

  
  const route = createBrowserRouter([
    {
      element: <AuthLayout />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },

  {
    element:<ProtectedRoutes/>,
    children:[
        {
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Navigate to="/home" replace />,
        },
        {
          path: "/home",
          element: <Home />,
        },
      ],
    },
    ]
  }
  ]);

  return <RouterProvider router={route} />;
};

export default AppRoutes;