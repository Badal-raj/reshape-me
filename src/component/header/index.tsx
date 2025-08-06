import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Theme_Logo } from "../../constant/svgicons";
import { setloginData } from "../../redux/features/login/loginSlice";

interface loginFieldsProps {
  userId: string;
}

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const [showpopUp, setShowPopUp] = useState<boolean>(false);
  const dispatch = useDispatch();

  const [fields, setFields] = useState<loginFieldsProps>({
    userId: ""
  });

  const handleAvatar = () => {
    setShowPopUp((prevState) => !prevState);
  };

  const handleLogOut = () => {
    setFields({
      userId: ""
    })
    dispatch(setloginData({ fields: fields.userId, isAuth: false}));
    sessionStorage.setItem("token", "");
    navigate("/");
  };

  return (
    <div className="header-container">
      <div className="d-flex  align-items-center mx-2">
        <img src={Theme_Logo} alt="logo" style={{ width: "60%" }} />
        <div className="avatar-icon">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle"
            style={{ width: "50px" }}
            alt="Avatar"
            onClick={handleAvatar}
          />
          <div className={showpopUp ? "avatar-popover" : "d-none"}>
            <span className="theme-link-style">Profile</span>

            <span className="theme-link-style" onClick={handleLogOut}>
              Sign out
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
