import React, { useState } from "react";
import { useSelector } from "react-redux";

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

  const defaultContent = () => {
    return (
      <div>
        <img
          width={"100%"}
          style={{
            borderRadius: "10px",
          }}
          src={projectImage}
        ></img>
        <h2
          style={{
            fontSize:
              deviceType === "mobile" || deviceType === "tablet"
                ? "4vw"
                : "1.5vw",
            fontWeight: "bold",
            marginTop: "1rem",
          }}
        >
          {" "}
          {projectName}{" "}
        </h2>
        <div>
          <a
            className="project-link"
            style={{
              display: projectLink ? undefined : "none",
              textDecoration: "underline",
            }}
            href={projectLink}
          >
            Website
          </a>
        </div>
        <div>
          <a
            className="project-link"
            style={{
              display: projectGithub ? undefined : "none",
              textDecoration: "underline",
            }}
            href={projectGithub}
          >
            Github
          </a>
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
