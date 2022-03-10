import React from "react";

export default function CardBody({ children, style }) {
  return (
    <div className="card-body" style={style}>
      {children && children}
    </div>
  );
}
