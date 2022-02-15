import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import VideoBackground from "../videobackground/VideoBackground";
import SkillCard from "./SkillCard";
import "./Skills.css";

const skills = [
  {
    title: "Javascript UI & UX Development",
    descText: "3 Yrs",
    footerText:
      "Well-versed in creating beautiful user interfaces with HTML, CSS,and JS technologies: React, Angular, JQuery",
    background: "linear-gradient(rgb(152,71,190), #70c3f1 99%)",
    icon: "",
    iconColor: "rgb(241,175,12)",
    titleColor: "rgb(241,175,12)",
    icon: "fa fa-code icon",
  },
  {
    title: "Game Design & Development",
    titleColor: "#9e78fb",
    iconColor: "#9e78fb",
    descText: "> 1Yr",
    footerText:
      "Experienced in designing games using an iterative, play-testing approach. Proficient with Unity game development & C#.",
    background:
      "linear-gradient(#f48604, rgb(243,146,6) 14%, rgb(241,175,12) 50%, rgb(238, 216, 20))",
    icon: "fa fa-gamepad icon",
  },
  {
    title: "Responsive Wordpress Web Design",
    descText: "3 Yrs",
    footerText:
      "Ample hands-on industry experience involving Wordpress web design and customizing the Wordpress CMS backend.",
    background: "linear-gradient(rgb(152,71,190), #70c3f1 99%)",
    icon: "",
    iconColor: "rgb(241,175,12)",
    titleColor: "rgb(241,175,12)",
    icon: "fa fa-wordpress icon",
  },
];

export default function TopSkills() {
  return (
    <section className="features-boxed" style={{ margin: "70px 0px" }}>
      <div className="container">
        <div
          className="d-flex justify-content-center"
          style={{ width: "100%" }}
        >
          <h1 className="display-5 text-center intro-heading"> Top Skills </h1>
        </div>
        <div className="row features d-flex justify-content-center flex-row">
          {skills.map((skill) => {
            return (
              <div className="col-sm-6 col-md-5 col-lg-4 item skills-col">
                <SkillCard {...skill} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
