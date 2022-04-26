import React, { useEffect, useState } from "react";
import SkillCard from "./SkillCard";
import "./Skills.css";
import axios from "axios";
import { GiMonkeyWrench } from "react-icons/gi";
import { IoLogoReact } from "react-icons/io5";
import { FaRegHandshake } from "react-icons/fa";

export default function TopSkills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    async function retrieveServices() {
      const response = await axios.get("/api/services");
      setSkills(response.data);
    }
    retrieveServices();
  }, []);

  const iconElements = [
    <FaRegHandshake size={50} color={"white"} fontWeight="bold" />,
    <IoLogoReact size={50} color={"white"} fontWeight="bold" />,
    <GiMonkeyWrench size={50} color={"white"} fontWeight="bold" />,
  ];

  return (
    <section className="features-boxed mb-5">
      <div className="container">
        <div
          className="d-flex justify-content-center"
          style={{ width: "100%" }}
        >
          <h1 className="display-5 text-center intro-heading"> Services </h1>
        </div>
        <div className="row features d-flex justify-content-center flex-row">
          {skills.map((skill, index) => {
            return (
              <div
                className="col-sm-6 col-md-5 col-lg-4 item skills-col"
                key={skill.title}
              >
                <SkillCard {...skill} icon={iconElements[index]} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
