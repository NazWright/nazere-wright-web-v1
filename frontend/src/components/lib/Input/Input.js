import React from "react";

export default function Input({
  type,
  className,
  placeholder,
  onFocus,
  hidden,
  name,
  value,
  onChange,
}) {
  return (
    <input
      type={type}
      className={className || "nw-input"}
      placeholder={placeholder}
      onFocus={onFocus}
      name={name}
      hidden={hidden}
      value={value}
      onChange={onChange}
    />
  );
}
