import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';

import { LoginPage } from "./LoginPage";
import { setloginData } from "../../redux/features/login/loginSlice";
import { RootState } from "../../redux/app/Store";

interface loginFieldsProps {
  userId: string;
  password: string;
}

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const logs_data = useSelector((state: RootState) => state);

  const { registeredData } = logs_data.registerData;

  const [fields, setFields] = useState<loginFieldsProps>({
    userId: "",
    password: "",
  });

  const handleLogin = () => {
    if(registeredData.length> 0){
      let existUserIndex = registeredData.findIndex((item)=>(item.emailId === fields.userId || item.mobNumber === fields.userId) && (item.password === fields.password));
      if(existUserIndex >=0){
        sessionStorage.setItem("token", "your-token");
        dispatch(setloginData({fields: fields.userId, isAuth: true}));
        setFields({
          userId: "",
          password: ""
        });
        navigate("/dashboard-page")
      }else{
        toast.warning('Incorrect userId or password OR User not register yet');
      }
    }else{
      toast.error('User not exist please register the user')
    }
  };

  const handleCreateAccount = () => {
    navigate("/signup");
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  const handleEyeClick = () => {
    setShowPassword((preState) => !preState);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <LoginPage
      handleCreateAccount={handleCreateAccount}
      handleForgotPassword={handleForgotPassword}
      handleEyeClick={handleEyeClick}
      habdleLogin={handleLogin}
      handleChange={handleChange}
      showPassword={showPassword}
      formData={fields}
    />
  );
};
