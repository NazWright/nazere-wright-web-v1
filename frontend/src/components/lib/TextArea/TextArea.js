import React from "react";

export default function TextArea({
  text,
  placeholder,
  name,
  value,
  hidden,
  onChange,
}) {
  return (
    <textarea
      placeholder={placeholder}
      name={name}
      hidden={hidden}
      onChange={onChange}
    >
      {value}
    </textarea>
  );
}
