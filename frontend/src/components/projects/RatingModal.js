import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "../lib/Button/Button";
import ReactStars from "react-rating-stars-component";
import Form from "../lib/Form/Form";

export default function RatingModal({
  handleRatingSubmit,
  show,
  closeOps,
  name,
  changeRating,
  handleModal,
  ratingValue,
  handleSubmit,
  projectId,
}) {
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [reviewerName, setReviewerName] = useState("");

  const handleNotesOnChange = (event) => {
    event.target &&
      event.target.value &&
      setAdditionalNotes(event.target.value);
  };

  const handleNameOnChange = (event) => {
    event.target && event.target.value && setReviewerName(event.target.value);
  };

  return (
    <Modal.Dialog
      style={{
        display: show ? undefined : "none",
        position: "absolute",
        boxShadow: "1px 3px 3px black",
        borderRadius: " 9px",
        width: "100%",
      }}
    >
      <Modal.Header
        style={{
          fontWeight: "bold",
          fontSize: "1.5vw",
          color: "black",
          textTransform: "capitalize",
        }}
      >
        Any additional feedback?
        <span
          className="close-right close pointer"
          onClick={() => {
            handleModal();
          }}
        >
          {" "}
          X{" "}
        </span>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column">
        <div
          style={{ padding: "0 1.5rem 1rem 1.5rem" }}
          className="stars-container"
        >
          <div>
            <span
              className="nw-item-label"
              style={{
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              {" "}
              You Rated {name}:
            </span>
          </div>
          <ReactStars
            classNames={"justify-content-center"}
            size={30}
            activeColor={"rgb(241, 175, 12)"}
            count={5}
            isHalf={true}
            value={ratingValue}
            onChange={(rating) => changeRating(rating)}
          />
        </div>
        <Form>
          <div className="full-width">
            <Form.Input
              className="mb-4 reviewer-name"
              placeholder="Name"
              type="text"
              name={"name"}
              onChange={handleNameOnChange}
              value={reviewerName}
            />
          </div>

          <Form.TextArea
            placeholder="Add Additional Notes Here"
            className="mb-4 reviewer-additional-notes"
            name={"additional notes"}
            value={additionalNotes}
            onChange={handleNotesOnChange}
          ></Form.TextArea>

          <Form.Input
            hidden={true}
            name={"rating"}
            value={ratingValue}
          ></Form.Input>
        </Form>

        <div className="full-width d-flex justify-content-end">
          <Button
            className="mb-4 view-desc-project"
            style={{
              height: "7vh",
            }}
            onClick={(event) =>
              handleSubmit(event, {
                additionalNotes,
                rating: ratingValue,
                name: reviewerName,
                projectId,
              })
            }
          >
            Submit Review
          </Button>
        </div>
      </Modal.Body>
    </Modal.Dialog>
  );
}
