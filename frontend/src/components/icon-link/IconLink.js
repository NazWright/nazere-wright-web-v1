import React from "react";
import { useSelector } from "react-redux";
import { navigateTo } from "../../utils/navigateTo";
import { useResponsiveClassName } from "../../hooks/useResponsiveClassName";

export default function IconLink({ labelText, icon, style, URL }) {
  const deviceType = useSelector((state) => state.control.deviceType);
  const responsiveClassName = useResponsiveClassName();

  return (
    <div
      className={`github-link-container nw-icon ${responsiveClassName}`}
      onClick={() => navigateTo(URL)}
    >
      {icon}
      <span
        className="link-icon-text"
        style={{
          fontSize:
            deviceType === "mobile" || deviceType === "tablet"
              ? "3vw"
              : "1.5vw",
        }}
      >
        {labelText}
      </span>
    </div>
  );
}
