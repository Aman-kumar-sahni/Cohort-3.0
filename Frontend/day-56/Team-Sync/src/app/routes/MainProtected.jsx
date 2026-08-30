import React from "react";
import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const MainProtected = () => {
  const { employee, isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!employee) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default MainProtected;