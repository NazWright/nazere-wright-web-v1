import React, { Component } from "react";
import ContactForm from "./ContactForm";
import { sendContactMessage } from "../../redux/features/contact/contactSlice";
import { connect } from "react-redux";

// container component that holds state for the contact form.
class ContactFormContainer extends Component {
  render() {
    return (
      <ContactForm
        handleSubmit={this.handleSubmit}
        onInputChange={this.onChange}
        submitted={this.state.submitted}
      />
    );
  }
  // handle the submission of the contact form
  handleSubmit(event) {
    event.preventDefault();
    let form = event.target;
    form.disabled = true;
    this.props.dispatch(sendContactMessage(this.state));
    alert(
      "Thank you for submitting your contacting me. I will email in response shortly"
    );
    // resetting all of the form values
    form.reset();
    form.disabled = false;
  }

  intialState = {
    name: "",
    reason: "",
    phoneNumber: "",
    email: "",
    notes: "",
    submitted: false,
  };

  //   change a value in the state.
  onChange(property, value) {
    this.setState({ [property]: value });
  }

  constructor(props) {
    super();
    this.state = this.intialState;
    // binding the functions
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
}

export default connect()(ContactFormContainer);
