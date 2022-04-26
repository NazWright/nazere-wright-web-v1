import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { toggleSplashScreen } from "../../redux/features/control/controlSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function SkillCard({
  background,
  descText,
  footerText,
  title,
  titleColor,
  icon,
  descColor,
  viewMoreLink,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const viewMore = (link) => {
    dispatch(toggleSplashScreen(true));
    navigate(link);
  };

  return (
    <div
      className="card skills-cards"
      style={{ background, footerText, descText }}
    >
      <div className="card-body">
        <i>
          {icon}
          <h3
            className="name"
            style={{
              fontSize: "24px",
              minHeight: "40px",
              color: titleColor,
              borderBottomColor: "rgb(241,175,12)",
            }}
          >
            {title}
          </h3>
        </i>

        <p style={{ color: descColor, fontSize: "18px", fontWeight: "600" }}>
          {footerText}
        </p>
        <div
          className="view-services-link"
          onClick={() => viewMore(viewMoreLink)}
        >
          <span style={{ marginRight: "10px" }}>View {title} Services</span>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
}
