import React from "react";
import { useResponsiveClassName } from "../../hooks/useResponsiveClassName";

export default function NavigationGroup({ links, handleLinkClick }) {
  const responsiveClassName = useResponsiveClassName();
  return (
    <div
      className="col nav-column mb-2"
      style={{
        padding: "1rem",
      }}
    >
      {/* Nav links */}
      {links &&
        links.map((link) => {
          return (
            <div key={link.path}>
              <div
                className={`${link.className} nw-link ${responsiveClassName}`}
                onClick={() => handleLinkClick(link)}
              >
                {link.linkText}
              </div>
            </div>
          );
        })}
    </div>
  );
}
