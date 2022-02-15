import React from "react";
import "./VideoBackground.css";
import poster from "./mobilecodingposter.svg";

export default function VideoBackground({ src }) {
  if (!src) {
    return (
      <div
        style={{
          backgroundImage: `url(${poster})`,
          width: "100%",
          position: "absolute",
          zIndex: -1,
          height: "275vh",
          backgroundSize: "cover",
        }}
      ></div>
    );
  }

  return (
    <video autoPlay loop muted id="background-video" poster={poster}>
      <source type="video/mp4" src={require("./codingvidres.mp4")}></source>
    </video>
  );
}
