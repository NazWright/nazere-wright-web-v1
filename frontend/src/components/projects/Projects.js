import React from "react";
import { useSelector } from "react-redux";
import { images } from "../../config/images";
import SingleProject from "./SingleProject";

export default function Projects() {
  const screenHeight = useSelector((state) => state.control.screenHeight);
  const deviceType = useSelector((state) => state.control.deviceType);
  const projects = [
    {
      projectName: "Omnivore Connect Marketplace",
      projectImage: images.FEATPROJ,
      projectDescription: "",
      projectLink: "https://omnivore.io/connect-marketplace/",
      projectGithub: "",
    },
    {
      projectName: "Sanctioning Detection System",
      projectImage: images.SANCTION,
      projectDescription: "",
      projectLink: "",
      projectGithub:
        "https://github.com/NazWright/Sanctioning-Detection-System",
    },
    {
      projectName: "Cloud Computing Alert System",
      projectImage: images.CLOUD,
      projectDescription: "",
      projectLink: "",
      projectGithub:
        "https://github.com/NazWright/Cloud-Computing-Alert-System",
    },
    {
      projectName: "Client Server Networking Program",
      projectImage: images.CLIENTSERVER,
      projectDescription: "",
      projectLink:
        "https://github.com/NazWright/Socket_Program_Networking_Systems_1",
    },
    {
      projectName: "React ATS",
      projectImage: images.REACTATS,
      projectDescription: "",
      projectLink: "",
      projectGithub: "https://github.com/NazWright/React-PeopleCount",
    },
    {
      projectName: "Learn Piano",
      projectImage: images.PIANO,
      projectDescription: "",
      projectLink: "",
      projectGithub: "",
    },
  ];

  return (
    <div
      className="overlay"
      style={{
        height: screenHeight * 1.5,
        overflow: "scroll",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "white", marginTop: 40 }}> Projects </h2>

      <div
        className="project-container display-flex justify-content-s-a"
        style={{ marginTop: "2rem" }}
      >
        {projects.map((project) => {
          return <SingleProject {...project} key={project.projectName} />;
        })}
      </div>
    </div>
  );
}
