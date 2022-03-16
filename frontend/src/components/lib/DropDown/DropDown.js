import React from "react";
import Option from "./Option";

export default function DropDown({ children, className }) {
  return <select className={className + " nw-form-control"}>{children}</select>;
}

DropDown.Option = Option;
