import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaLink, FaGithub } from "react-icons/fa";
import IconLink from "../icon-link/IconLink";

export default function SingleProject({
  projectName,
  projectDescription,
  projectLink,
  projectGithub,
  projectImage,
  projectAltText,
}) {
  const deviceType = useSelector((state) => state.control.deviceType);
  const [descClicked, setDescClicked] = useState(false);

  const style = {
    container: {
      width:
        deviceType === "mobile" || deviceType === "tablet" ? "100%" : "40%",
      textAlign: "center",
    },
    links: {
      color: "black",
    },
  };

  const defaultContent = () => {
    return (
      <div>
        <img
          alt={projectAltText}
          width={"100%"}
          height={deviceType === "desktop" ? 300 : undefined}
          style={{
            borderRadius: "10px",
            border: "1px solid black",
          }}
          src={projectImage}
        ></img>
        <h2
          style={{
            fontSize: deviceType === "desktop" ? "2vw" : "4vw",
            fontWeight: "bold",
            margin: "2rem",
            height: 50,
          }}
        >
          {" "}
          {projectName}{" "}
        </h2>
        <div>
          {projectLink ? (
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
              labelText="Website"
              URL={projectLink}
            />
          ) : undefined}
        </div>
        <div>
          {projectGithub ? (
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
              labelText="Github"
              URL={projectGithub}
            />
          ) : undefined}
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
          {projectDescription}
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
      {descClicked ? hoveredContent() : defaultContent()}

      <button
        className="view-desc-project"
        style={{
          margin: "1rem",
          height: deviceType === "desktop" ? "8vh" : "8vh",
          width: deviceType === "desktop" ? "10vw" : "30vw",
          fontSize: deviceType === "desktop" ? "1vw" : "2vw",
        }}
        onClick={handleDescClick}
      >
        {descClicked ? "Close Description" : "View Description"}
      </button>
    </div>
  );
}
