import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import AuthLayout from "../layouts/AuthLayout";

import Login from "../../features/auth/ui/Login";
import Register from "../../features/auth/ui/Register";

import HomePage from "../../features/dashboard/ui/HomePage";
import DashboardLayout from "../layouts/DashboardLayout";

import Employee from "../../features/employee/ui/Employee";
import Departments from "../../features/departments/ui/Departments";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },

    {
      path: "/home",
      element: <DashboardLayout />,
      children: [
        {
          path: "",
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
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;