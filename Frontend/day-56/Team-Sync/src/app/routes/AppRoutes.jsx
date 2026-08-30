
import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { useDispatch } from "react-redux";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Login from "../../features/auth/ui/Login";
import Register from "../../features/auth/ui/Register";

import HomePage from "../../features/dashboard/ui/HomePage";
import Employee from "../../features/employee/ui/Employee";
import Departments from "../../features/departments/ui/Departments";

import PublicProtected from "./PublicProtected";
import MainProtected from "./MainProtected";

import { currentEmployee } from "../../features/auth/state/auth/authAction";

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
          children: [
            {
              index: true,
              element: <HomePage />,
            },
            {
              path: "employee",
              element: <Employee />,
            },
            {
              path: "departments",
              element: <Departments />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;

