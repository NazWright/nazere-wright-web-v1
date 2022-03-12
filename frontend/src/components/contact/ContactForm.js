import React from "react";
import Form from "../lib/Form/Form";
import Button from "../lib/Button/Button";
import { Row, Col } from "react-bootstrap";
import { useDeviceInfo } from "../../hooks/useDeviceInfo";
import ContactDropDown from "./ContactDropDown";

export default function ContactForm() {
  const { deviceIsDesktop } = useDeviceInfo();
  const changeInputLayoutOnMobile = !deviceIsDesktop && "flex-column";

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
        <Col>
          <ButtonContainer>
            <Button
              style={{
                width: deviceIsDesktop ? "12vw" : "30vw",
                height: deviceIsDesktop ? "7vh" : "6vh",
              }}
            >
              Send
            </Button>
          </ButtonContainer>
        </Col>
      </Row>
    </Form>
  );
}

const ButtonContainer = ({ children }) => {
  return (
    <div className="button-container d-flex justify-content-end fluid-width">
      {children}
    </div>
  );
};

const dropDownOptions = [
  {
    text: "Why are you reaching out?",
    selected: true,
    disabled: true,
    hidden: true,
  },
  {
    text: "Possible Service (i.e. Website, Mobile App)",
    selected: false,
    disabled: false,
    hidden: false,
  },
  {
    text: "Review of Overall Website",
    selected: false,
    disabled: false,
    hidden: false,
  },
  {
    text: "Other Concern/Question",
    selected: false,
    disabled: false,
    hidden: false,
  },
];
