import React from "react";

export default function Input({ type, className, placeholder, onFocus }) {
  return (
    <input
      type={type}
      className={className || "nw-input"}
      placeholder={placeholder}
      onFocus={onFocus}
    />
  );
}
