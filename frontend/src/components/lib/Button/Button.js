import React from "react";

export default function Button({ children, style, className }) {
  return (
    <button
      style={style}
      className={
        className ||
        "button-container d-flex justify-content-center align-items-center"
      }
    >
      {children}
    </button>
  );
}
