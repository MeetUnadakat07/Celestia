import React from "react";

export const Button = ({ children, onClick, className = "" }) => (
  <button
    type="button"
    onClick={(e) => {
      if (onClick) onClick(e);
    }}
    className={`inline-flex items-center justify-center select-none transition-all duration-200 focus:outline-none ${className}`}
  >
    {children}
  </button>
);

export default Button;
