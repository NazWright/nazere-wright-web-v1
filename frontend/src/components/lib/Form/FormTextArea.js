import React from "react";

export default function FormTextArea({
  placeholder,
  className,
  value,
  hidden,
  onChange,
}) {
  return (
    <textarea
      placeholder={placeholder}
      className={className}
      hidden={hidden}
      onChange={onChange}
    >
      {value}
    </textarea>
  );
}
