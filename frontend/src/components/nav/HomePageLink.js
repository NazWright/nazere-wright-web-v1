import React from "react";

export default function HomePageLink({
  link,
  handleLinkClick,
  imageHeight,
  altText,
  className,
}) {
  return (
    <div className={className}>
      <div onClick={() => handleLinkClick(link)}>
        <img
          height={imageHeight}
          src={link.imageLink && link.image ? link.image : undefined}
          style={{ cursor: "pointer" }}
          alt={altText}
          className={"home-page-link"}
        />
      </div>
    </div>
  );
}
