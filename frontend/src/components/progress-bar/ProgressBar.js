import React, { useEffect, useState } from "react";
import "./ProgressBar.css";
import { useSelector } from "react-redux";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

export default function ProgressBar({
  label,
  unit,
  percentageFill,
  backgroundColor,
  dropDownHeader,
  dropDownBody,
  showValue,
  width,
  animationDelay,
}) {
  const [value, setValue] = useState(0);
  const [dropDownClicked, setDropDownClicked] = useState(false);
  const deviceType = useSelector((state) => state.control.deviceType);

  useEffect(() => {
    async function initializeValues() {
      try {
        setTimeout(() => {
          setValue(percentageFill);
        }, animationDelay);
      } catch (error) {
        setValue(percentageFill);
      }
    }
    initializeValues();
  });

  const handleDropDownClick = () => {
    setDropDownClicked(!dropDownClicked);
  };

  const DropDownContent = () => {
    return (
      <div className="card" style={{ width: width }}>
        <div className="card-header">{dropDownHeader && dropDownHeader}</div>
        <div className="card-body">{dropDownBody && dropDownBody}</div>
      </div>
    );
  };

  return (
    <div className="justify-content-center text-align-center">
      <h2
        className="nw-item-label"
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: "2vw",
        }}
      >
        {label}
        {!dropDownClicked ? (
          <IoIosArrowDropdownCircle
            style={{
              fontSize: deviceType === "desktop" ? "2vw" : "3vw",
              color: "white",
              marginLeft: "1rem",
              cursor: "pointer",
            }}
            onClick={handleDropDownClick}
            className="dropdown-icon"
          />
        ) : (
          <IoIosArrowDropupCircle
            style={{
              fontSize: deviceType === "desktop" ? "2vw" : "3vw",
              color: "white",
              marginLeft: "1rem",
              cursor: "pointer",
            }}
            onClick={handleDropDownClick}
            className="dropdown-icon"
          />
        )}
      </h2>

      {dropDownClicked && (
        <div className="dropdown-content mb-3">
          <DropDownContent />
        </div>
      )}

      <div className="progress-bar mb-5">
        <div
          className="progress-outline"
          style={{
            width: `${value}%`,
            backgroundColor,
            fontSize: deviceType === "desktop" ? "1.5vw" : "3vw",
          }}
        >
          {showValue ? `${value}%` : undefined}
        </div>
      </div>
    </div>
  );
}
