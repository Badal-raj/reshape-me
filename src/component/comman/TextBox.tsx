import React from "react";

interface TextBoxProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  id?: string;
  name: string;
  className?: string;
  placeholder: string;
  label?: string;
  value: string | number;
  error?: string | number
}

export const TextBoxField: React.FC<TextBoxProps> = ({
  onChange,
  type,
  id,
  name,
  className,
  placeholder,
  label,
  value,
  error
}) => {
  return (
    <>
    <div className="password-box-style">
      <input
        type={type}
        id={id}
        name={name}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
    {error && <span className="text-danger small-size fw-normal fst-italic">{error}</span>}
    </>
  );
};
