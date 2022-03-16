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

// <div className={`${deviceIsDesktop ? "col-2" : ""} col icons-nav`}>
// <div
//   className="icon-container"
//   onClick={() =>
//     navigateTo("https://www.instagram.com/nazwrightthedeveloper/")
//   }
//   style={{
//     cursor: "pointer",
//   }}
// >
//   <i className="fa fa-instagram social-media-icon"></i>
// </div>
// <div
//   className="icon-container"
//   onClick={() => navigateTo("https://github.com/NazWright")}
//   style={{
//     cursor: "pointer",
//   }}
// >
//   <i className="fa fa-github-square social-media-icon"></i>
// </div>
// <div
//   className="icon-container"
//   onClick={() =>
//     navigateTo("https://www.linkedin.com/in/nazere-wright-b486b0172/")
//   }
//   style={{
//     cursor: "pointer",
//   }}
// >
//   <i className="fa fa-linkedin social-media-icon"> </i>
// </div>
// </div>

{
  /* <div key={link.path}>
<div
  className={`${link.className} nw-link ${responsiveClassName}`}
  onClick={() => handleLinkClick(link)}
>
  {link.linkText}
</div>
</div> */
}
