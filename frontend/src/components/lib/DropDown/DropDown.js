import React from "react";
import Option from "./Option";

export default function DropDown({ children, className, required, onChange }) {
  return (
    <select
      required={required}
      className={className + " nw-form-control"}
      onChange={onChange}
    >
      {children}
    </select>
  );
}

DropDown.Option = Option;
