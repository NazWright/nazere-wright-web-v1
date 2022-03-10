import React from "react";

export default function ProjectLogo({ height, width, src, alt, style }) {
  return (
    <img width={width} height={height} style={style} src={src} alt={alt}></img>
  );
}
