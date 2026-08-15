import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { useDispatch } from "react-redux";

import PublicProtected from "./PublicProtected";
import MainProtected from "./MainProtected";

import AuthLayouts from "../app/layouts/AuthLayouts";
import MainLayouts from "../app/layouts/MainLayouts";

import Login from "../features/auth/ui/Login";
import Register from "../features/auth/ui/Register";

import Cart from "../features/cart/ui/Cart";
import Products from "../features/products/ui/Products";
import Orders from "../features/orders/ui/Orders";
import Home from "../shared/ui/Home";

import { addUser, removeUser } from "../features/auth/state/authSlice";
import { hydrateUserAction } from "../features/auth/state/authActions";

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
    
        dispatch(hydrateUserAction())
      } catch (error) {
    console.log(error.message)
      }
    })();
  }, []);

  const router = createBrowserRouter([
    {
      element: <PublicProtected />,
      children: [
        {
          path: "/",
          element: <AuthLayouts />,
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
          element: <MainLayouts />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "home",
              element: <Home />,
            },
            {
              path: "cart",
              element: <Cart />,
            },
            {
              path: "products",
              element: <Products />,
            },
            {
              path: "orders",
              element: <Orders />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;