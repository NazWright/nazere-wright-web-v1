import React from "react";
import "./VideoBackground.css";
import poster from "./mobilecodingposter.svg";

export default function VideoBackground({ src }) {
  return (
    <video
      playsInline
      autoPlay
      loop
      muted
      id="background-video"
      poster={poster}
    >
      <source
        type="video/mp4"
        src="https://nxwv1images.s3.amazonaws.com/codingvidres.mp4"
      ></source>
    </video>
  );
}
