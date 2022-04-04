import React from "react";
import Form from "../lib/Form/Form";
import Button from "../lib/Button/Button";
import { Row, Col } from "react-bootstrap";
import ContactDropDown from "./ContactDropDown";
import { useResponsiveClassName } from "../../hooks/useResponsiveClassName";
import { dropDownOptions } from "./contactDropDownData";
import { navigateTo } from "../../utils/navigateTo";
import { socialLinks } from "../../constants/socialLinks";

export default function ContactForm({
  handleSubmit,
  onInputChange,
  submitted,
}) {
  const responsiveClassName = useResponsiveClassName();
  const changeInputLayoutOnMobile =
    responsiveClassName !== "desktop" && "flex-column";

  const handleIconClick = (url) => {
    navigateTo(url);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className={changeInputLayoutOnMobile}>
        <Col>
          <Form.Input
            name="name"
            type="text"
            placeholder="Name"
            className="fluid-width mr-5"
            required={true}
            onChange={(event) => onInputChange("name", event.target.value)}
          />
        </Col>
        <Col>
          <Form.Input
            type="tel"
            placeholder="Phone Number"
            className="fluid-width"
            onChange={(event) =>
              onInputChange("phoneNumber", event.target.value)
            }
            name="phoneNumber"
          />
        </Col>
      </Row>

      <Row className={changeInputLayoutOnMobile}>
        <Col>
          <Form.Input
            type="email"
            placeholder="Email"
            className="fluid-width mr-5"
            onChange={(event) => onInputChange("email", event.target.value)}
            required={true}
          />
        </Col>
        <Col>
          <ContactDropDown
            options={dropDownOptions}
            onChange={(event) => onInputChange("reason", event.target.value)}
            required={true}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.TextArea
            placeholder="Notes"
            className="fluid-width"
            onChange={(event) => onInputChange("notes", event.target.value)}
            name="notes"
          />
        </Col>
      </Row>
      <Row>
        <Col className={`contact-me-social-icons ${responsiveClassName}`}>
          {socialLinks.map((link) => {
            return (
              <i
                key={link.name}
                className={link.className}
                onClick={() => handleIconClick(link.url)}
              ></i>
            );
          })}
        </Col>
        <Col className="fluid-width d-flex justify-content-end">
          <Button className={`nw-button ${responsiveClassName}`}>Send</Button>
        </Col>
      </Row>
    </Form>
  );
}
