import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "../pages/Login";
import { Registration } from "../pages/Registration";
import { ForgotPassword } from "../pages/ForgotPassword";
import { DashboardContainer } from "../pages/Dashboard";
import { ProtectedRoute } from "./protectedRoute";

export const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard-page" element={<DashboardContainer />} />
        </Route>
        {/* <Route
        path="/dashboard-page"
        element={
          <ProtectedRoute>
            <DashboardContainer />
          </ProtectedRoute>
        }
      /> */}
        {/* <Route path='/dashboard-page' element={<DashboardContainer/>} /> */}
      </Routes>
    </BrowserRouter>
  );
};
