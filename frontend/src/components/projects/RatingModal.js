import React from "react";
import { Modal, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

export default function RatingModal({
  handleRatingSubmit,
  show,
  closeOps,
  name,
  changeRating,
  handleModal,
  ratingValue,
}) {
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
        }}
      >
        Want to add additional feedback?
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
            You Rated <strong>{name}</strong>:
          </div>
          <ReactStars
            classNames={"justify-content-center"}
            size={30}
            activeColor={"rgb(12, 176, 241)"}
            count={5}
            isHalf={true}
            value={ratingValue}
            onChange={(rating) => changeRating(rating)}
          />
        </div>

        <div className="full-width">
          <input
            className="mb-4 reviewer-name"
            placeholder="Name"
            type="text"
          />
        </div>

        <textarea
          placeholder="Add Additional Notes Here"
          className="mb-4 reviewer-additional-notes"
        ></textarea>

        <Button className="mb-4">Submit Review</Button>
      </Modal.Body>
    </Modal.Dialog>
  );
}
