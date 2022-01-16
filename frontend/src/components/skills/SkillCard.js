import React from "react";

export default function SkillCard({
  background,
  descText,
  footerText,
  title,
  iconColor,
  titleColor,
  icon,
}) {
  return (
    <div
      className="card skills-cards"
      style={{ background, footerText, descText }}
    >
      <div className="card-body">
        <i
          className={icon}
          style={{
            borderBottomColor: "rgb(241,175,12)",
            color: iconColor,
          }}
        >
          <h3
            className="name"
            style={{
              fontSize: "24px",
              minHeight: "60px",
              color: titleColor,
              borderBottomColor: "rgb(241,175,12)",
            }}
          >
            {title}
          </h3>
          <h1 className="navbar-brand" style={{ color: "white" }}>
            {descText}
          </h1>
          <p style={{ color: "white", fontSize: "18px" }}>{footerText}</p>
        </i>
      </div>
    </div>
  );
}
