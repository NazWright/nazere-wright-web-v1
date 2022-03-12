import React from "react";

export default function FormTextInput({
  type,
  className,
  placeholder,
  onFocus,
  onChange,
  hidden,
}) {
  return (
    <input
      type={type}
      className={className || "nw-control"}
      placeholder={placeholder}
      onFocus={onFocus}
      hidden={hidden}
      onChange={onChange}
    />
  );
}
