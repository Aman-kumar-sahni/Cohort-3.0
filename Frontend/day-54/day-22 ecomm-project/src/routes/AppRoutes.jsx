import { createBrowserRouter, RouterProvider } from "react-router";

import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";

import AuthLayout from "../app/layout/AuthLayout";
import MainLayout from "../app/layout/MainLayout";

import LoginPage from "../features/auth/ui/pages/LoginPage";
import RegisterPage from "../features/auth/ui/pages/RegisterPage";

import HomePage from "../shared/ui/pages/HomePage";
import OrdersPage from "../features/orders/ui/pages/OrdersPage";
import ProductsPage from "../features/products/ui/pages/ProductsPage";
import CartPage from "../features/cart/ui/pages/CartPage";
import { useEffect } from "react";
import { hydrateApi } from "../features/auth/api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../features/auth/state/authSlice";

const AppRoutes = () => {
  const dispatch = useDispatch()
   useEffect(()=>{
      (async ()=>{
const user = await hydrateApi()
dispatch(addUser(user))
      })()
    },[])
  const route = createBrowserRouter([

   
    // =========================
    // PUBLIC ROUTES
    // =========================
    {
      element: <PublicRoutes />,
      children: [
        {
          path: "/",
          element: <AuthLayout />,
          children: [
            {
              index:true,
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },

    // =========================
    // PROTECTED ROUTES
    // =========================
    {
      element: <ProtectedRoutes />,
      children: [
        {
          path: "/main",
          element: <MainLayout />,
          children: [
            {
              index: true,
              element: <HomePage />,
            },
            {
              path: "order",
              element: <OrdersPage />,
            },
            {
              path: "product",
              element: <ProductsPage />,
            },
            {
              path: "cart",
              element: <CartPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={route} />;
};

export default AppRoutes;