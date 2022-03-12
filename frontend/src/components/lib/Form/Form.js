import React from "react";
import FormTextArea from "./FormTextArea";
import FormTextInput from "./FormTextInput";

const defFormClassNames =
  "contact-me-form fluid-width d-flex justify-content-center flex-direction-col";

function Form({ children, className, onSubmit }) {
  return (
    <form className={className || defFormClassNames} onSubmit={onSubmit}>
      {children && children}
    </form>
  );
}

Form.Input = FormTextInput;
Form.TextArea = FormTextArea;

export default Form;
