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
      />
    );
  }
  // handle the submission of the contact form
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.props.dispatch(sendContactMessage(this.state));
  }

  //   change a value in the state.
  onChange(property, value) {
    this.setState({ [property]: value });
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
    // binding the functions
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
}

export default connect()(ContactFormContainer);
