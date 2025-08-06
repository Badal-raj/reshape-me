import React from "react";

import { running_wellness } from "../../constant/images";
import {
  TextBoxField,
  CheckBoxField,
  PasswordField,
  Button,
} from "../../component/comman";
import { WelcomeText } from "../../constant/common";

interface formDataProps{
  userId: string,
  password: string
}

interface LoginPageProps {
  handleCreateAccount: React.MouseEventHandler;
  handleForgotPassword: React.MouseEventHandler;
  handleEyeClick: React.MouseEventHandler;
  habdleLogin: React.MouseEventHandler;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword: boolean;
  formData: formDataProps,
}

export const LoginPage: React.FC<LoginPageProps> = ({
  handleCreateAccount,
  handleForgotPassword,
  handleEyeClick,
  habdleLogin,
  handleChange,
  showPassword,
  formData
}) => {
  return (
    <div className="login-page-container d-flex">
      <div className="login-page-body d-flex no-overflow bg-white">
        <div className="row mx-5">
          <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
            <div className="d-flex wellness-container">
              <div className="pt-2 pe-2">
                <span className="d-flex">
                  <span className="diamond-shape"></span>
                  <span className="diamond-shape"></span>
                </span>
                <span className="d-flex">
                  <span className="diamond-shape"></span>
                  <span className="diamond-shape"></span>
                </span>
              </div>
              <div className="well-text-format">Wellness</div>
            </div>
            <h6 className="welcome-text">Welcome Back</h6>
            <p className="theme-text-style">{WelcomeText}</p>
            <div className="input-wrapper my-3">
              <TextBoxField
                name='userId'
                type="text"
                id="textField"
                className="input-field"
                placeholder=" "
                label="Mob. number or E-mail*"
                onChange={handleChange}
                value={formData.userId}
              />
            </div>
            <div className="input-wrapper">
              <PasswordField
                name='password'
                type={showPassword ? "text" : "password"}
                id="passwordfield"
                className="input-field"
                placeholder=" "
                label="Password*"
                handleEyeClick={handleEyeClick}
                onChange={handleChange}
                showPassword={showPassword}
                value={formData.password}
              />
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                <div className="d-flex my-3">
                  <CheckBoxField
                    type="checkbox"
                    id="remember-checkbox-id"
                    label="Remember me"
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div className="d-flex my-3">
                  <span
                    className="theme-link-style"
                    onClick={handleForgotPassword}
                  >
                    Forgot Password?
                  </span>
                </div>
              </div>
            </div>
            <div className="">
              <Button className="button-style w-100" children="Log In" onClick={habdleLogin}/>
            </div>
            <span className="d-flex mt-3 d-flex">
              <span className="info-text me-2">Not registered yet?<span className="theme-link-style mx-2" onClick={handleCreateAccount}> Create an account</span></span>
            </span>
          </div>
          <div className="m-0 col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
            <img
              src={running_wellness}
              alt="login-images"
              className="w-100 img-responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
