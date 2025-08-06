import { useNavigate } from "react-router-dom";
import { ForgotPasswordPage } from "./ForgotPassword";

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return <ForgotPasswordPage handleBack={handleBack} />;
};
