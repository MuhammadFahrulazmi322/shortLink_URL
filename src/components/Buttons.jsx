import React from "react";

function Button({ 
  optionalIcon,
  label,
  disabled, 
  onClick,
  backgroundColor,
  border,
  textColor,
 }) {
  return (
    <button
    onClick={onClick}
    className={`
    ${optionalIcon ? `${backgroundColor} hover:bg-white` : "bg-cyan hover:bg-veryDarkViolet" }
    ${
      border
        ? `${backgroundColor} ${textColor} ${border} ${optionalIcon}`
        : "bg-cyan hover:bg-veryDarkViolet text-white"
    }
    py-4 px-12 max-sm:py-3 max-sm:px-8
    font-bold text-base max-sm:text-sm rounded-full duration-300`}
    >
      {optionalIcon && (
        <span className="text-dark-gray">{optionalIcon} </span>
      )}
      {label}
    </button>
  );
}

export default Button;
