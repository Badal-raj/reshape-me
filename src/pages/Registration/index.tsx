import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { RegistrationPage } from "./Registration";
import { setRegistrationData } from "../../redux/features/registration/registrationSlice";
import { RootState } from "../../redux/app/Store";

interface Form_Data {
  userName: string;
  emailId: string;
  mobNumber: string | number;
  password: string;
}

export const Registration: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { registeredData } = useSelector(
    (state: RootState) => state.registerData
  );

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [fields, setFields] = useState<Form_Data>({
    userName: "",
    emailId: "",
    mobNumber: "",
    password: "",
  });

  const [errors, setErrors] = useState<Form_Data>({
    userName: "",
    emailId: "",
    mobNumber: "",
    password: "",
  });

  const formValidation = () => {
    let isFormValid = true;
    if (!fields.userName) {
      errors.userName = "This field can't be blank";
      isFormValid = false;
    }
    if (!fields.emailId) {
      errors.emailId = "This field can't be blank";
      isFormValid = false;
    }
    if (!fields.mobNumber) {
      errors.mobNumber = "This field can't be blank";
      isFormValid = false;
    }
    if (!fields.password) {
      errors.password = "This field can't be blank";
      isFormValid = false;
    }
    setErrors({ ...errors });
    return isFormValid;
  };

  const handleLoginBack = () => {
    navigate("/");
  };

  const handleEyeClick = () => {
    setShowPassword((preState) => !preState);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setErrors((prev)=>({...prev, [name]: !value ? "This field can't be blank" : ""}))
    setFields((prev) => ({ ...prev, [name]: value }));
   
  };

  const resetFields = () => {
    setFields({
      userName: "",
      emailId: "",
      mobNumber: "",
      password: "",
    });
  };

  const handleSignUp = (e: React.MouseEvent) => {
    e.preventDefault();
    if (formValidation()) {
      if (registeredData.length > 0) {
        let existIndex = registeredData.findIndex(
          (itm) =>
            itm.emailId === fields.emailId || itm.mobNumber === fields.mobNumber
        );
        if (existIndex >= 0) {
          toast.warning("User alredy exist");
        } else {
          dispatch(setRegistrationData({ ...fields }));
          resetFields();
        }
      } else {
        dispatch(setRegistrationData({ ...fields }));
        resetFields();
      }
    }
  };

  return (
    <RegistrationPage
      handleLoginBack={handleLoginBack}
      handleEyeClick={handleEyeClick}
      showPassword={showPassword}
      handleChange={handleChange}
      formData={fields}
      handleSignUp={handleSignUp}
      errors={errors}
    />
  );
};
