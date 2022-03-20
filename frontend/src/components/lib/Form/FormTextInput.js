import React from "react";

export default function FormTextInput({
  type,
  className,
  placeholder,
  onFocus,
  onChange,
  hidden,
  required,
  min,
  max,
  length,
  pattern,
}) {
  return (
    <input
      type={type}
      className={className + " nw-form-control"}
      placeholder={placeholder}
      onFocus={onFocus}
      hidden={hidden}
      onChange={onChange}
      pattern={pattern}
      required={required}
      min={min}
      max={max}
      length={length}
    />
  );
}
