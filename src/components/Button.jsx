import React from "react";

import '../styles/components/button.scss';

const Button = ({ variant, onClick, children, style,type, ...rest }) => {
  const defaultStyle = {
    cursor: "pointer",
    whiteSpace: "nowrap",
    ...style,
  };

  return (
    <button
      className={`${variant}_btn`}
      onClick={onClick}
      type={type}
      style={defaultStyle}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
