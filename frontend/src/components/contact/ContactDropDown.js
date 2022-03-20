import React from "react";
import DropDown from "../lib/DropDown/DropDown";

export default function ContactDropDown({ options, required }) {
  return (
    <DropDown className="fluid-width" required={required}>
      {options.length > 0 &&
        options.map((option) => {
          return <DropDown.Option {...option}>{option.text}</DropDown.Option>;
        })}
    </DropDown>
  );
}
