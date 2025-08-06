import React from "react";

import { colse_eye, open_eye } from "../../constant/svgicons";

interface PasswordProps {
  type: string;
  name: string;
  id?: string;
  placeholder: string;
  className: string;
  label: string;
  showPassword: boolean;
  value: string | number;
  error?: string | number
  handleEyeClick: React.MouseEventHandler;
  onChange?: (Event: React.ChangeEvent<HTMLInputElement>)=>void
}

export const PasswordField: React.FC<PasswordProps> = ({
  type,
  placeholder,
  className,
  name,
  id,
  label,
  showPassword,
  value,
  error,
  handleEyeClick,
  onChange,
}) => {
  return (
    <>
    <div className="password-box-style">
      <input
        type={type}
        name={name}
        id={id}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
      <img
        src={showPassword ? open_eye : colse_eye}
        className="eye-style"
        onClick={handleEyeClick}
      />
    </div>
    {error && <span className="text-danger small-size fw-normal fst-italic">{error}</span>}
    </>
  );
};
