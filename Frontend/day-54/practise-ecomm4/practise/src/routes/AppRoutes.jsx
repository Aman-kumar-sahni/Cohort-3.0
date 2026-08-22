import React, { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import PublicProtected from "./PublicProtected";
import AuthLayouts from "../app/layouts/AuthLayouts";
import MainProtected from "./MainProtected";

import Login from "../features/auth/ui/Login";
import Register from "../features/auth/ui/Register";

import MainLayouts from "../app/layouts/MainLayouts";

import Home from "../shared/ui/Home";
import Cart from "../features/cart/ui/Cart";
import Products from "../features/products/ui/Products";
import Orders from "../features/orders/ui/Orders";
import { useDispatch } from "react-redux";
import About from "../shared/ui/About";
import { hydrateUserAction } from "../features/auth/state/authAction";

const AppRoutes = () => {
const dispatch = useDispatch();

useEffect(() => {
  const hydrateUser = async () => {
    try {

      dispatch(hydrateUserAction());
    } catch (error) {
      console.log(error.message);
    }
  };

  hydrateUser();
}, [dispatch]);
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
path:"login",
element:<Login/>
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
            },{
              path:"About",
              element:<About/>
            }
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;