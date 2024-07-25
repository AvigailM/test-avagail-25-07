import React from "react";

type InputProps = {
  label: string;
  defaultValue: string;
  error: string | undefined;
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ label, defaultValue, error, name, handleChange }) => {
   return (
    <div className="input-contanier" key={name}>
      <label className="input-label" >{label}</label>
      <input
        className="input-text"
        type="text"
        name={name}
        defaultValue={defaultValue}
        onChange={(event) => handleChange(event)}
      />
      <div className="input-error">{error}</div>
    </div>
  );
};

export default Input;
