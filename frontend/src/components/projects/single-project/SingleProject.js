import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaLink, FaGithub } from "react-icons/fa";
import IconLink from "../../icon-link/IconLink";
import { updateProjectRating } from "../../../redux/features/projects/projectSlice";
import SingleProjectClicked from "./SingleProjectClicked";
import SingleProjectLoaded from "./SingleProjectLoaded";
import { style } from "./singleProjectStyle";

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
  const projectStyle = style(deviceType);
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
    setTimeout(() => {
      setShowModal(true);
    }, 100);
  };

  const closeRatingModal = () => {
    setTimeout(() => {
      setShowModal(false);
    }, 100);
  };

  // main func that handles the onchange
  const onChangeRating = (rating) => {
    if (!projectRated) {
      setProjectRated(true);
      console.log("rated");
    }
    setUpdatedRating(rating);
    if (!showModal) {
      showRatingModal();
    }
  };

  const iconSize =
    deviceType === "mobile" || deviceType === "tablet" ? "4vw" : "1.5vw";

  // handles change when button is clicked to view the description
  const handleDescClick = () => {
    setDescClicked(!descClicked);
  };

  const renderContent = () => {
    if (descClicked) {
      return <SingleProjectClicked description={description} />;
    }
    return (
      <SingleProjectLoaded
        showRating={!showModal}
        onChange={onChangeRating}
        value={projectRated ? updatedRating : undefined}
        ratingLabel={"Care to rate this project?"}
        titleStyle={projectStyle.title}
        logoStyle={projectStyle.logo}
        name={name}
        image={image}
        closeModalHandler={closeRatingModal}
        id={id}
      />
    );
  };

  const renderIcons = () => {
    return (
      <div>
        <div>
          {websiteURL ? (
            <IconLink
              icon={<FaLink size={iconSize} className="github-link-icon" />}
              URL={websiteURL}
            />
          ) : undefined}
        </div>
        <div>
          {gitHubURL ? (
            <IconLink
              icon={<FaGithub size={iconSize} className="github-link-icon" />}
              URL={gitHubURL}
            />
          ) : undefined}
        </div>
      </div>
    );
  };

  return (
    <div className="project-card" style={projectStyle.container}>
      {renderContent()}

      <button className="view-desc-project mb-4" onClick={handleDescClick}>
        {descClicked ? "Close Description" : "View Description"}
      </button>
      {renderIcons()}
    </div>
  );
}
