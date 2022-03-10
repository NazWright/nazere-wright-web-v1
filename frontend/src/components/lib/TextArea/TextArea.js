import React from "react";

export default function TextArea({ text, placeholder }) {
  return <textarea placeholder={placeholder}>{text}</textarea>;
}
