import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaLink, FaGithub } from "react-icons/fa";

export default function SingleProject({
  projectName,
  projectDescription,
  projectLink,
  projectGithub,
  projectImage,
}) {
  const deviceType = useSelector((state) => state.control.deviceType);
  const screenHeight = useSelector((state) => state.control.screenHeight);
  const [descClicked, setDescClicked] = useState(false);

  const style = {
    container: {
      width: deviceType == "mobile" || deviceType == "tablet" ? "100%" : "33%",
      textAlign: "center",
    },
    links: {
      color: "black",
    },
  };

  const navigateToLink = (link) => {
    window.location.href = link;
  };

  const defaultContent = () => {
    return (
      <div>
        <img
          width={"100%"}
          height={deviceType === "desktop" ? 215 : undefined}
          style={{
            borderRadius: "10px",
            border: "1px solid black",
          }}
          src={projectImage}
        ></img>
        <h2
          style={{
            fontSize:
              deviceType === "mobile" || deviceType === "tablet"
                ? "6vw"
                : "2vw",
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
            <div
              className="github-link-container"
              onClick={() => navigateToLink(projectLink)}
            >
              {" "}
              <FaLink
                size={
                  deviceType === "mobile" || deviceType === "tablet"
                    ? "6vw"
                    : "2.2vw"
                }
                className="github-link-icon"
              />{" "}
              <span
                className="link-icon-text"
                style={{
                  fontSize:
                    deviceType === "mobile" || deviceType === "tablet"
                      ? "4vw"
                      : "1.5vw",
                }}
              >
                Website
              </span>{" "}
            </div>
          ) : undefined}
        </div>
        <div>
          {projectGithub ? (
            <div
              className="github-link-container"
              onClick={() => navigateToLink(projectGithub)}
            >
              {" "}
              <FaGithub
                size={
                  deviceType === "mobile" || deviceType === "tablet"
                    ? "6vw"
                    : "2.2vw"
                }
                className="github-link-icon"
              />{" "}
              <span
                className="link-icon-text"
                style={{
                  fontSize:
                    deviceType === "mobile" || deviceType === "tablet"
                      ? "4vw"
                      : "1.5vw",
                }}
              >
                GitHub
              </span>{" "}
            </div>
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
          height: deviceType == "desktop" ? "8vh" : "8vh",
          width: deviceType == "desktop" ? "10vw" : "30vw",
          fontSize: deviceType == "desktop" ? "1vw" : "3vw",
        }}
        onClick={handleDescClick}
      >
        {descClicked ? "Close Description" : "View Description"}
      </button>
    </div>
  );
}
