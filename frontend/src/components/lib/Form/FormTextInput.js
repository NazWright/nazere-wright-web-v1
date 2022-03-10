import React from "react";

export default function FormTextInput({
  type,
  className,
  placeholder,
  onFocus,
}) {
  return (
    <input
      type={type}
      className={className || "nw-control"}
      placeholder={placeholder}
      onFocus={onFocus}
    />
  );
}
