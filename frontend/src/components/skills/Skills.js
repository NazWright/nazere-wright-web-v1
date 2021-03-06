import React from "react";
import ProgressBar from "../progress-bar/ProgressBar";
import { useSelector } from "react-redux";
import "./Skills.css";

export default function Skills() {
  const deviceType = useSelector((state) => state.control.deviceType);

  const DropDowHeaderTemplate = ({ text }) => {
    return (
      <div>
        <h2>{text}</h2>
      </div>
    );
  };

  const animationDelay = 150;

  return (
    <div
      style={{ overflow: "hidden", padding: "0 3rem", height: "100%" }}
      className={`${
        deviceType === "desktop" ? "flex-row flex-wrap" : "flex-column"
      } d-flex justify-space-around`}
    >
      <div className="fluid-width text-center">
        <h2
          className="skills-header mb-5 nw-section-title "
          style={{
            fontSize: deviceType === "desktop" ? "3.5vw" : "6vw",
          }}
        >
          Skills
        </h2>
      </div>
      <div
        className={`${
          deviceType === "desktop" ? "flex-row" : "flex-column"
        } row fluid-width`}
      >
        <div
          className="col-6 justify-content-center"
          style={{ width: deviceType === "desktop" ? undefined : "100%" }}
        >
          <ProgressBar
            percentageFill={85}
            backgroundColor="rgb(241, 175, 12)"
            label={"JavaScript UI Development"}
            unit={"Proficiency"}
            showValue={true}
            animationDelay={animationDelay}
          />
          <ProgressBar
            percentageFill={75}
            backgroundColor="rgb(12, 176, 241)"
            label={"Back-end Development"}
            unit={"Proficiency"}
            showValue={true}
            animationDelay={animationDelay}
          />
          <ProgressBar
            percentageFill={75}
            backgroundColor="rgb(152, 71, 190)"
            label={"REST APIs"}
            unit={"Proficiency"}
            showValue={true}
            animationDelay={animationDelay}
          />
        </div>
        <div
          className="col-6 justify-content-center"
          style={{ width: deviceType === "desktop" ? undefined : "100%" }}
        >
          <ProgressBar
            percentageFill={50}
            backgroundColor="#9e78fb"
            label={"Mobile App Development"}
            unit={"Proficiency"}
            showValue={true}
            animationDelay={animationDelay}
          />
          <ProgressBar
            percentageFill={40}
            backgroundColor="pink"
            label={"Game Development"}
            unit={"Proficiency"}
            showValue={true}
            animationDelay={animationDelay}
          />
        </div>
      </div>
    </div>
  );
}
