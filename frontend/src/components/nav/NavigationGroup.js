import React from "react";

export default function NavigationGroup({ links, handleLinkClick }) {
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
                className={link.className}
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
