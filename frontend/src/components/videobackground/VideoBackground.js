import React from "react";
import "./VideoBackground.css";

export default function VideoBackground() {
  return (
    <video autoPlay loop muted id="background-video">
      <source type="video/mp4" src={require("./codingvidres.mp4")}></source>
    </video>
  );
}
