import React from "react";
import { TextBoxField, Button, PasswordField } from "../../component/comman";
import { WelcomeText } from "../../constant/common";
import { unplus_Gym } from "../../constant/images";

interface formDataValue {
  userName: string;
  emailId: string;
  mobNumber: string | number ;
  password: string;
}

interface RegisterationProp {
  handleLoginBack: React.MouseEventHandler;
  handleEyeClick: React.MouseEventHandler;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSignUp: React.MouseEventHandler;
  showPassword: boolean;
  formData: formDataValue;
  errors?: formDataValue;
}

export const RegistrationPage: React.FC<RegisterationProp> = ({
  handleLoginBack,
  handleEyeClick,
  handleChange,
  handleSignUp,
  showPassword,
  formData,
  errors,
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
                type="text"
                name="userName"
                id="user-name"
                placeholder=" "
                className="input-field"
                label="Full Name*"
                value={formData.userName}
                onChange={handleChange}
                error={errors?.userName}
              />
            </div>
            <div className="input-wrapper">
              <TextBoxField
                type="text"
                name="emailId"
                id="email-Id"
                className="input-field"
                placeholder=" "
                label="E-mail*"
                value={formData.emailId}
                onChange={handleChange}
                error={errors?.emailId}
              />
            </div>
            <div className="input-wrapper mt-3">
              <TextBoxField
                type="number"
                name="mobNumber"
                id="mob-number"
                className="input-field"
                placeholder=" "
                label="mob number*"
                value={formData.mobNumber}
                onChange={handleChange}
                error={errors?.mobNumber}
              />
            </div>
            <div className="input-wrapper my-3">
              <PasswordField
                type={showPassword ? "text" : "password"}
                name="password"
                className="input-field"
                placeholder=" "
                label="Password*"
                showPassword={showPassword}
                value={formData.password}
                handleEyeClick={handleEyeClick}
                onChange={handleChange}
                error={errors?.password}
              />
            </div>
            <div className="">
              <Button
                className="button-style w-100"
                children="Sign up"
                onClick={handleSignUp}
              />
            </div>
            <div className="d-flex mt-2">
              <span className="info-text me-2">
                Already have account?
                <span
                  className="theme-link-style mx-2"
                  onClick={handleLoginBack}
                >
                  Log In
                </span>
              </span>
            </div>
          </div>
          <div className="m-0 col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
            <img
              src={unplus_Gym}
              alt="login-images"
              className="w-100 img-responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
