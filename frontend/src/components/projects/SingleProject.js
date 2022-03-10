import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaLink, FaGithub } from "react-icons/fa";
import IconLink from "../icon-link/IconLink";
import ReactStars from "react-rating-stars-component";
import { updateProjectRating } from "../../redux/features/projects/projectSlice";
import { Modal, Button, Row, Col } from "react-bootstrap";
import ProjectLogo from "./ProjectLogo";

export default function SingleProject({
  name,
  description,
  websiteURL,
  gitHubURL,
  image,
  id,
  additionalRating,
}) {
  const deviceType = useSelector((state) => state.control.deviceType);
  const [descClicked, setDescClicked] = useState(false);
  const [updatedRating, setUpdatedRating] = useState(0);
  const [projectRated, setProjectRated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const RatingModal = ({ handleRatingSubmit, show, closeOps, name }) => {
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
              setShowModal(false);
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
              size={40}
              activeColor={"rgb(12, 176, 241)"}
              count={5}
              isHalf={true}
              value={projectRated ? updatedRating : undefined}
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
  };

  // changes the rating in the state
  const changeRating = (rating) => {
    if (!projectRated) {
      setProjectRated(true);
    }
    setUpdatedRating(rating);
    console.log("changed");
  };

  const submitRating = (ratingDetails) => {
    dispatch(updateProjectRating(ratingDetails));
  };

  const showRatingModal = () => {
    setShowModal(true);
  };

  // main func that handles the onchange
  const onChangeRating = (rating) => {
    changeRating(rating);
    showRatingModal();
    // show a box that has lets the user add additional notes
    // pass the additional notes back to this function and lets you update the rating again
    // get the new rating and the additional notes
    // in this func
    // create an object that has the id, the notes, and the rating
    // pass that through the dispatch function
  };

  const style = {
    container: {
      textAlign: "center",
    },
    links: {
      color: "black",
    },
  };

  const defaultContent = () => {
    return (
      <div>
        <Row className="mb-4">
          <Col sm={12}>
            <ProjectLogo
              width={"100%"}
              height={250}
              style={{
                borderRadius: "10px",
                border: "1px solid black",
                cursor: "pointer",
              }}
              src={image}
            />
          </Col>
          <Col
            sm={12}
            className="align-items-center d-flex justify-content-center"
          >
            <h2
              style={{
                fontSize: deviceType === "desktop" ? "1.5vw" : "4vw",
                fontWeight: "bold",
                height: 40,
                padding: "1rem",
              }}
            >
              {" "}
              {name}{" "}
            </h2>
          </Col>
        </Row>
        <div className="justify-content-center d-flex mb-1">
          {!showModal && (
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Care to give a rating for this project?
            </span>
          )}
        </div>
        <div className="justify-content-center d-flex mb-3">
          {!showModal && (
            <ReactStars
              size={40}
              activeColor={"rgb(12, 176, 241)"}
              count={5}
              isHalf={true}
              onChange={onChangeRating}
              value={projectRated ? updatedRating : undefined}
            />
          )}
        </div>
      </div>
    );
  };

  // displays content when card is hovered over...
  const hoveredContent = () => {
    return (
      <div>
        <p
          style={{
            fontSize:
              deviceType === "mobile" || deviceType === "tablet"
                ? "4vw"
                : "1.3vw",
            fontWeight: "600",
          }}
        >
          {description}
        </p>
      </div>
    );
  };

  // handles change when button is clicked to view the description
  const handleDescClick = () => {
    setDescClicked(!descClicked);
  };

  return (
    <div className="project-card" style={style.container}>
      <RatingModal
        show={showModal}
        handleRatingSubmit={changeRating}
        name={name}
      />
      {descClicked ? hoveredContent() : defaultContent()}

      <button
        className="view-desc-project mb-3"
        style={{
          margin: "1rem",
          height: deviceType === "desktop" ? "8vh" : "8vh",
          width: "70%",
          fontSize: deviceType === "desktop" ? "1vw" : "2vw",
        }}
        onClick={handleDescClick}
      >
        {descClicked ? "Close Description" : "View Description"}
      </button>
      <div>
        {websiteURL ? (
          <IconLink
            icon={
              <FaLink
                size={
                  deviceType === "mobile" || deviceType === "tablet"
                    ? "3vw"
                    : "1.5vw"
                }
                className="github-link-icon"
              />
            }
            URL={websiteURL}
          />
        ) : undefined}
      </div>
      <div>
        {gitHubURL ? (
          <IconLink
            icon={
              <FaGithub
                size={
                  deviceType === "mobile" || deviceType === "tablet"
                    ? "3vw"
                    : "1.5vw"
                }
                className="github-link-icon"
              />
            }
            URL={gitHubURL}
          />
        ) : undefined}
      </div>
    </div>
  );
}
