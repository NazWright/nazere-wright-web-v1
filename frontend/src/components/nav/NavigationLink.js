import React from "react";

export default function NavigationLink({
  navigateFunction,
  className,
  icon,
  children,
}) {
  return (
    <div
      className={className + " nav-column-link"}
      onClick={navigateFunction}
      style={{
        cursor: "pointer",
      }}
    >
      {icon}
      {children}
    </div>
  );
}

// icon needs to be of type react element
// navigate function is a function called on  this link click
// className is the css class names for the outermost div of the container.
// you can then write css based on that div or just add the css directly your chidlren.
