import React from "react";
import "./StickyBreadCrumb.css";
import { useSelector } from "react-redux";

export default function StickyBreadCrumb({ children }) {
  const { installedStandAlone, IOSstandAloneMode, showSplashScreen } =
    useSelector((state) => state.control);

  return (
    <div>
      {!installedStandAlone && !IOSstandAloneMode && !showSplashScreen ? (
        <div className="sticky-breadcrumb">
          {" "}
          {children || "Sticky BreadCrumb"}{" "}
        </div>
      ) : undefined}
    </div>
  );
}
