import Login from "../features/auth/ui/Login";
import Register from "../features/auth/ui/Register";

import PublicProtected from "./PublicProtected";
import MainProtected from "./MainProtected";

import AuthLayout from "../app/layouts/AuthLayout";
import MainLayout from "../app/layouts/MainLayout";
import Home from "../shared/ui/Home"
import Cart from "../features/cart/ui/Cart";
import Product from "../features/product/ui/Product";
import Order from "../features/orders/ui/Order";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { useEffect } from "react";
import { hydrateUserApi } from "../features/auth/api/authApi";
import { useDispatch } from "react-redux";
import { addUsers } from "../features/auth/state/authSlice";

const AppRoutes = () => {
const dispatch= useDispatch()


  useEffect( ()=>{
    (async()=>{
      try {
const res = await hydrateUserApi()
 dispatch(addUsers(res))

    }catch(errors){
    }
    })()
    
  },[])
  const router = createBrowserRouter([
    {
      element: <PublicProtected />,

      children: [
        {
          path: "/",
          element: <AuthLayout />,

          children: [
            {
              index: true,
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },

    {
      element: <MainProtected />,

      children: [
        {
          path: "/main",
          element: <MainLayout />,

          children: [
            {
              index: true,
              element:<Home/>
            },
            {
              path: "cart",
              element: <Cart />,
            },
            {
              path: "product",
              element: <Product />,
            },
            {
              path: "orders",
              element: <Order />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;