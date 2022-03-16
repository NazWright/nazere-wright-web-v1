import React from "react";

// links are the links to be mapped
// grid width is the width of this

export default function NavigationGroup({ children, gridWidth }) {
  return (
    <div className={`col col-${gridWidth} nav-column mb-2`}>
      {children && children}
    </div>
  );
}
