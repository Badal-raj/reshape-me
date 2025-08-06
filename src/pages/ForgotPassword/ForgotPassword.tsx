import React from "react";
import { TextBoxField, Button } from "../../component/comman";
import { WelcomeText } from "../../constant/common";
import { couple_Wellness } from "../../constant/images";

interface ForgotPasswordProps {
  handleBack: React.MouseEventHandler;
}

export const ForgotPasswordPage: React.FC<ForgotPasswordProps> = ({
  handleBack,
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
                id="textField"
                className="input-field"
                placeholder=" "
                label="User name or E-mail*"
              />
            </div>
            <div className="">
              <Button className="button-style w-100" children="Send Otp" />
            </div>
            <div className="d-flex mt-3 justify-content-end">
              <span className="theme-link-style" onClick={handleBack}>
                Back to login
              </span>
            </div>
          </div>
          <div className="m-0 col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
            <img
              src={couple_Wellness}
              alt="login-images"
              className="w-100 img-responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
