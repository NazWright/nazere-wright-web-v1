import React from "react";

export default function Button({ children, style, className, type, onClick }) {
  return (
    <button
      style={style}
      onClick={onClick}
      type={type}
      className={
        className ||
        "button-container d-flex justify-content-center align-items-center"
      }
    >
      {children}
    </button>
  );
}
