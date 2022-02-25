import React from "react";
import ComingSoon from "../ComingSoon";
import ProgressBar from "../progress-bar/ProgressBar";
import { useSelector } from "react-redux";
import { FaJava } from "react-icons/fa";
import "./Skills.css";

export default function Skills() {
  const screenHeight = useSelector((state) => state.control.screenHeight);
  const deviceType = useSelector((state) => state.control.deviceType);

  const DropDownBodyTemplate = () => {
    return (
      <div className="row">
        <div className="col-6">
          <h5>Language Experience</h5>
          <ul>
            <li>
              JavaScript <span> 3 years</span>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <h5> Project Experience </h5>
          <ul>
            <li>React ATS</li>
          </ul>
        </div>
      </div>
    );
  };

  const DropDowHeaderTemplate = ({ text }) => {
    return (
      <div>
        <h2>{text}</h2>
      </div>
    );
  };

  return (
    <div
      style={{ height: screenHeight, padding: "3rem" }}
      className={`${
        deviceType === "desktop" ? "flex-row flex-wrap" : "flex-column"
      } d-flex justify-space-around`}
      id="bg-video-wrapper"
    >
      <div className="fluid-width text-center">
        <h2 className="skills-header mb-5">Skills</h2>
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
            label={"Front-end Development"}
            unit={"Proficiency"}
            dropDownBody={<DropDownBodyTemplate />}
            dropDownHeader={
              <DropDowHeaderTemplate text={"Front-end Development"} />
            }
            showValue={true}
          />
          <ProgressBar
            percentageFill={75}
            backgroundColor="rgb(12, 176, 241)"
            label={"Back-end Development"}
            unit={"Proficiency"}
            showValue={true}
          />
          <ProgressBar
            percentageFill={75}
            backgroundColor="rgb(152, 71, 190)"
            label={"REST APIs"}
            unit={"Proficiency"}
            showValue={true}
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
          />
          <ProgressBar
            percentageFill={40}
            backgroundColor="pink"
            label={"Game Development"}
            unit={"Proficiency"}
            showValue={true}
          />
        </div>
      </div>
    </div>
  );
}
