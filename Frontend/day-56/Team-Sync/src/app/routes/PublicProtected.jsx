import React from "react";
import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const PublicProtected = () => {
  const { employee, isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (employee) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
};

export default PublicProtected;