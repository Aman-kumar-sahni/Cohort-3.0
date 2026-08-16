
import React, { useEffect } from "react";
import PublicProtected from "./PublicProtected";
import AuthLayouts from "../app/layouts/AuthLayouts";

import Login from "../features/auth/ui/Login";
import Register from "../features/auth/ui/Register";

import MainProtected from "./MainProtected";
import MainLayouts from "../app/layouts/MainLayouts";

import Cart from "../features/cart/ui/Cart";
import Products from "../features/products/ui/Products";
import Orders from "../features/orders/ui/Orders";
import Home from "../shared/ui/Home";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router";
import { useDispatch } from "react-redux";
import { hydateUserAction } from "../features/auth/hooks/authAction";


const AppRoutes = () => {
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(hydateUserAction());
}, [dispatch]);

  const route = createBrowserRouter([

    // =========================
    // AUTH ROUTES
    // =========================
    {
      element: <PublicProtected />,

      children: [
        {
          path: "/",
          element: <AuthLayouts />,

          children: [

            // /login → Login
            {
              path: "login",
              element: <Login />,
            },

            // /register → Register
            {
              path: "register",
              element: <Register />,
            },

            // / → automatically /login
            {
              index: true,
              element: <Navigate to="login" replace />,
            },

          ],
        },
      ],
    },


    // =========================
    // MAIN ROUTES
    // =========================
    {
      element: <MainProtected />,

      children: [
        {
          path: "/main",
          element: <MainLayouts />,

          children: [

            // /main → automatically /main/home
            {
              index: true,
              element: <Navigate to="home" replace />,
            },

            // /main/home → Home
            {
              path: "home",
              element: <Home />,
            },

            // /main/cart → Cart
            {
              path: "cart",
              element: <Cart />,
            },

            // /main/products → Products
            {
              path: "products",
              element: <Products />,
            },

            // /main/orders → Orders
            {
              path: "orders",
              element: <Orders />,
            },

          ],
        },
      ],
    },

  ]);


  return <RouterProvider router={route} />;
};


export default AppRoutes;

