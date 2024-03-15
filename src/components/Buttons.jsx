import React from "react";

function Button({ 
  label,
  border,
  onClick
 }) {
  return (
    <button
    onClick={onClick}
    className={`
  
    ${
      border
        ? ` ${border}`
        : "bg-cyan hover:bg-opacity-95 text-white "
    }
    bg-cyan hover:bg-lightCyan  text-white
    py-4 px-12 font-bold text-base rounded-full duration-300`}
    >
      {label}
    </button>
  );
}

export default Button;
