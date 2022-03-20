import React from "react";

export default function Option({
  selected,
  disabled,
  hidden,
  children,
  value,
}) {
  return (
    <option
      selected={selected}
      disabled={disabled}
      hidden={hidden}
      value={value}
    >
      {children}
    </option>
  );
}
