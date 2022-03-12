import React from "react";

export default function ProjectLogo({ height, width, src, alt, style }) {
  return (
    <div className="mb-3">
      <img
        width={width}
        height={height}
        style={style}
        src={src}
        alt={alt}
      ></img>
    </div>
  );
}
