import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function NwModal({
  handleClose,
  content,
  title,
  body,
  closeText,
}) {
  return (
    <Modal.Dialog
      style={{
        boxShadow: "2px 3px 3px black",
        width: "80%",
      }}
    >
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body
        style={{
          height: "400px",
        }}
      >
        <p>{body}</p>
        {content}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          {closeText || "Close"}
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}
