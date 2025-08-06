import React from "react";

interface CheckBoxProps {
  type: string;
  id?: string;
  className?: string;
  label?: string;
}

export const CheckBoxField: React.FC<CheckBoxProps> = ({
  type,
  id,
  className,
  label,
}) => {
  return (
    <>
      <input type={type} id={id} className={className}></input>
      <span className="info-text ms-2">{label}</span>
    </>
  );
};
