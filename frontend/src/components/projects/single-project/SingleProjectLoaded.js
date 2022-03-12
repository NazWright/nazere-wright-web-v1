import React from "react";
import { Row, Col } from "react-bootstrap";
import ProjectRating from "../ProjectRating";
import ProjectLogo from "../ProjectLogo";
import RatingModal from "../RatingModal";
import { useDispatch } from "react-redux";
import { updateProjectRating } from "../../../redux/features/projects/projectSlice";

export default function SingleProjectLoaded({
  onChange,
  value,
  image,
  name,
  logoStyle,
  titleStyle,
  ratingLabel,
  showRating,
  closeModalHandler,
  id,
}) {
  const dispatch = useDispatch();

  const handleSubmit = (event, values) => {
    event.preventDefault();
    console.log(values);
    // disable the button
    event.target.disabled = true;
    // validate the form here
    // then dispatch the form
    dispatch(updateProjectRating(values));
    // then enabled the button again
    alert("Review was successfully submitted. Thank you for your response.");
    event.target.disabled = false;
    if (closeModalHandler) {
      closeModalHandler();
    }
  };

  return (
    <div>
      {!showRating && (
        <RatingModal
          show={true}
          changeRating={onChange}
          name={name}
          handleModal={closeModalHandler}
          ratingValue={value}
          handleSubmit={handleSubmit}
          projectId={id}
        />
      )}

      <ProjectLogo width={"100%"} height={250} style={logoStyle} src={image} />

      <div className="mb-4">
        <h2 style={titleStyle} className="nw-item-label">
          {" "}
          {name}{" "}
        </h2>
      </div>

      {showRating && (
        <ProjectRating onChange={onChange} value={value} label={ratingLabel} />
      )}
    </div>
  );
}
