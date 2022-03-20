import React, { Component } from "react";
import ContactForm from "./ContactForm";
import { sendContactMessage } from "../../redux/features/contact/contactSlice";
import { connect } from "react-redux";

class ContactFormContainer extends Component {
  render() {
    return (
      <ContactForm
        handleSubmit={this.handleSubmit}
        onInputChang={this.onChange}
      />
    );
  }
  // handle the submission of the contact form
  handleSubmit(values) {
    this.props.dispatch(sendContactMessage(values));
    // confirm message here
  }

  //   change a value in the state.
  onChange(value) {
    this.setState(value);
  }

  constructor(props) {
    super();
    this.state = {
      name: "",
      reason: "",
      phoneNumber: "",
      email: "",
      notes: "",
    };
  }
}

export default connect()(ContactFormContainer);
