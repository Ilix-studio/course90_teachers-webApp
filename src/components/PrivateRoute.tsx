import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = (): boolean => {
  return true;
};

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  return isAuthenticated() ? <>{children}</> : <Navigate to='/signin' />;
};

export default PrivateRoute;
