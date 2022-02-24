import React from "react";
import { FaLink, FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function IconLink({ labelText, icon, style, URL }) {
  const deviceType = useSelector((state) => state.control.deviceType);

  const navigateToLink = (link) => {
    window.location.href = link;
  };

  return (
    <div className="github-link-container" onClick={() => navigateToLink(URL)}>
      {icon}
      <span
        className="link-icon-text"
        style={{
          fontSize:
            deviceType === "mobile" || deviceType === "tablet"
              ? "4vw"
              : "1.5vw",
        }}
      >
        {labelText}
      </span>
    </div>
  );
}
