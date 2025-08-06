import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// interface protectedRouteProps {
//   children?: React.ReactNode;
//   isLoggedIn: boolean;
// }

// export const ProtectedRoute: React.FC<protectedRouteProps> = ({
//   children,
//   isLoggedIn,
// }) => {
//   return isLoggedIn ? children : <Navigate to="/" />;
// };

export const ProtectedRoute:React.FC = () => {
 
  let auth =  sessionStorage.getItem('token');
  return auth ? <Outlet /> : <Navigate to="/" />;
};
