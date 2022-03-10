import React, { useState } from "react";

export default function ProjectLogo({
  height,
  width,
  src,
  alt,
  style,
  handleHover,
}) {
  const [enteredElement, setEnteredElement] = useState(false);

  const handleMouseEvent = (condition) => {
    handleHover(condition);
  };

  return (
    <img
      width={width}
      height={height}
      style={style}
      src={src}
      alt={alt}
      onMouseEnter={() => handleMouseEvent(true)}
      onMouseLeave={() => handleMouseEvent(false)}
    ></img>
  );
}
