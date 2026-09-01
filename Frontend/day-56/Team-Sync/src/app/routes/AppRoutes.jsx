
import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { useDispatch } from "react-redux";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Login from "../../features/auth/ui/Login";
import Register from "../../features/auth/ui/Register";



import PublicProtected from "./PublicProtected";
import MainProtected from "./MainProtected";

import { currentEmployee } from "../../features/auth/state/auth/authAction";
import { commonRoutes } from "./commonRoutes";
import RoleBasedRoute from "./RoleBasedRoute";
import { adminRoutes } from "./adminRoutes";
import { employeeRoutes } from "./employeeRoutes";

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentEmployee());
  }, [dispatch]);

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
          path: "/home",
          element: <DashboardLayout />,
          children: [...commonRoutes,{
            element:<RoleBasedRoute allowedRoles={"admin"}/>,
            children:adminRoutes,
            
          },{
            element:<RoleBasedRoute allowedRoles={"employee"}/>,
            children:employeeRoutes,
          }
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;

