import React from "react";
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

  const style = {
    container: {
      width: deviceType == "mobile" || deviceType == "tablet" ? "100%" : "33%",
      textAlign: "center",
    },
    links: {
      color: "black",
    },
  };

  return (
    <div className="project-card" style={{ ...style.container }}>
      <img
        height={deviceType === "mobile" ? 100 : 200}
        width={"100%"}
        style={{
          borderRadius: "10px",
        }}
        src={projectImage}
      ></img>
      <h2> {projectName} </h2>
      <p> {projectDescription} </p>
      <div>
        <a
          className="project-link"
          style={{ display: projectLink ? undefined : "none" }}
          href={projectLink}
        >
          Website
        </a>
      </div>
      <div>
        <a
          className="project-link"
          style={{ display: projectGithub ? undefined : "none" }}
          href={projectGithub}
        >
          Github
        </a>
      </div>
    </div>
  );
}
