import React from "react";
import "./StickyBreadCrumb.css";
import { useSelector } from "react-redux";

export default function StickyBreadCrumb({ children }) {
  const { installedStandAlone } = useSelector((state) => state.control);

  console.log("sticky: " + installedStandAlone);

  return (
    <div>
      {!installedStandAlone ? (
        <div className="sticky-breadcrumb">
          {" "}
          {children || "Sticky BreadCrumb"}{" "}
        </div>
      ) : undefined}
    </div>
  );
}
