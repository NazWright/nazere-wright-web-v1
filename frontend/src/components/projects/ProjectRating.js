import React from "react";
import { useDeviceInfo } from "../../hooks/useDeviceInfo";
import ReactStars from "react-rating-stars-component";

export default function ProjectRating({ onChange, value, label }) {
  const { deviceType } = useDeviceInfo();

  const style = {
    ratingTitle: {
      fontWeight: "bold",
      fontSize:
        deviceType === "desktop"
          ? "1vw"
          : deviceType === "tablet"
          ? "1.5vw"
          : "3vw",
    },
  };

  return (
    <div>
      <div className="justify-content-center d-flex mb-1">
        <span style={style.ratingTitle}>{label}</span>
      </div>
      <div className="justify-content-center d-flex mb-3">
        <ReactStars
          size={30}
          activeColor={"rgb(12, 176, 241)"}
          count={5}
          isHalf={true}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
}
