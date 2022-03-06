import React from "react";

const defFormClassNames =
  "contact-me-form fluid-width d-flex justify-content-center flex-direction-col";

export default function Form({ children, className }) {
  return (
    <form className={className || defFormClassNames}>
      {children && children}
    </form>
  );
}
