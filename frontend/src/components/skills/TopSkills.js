import React from "react";
import SkillCard from "./SkillCard";
import "./Skills.css";

const skills = [
  {
    title: "Javascript UI Development",
    descText: "3 Yrs",
    footerText:
      "Well-versed in creating beautiful user interfaces with HTML, CSS,and JS technologies: React, Angular, JQuery",
    background: "linear-gradient(rgb(158, 120, 251), #70c3f1 99%)",
    iconColor: "white",
    titleColor: "white",
    icon: "fa fa-code icon",
    descColor: "white",
  },
  {
    title: "API Development",
    titleColor: "white",
    iconColor: "white",
    descText: "2 yrs",
    footerText:
      "Experienced in designing and developing performant, secure, cutting-edge APIs in Node.js & Java",
    background: "linear-gradient(#70c3f1, rgb(241, 175, 12) 99%)",
    icon: "fa fa-wifi icon",
    descColor: "white",
  },
  {
    title: "Wordpress Development",
    descText: "3 Yrs",
    footerText:
      "Ample hands-on industry experience involving responsive Wordpress web design and customizing the Wordpress CMS backend.",
    background: "linear-gradient(rgb(158, 120, 251), #70c3f1 99%)",
    iconColor: "white",
    titleColor: "white",
    icon: "fa fa-wordpress icon",
    descColor: "white",
  },
];

export default function TopSkills() {
  return (
    <section className="features-boxed mb-5">
      <div className="container">
        <div
          className="d-flex justify-content-center"
          style={{ width: "100%" }}
        >
          <h1 className="display-5 text-center intro-heading">
            {" "}
            Top Services{" "}
          </h1>
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
