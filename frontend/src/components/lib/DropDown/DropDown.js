import React from "react";
import Option from "./Option";

export default function DropDown({ children, className }) {
  return <select className={className}>{children}</select>;
}

DropDown.Option = Option;

// need to be typed
