import React from "react";

interface ButtonProps {
  onClick?: React.MouseEventHandler;
  className: string;
  children: string;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  children,
}) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
