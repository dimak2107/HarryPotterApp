import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";

interface RequireAuthProps {
  children: JSX.Element | null;
}

const RequireNoAuth = ({ children }: RequireAuthProps) => {
  const { isAuth } = useAppSelector((state) => state.authReducer);

  if (isAuth) {
    return <Navigate to={"/"} />;
  }
  return children;
};

export default RequireNoAuth;