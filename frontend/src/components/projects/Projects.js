import React from "react";
import { images } from "../../config/images";
import SingleProject from "./SingleProject";

export default function Projects() {
  const projects = [
    {
      projectName: "Omnivore Connect Marketplace",
      projectImage: images.FEATPROJ,
      projectDescription:
        "The Omnivore Connect Marketplace allows you to learn more about Omnivore's partners. Omnivore's Connect API allows you to leverage cutting-edge apps for your POS system all through one API. There are over 180 applications that streamline operations, enhance customer experience and increase profits.",
      projectLink: "https://omnivore.io/connect-marketplace/",
      projectGithub: "",
    },
    {
      projectName: "React ATS",
      projectImage: images.REACTATS,
      projectDescription:
        "The React Applicant Tracking System is an HR software constructed entirely in JavaScript. The ATS provides many functions such as creating an integrated job board for your company, managing candidates through any step of the hiring process, and managing internal organizations for employees.",
      projectLink: "",
      projectGithub: "https://github.com/NazWright/React-PeopleCount",
    },
    {
      projectName: "Sanctioning Detection System",
      projectImage: images.SANCTION,
      projectDescription:
        "The Sanctioning Dectection System is a program constructed to detect the exact percentage similarity of any given name on a U.S. economic sanctions list. The program takes in any name as an input and returns the percentage of similarity to names on a predefined list. ",
      projectLink: "",
      projectGithub:
        "https://github.com/NazWright/Sanctioning-Detection-System",
    },
    {
      projectName: "Client Server Networking Program",
      projectImage: images.CLIENTSERVER,
      projectDescription:
        "The Client Server Networking Program is a simple application that requires one server to guess a random integer that is provided by a client or another communicating server. The server only has a predefined number of attempts to guess the number correctly before the connection is interrupted.",
      projectLink: "",
      projectGithub:
        "https://github.com/NazWright/Socket_Program_Networking_Systems_1",
    },
    {
      projectName: "Cloud Computing Alert System",
      projectImage: images.CLOUD,
      projectDescription:
        "The Cloud Computing Alert System is a simulation to a cloud server resource utilization alert system. The simulation manages the CPU & Disk health of a system of servers. If these resources are suddenly overused, this could indicate suspicious activity on the server. The program automates alerts to help detect these instances of suspicious activity.",
      projectLink: "",
      projectGithub:
        "https://github.com/NazWright/Cloud-Computing-Alert-System",
    },
    {
      projectName: "Learn Piano (Coming Soon)",
      projectImage: images.PIANO,
      projectDescription:
        "Learn Piano will be an all extensive, beginner-friendly, website and mobile application which will help learn piano basics such as notes, sheet music basics, and classic songs.",
      projectLink: "",
      projectGithub: "",
    },
  ];

  return (
    <div
      className="overlay"
      style={{
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "white",
          paddingTop: 40,
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        {" "}
        Projects{" "}
      </h2>

      <div
        className="project-container display-flex justify-content-s-a"
        style={{ marginTop: "2rem", padding: "1rem" }}
      >
        {projects.map((project) => {
          return <SingleProject {...project} key={project.projectName} />;
        })}
      </div>
    </div>
  );
}
