import React from "react";

import "../styles/components/input.scss";

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  readOnly,
  name,
}) => {
  return (
    <div className="inputContainer">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
    </div>
  );
};

export default Input;

