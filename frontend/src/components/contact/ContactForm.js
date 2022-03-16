import React from "react";
import Form from "../lib/Form/Form";
import Button from "../lib/Button/Button";
import { Row, Col } from "react-bootstrap";
import ContactDropDown from "./ContactDropDown";
import { useResponsiveClassName } from "../../hooks/useResponsiveClassName";
import { dropDownOptions } from "./contactDropDownData";

export default function ContactForm() {
  const responsiveClassName = useResponsiveClassName();
  const changeInputLayoutOnMobile =
    responsiveClassName !== "desktop" && "flex-column";

  return (
    <Form>
      <Row className={changeInputLayoutOnMobile}>
        <Col>
          <Form.Input
            type="text"
            placeholder="Name"
            className="fluid-width mr-5"
          />
        </Col>
        <Col>
          <Form.Input
            type="text"
            placeholder="Phone Number"
            className="fluid-width"
          />
        </Col>
      </Row>

      <Row className={changeInputLayoutOnMobile}>
        <Col>
          <Form.Input
            type="text"
            placeholder="Email"
            className="fluid-width mr-5"
          />
        </Col>
        <Col>
          <ContactDropDown options={dropDownOptions} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.TextArea placeholder="Notes" className="fluid-width" />
        </Col>
      </Row>
      <Row>
        <Col className="fluid-width d-flex justify-content-end">
          <Button className={`nw-button ${responsiveClassName}`}>Send</Button>
        </Col>
      </Row>
    </Form>
  );
}
