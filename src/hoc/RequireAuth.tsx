import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";

interface RequireAuthProps {
  children: JSX.Element | null;
}

const RequireAuth = ({ children }: RequireAuthProps) => {
  const location = useLocation();
  const { isAuth } = useAppSelector((state) => state.authReducer);

  if (!isAuth) {
    return <Navigate to={"/signin"} state={{ from: location }} />;
  }
  return children;
};

export default RequireAuth;
