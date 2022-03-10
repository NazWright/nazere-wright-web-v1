import React from "react";

export default function Option({ selected, disabled, hidden, children }) {
  return (
    <option selected={selected} disabled={disabled} hidden={hidden}>
      {children}
    </option>
  );
}
