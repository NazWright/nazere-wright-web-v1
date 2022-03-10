import CardBody from "./CardBody";
import CardHeader from "./CardHeader";

import React from "react";

function Card({ children, style, className }) {
  return (
    <div className={className || "card"} style={style && style}>
      {children}
    </div>
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;

export default Card;
