import React from "react";
import DropDown from "../lib/DropDown/DropDown";

export default function ContactDropDown({ options, required, onChange }) {
  return (
    <DropDown className="fluid-width" required={required} onChange={onChange}>
      {options.length > 0 &&
        options.map((option) => {
          return (
            <DropDown.Option {...option} value={option.text}>
              {option.text}
            </DropDown.Option>
          );
        })}
    </DropDown>
  );
}
