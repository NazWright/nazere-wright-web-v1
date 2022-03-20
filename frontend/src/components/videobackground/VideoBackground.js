import React from "react";
import "./VideoBackground.css";

export default function VideoBackground({ src }) {
  return (
    <video
      playsInline
      autoPlay
      loop
      muted
      id="background-video"
      poster="https://nxwv1images.s3.amazonaws.com/video-background-poster.png"
    >
      <source
        type="video/mp4"
        src="https://nxwv1images.s3.amazonaws.com/codingvidres.mp4"
      ></source>
    </video>
  );
}
