import React from "react";
import "./Nav.css";
import NavigationBrand from "./NavigationBrand";
import NavigationGroup from "./NavigationGroup";
import NavigationLink from "./NavigationLink";

export default function Nav({ children, className }) {
  return <div className={className}>{children && children}</div>;
}

Nav.Group = NavigationGroup;
Nav.Link = NavigationLink;
Nav.Brand = NavigationBrand;
