import React from "react";
import "./Contact.css";
import Card from "../lib/Card/Card";
import { useDeviceInfo } from "../../hooks/useDeviceInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  const { deviceIsDesktop, screenWidth } = useDeviceInfo();

  return (
    <div className="contact-wrapper">
      <Card
        style={{
          borderRadius: "16px",
          width: deviceIsDesktop ? screenWidth / 1.5 : screenWidth * 0.8,
        }}
      >
        <Card.Header>
          <span
            className="contact-me-header"
            style={{
              fontSize: deviceIsDesktop ? "3.5vw" : "6vw",
            }}
          >
            Contact Me
          </span>
        </Card.Header>
        <Card.Body style={{ padding: "2rem" }}>
          <ContactForm />
        </Card.Body>
      </Card>
    </div>
  );
}
