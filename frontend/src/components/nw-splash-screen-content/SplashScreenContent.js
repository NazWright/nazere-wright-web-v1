import React from "react";
import ProgressBar from "../progress-bar/ProgressBar";
import "./SplashScreenContent.css";

export default function SplashScreenContent() {
  return (
    <div className="nw-splash-screen-content">
      <img
        src={"https://nxwv1images.s3.amazonaws.com/Nazere+Wright.png"}
        style={{ cursor: "pointer" }}
        alt="Splash Screen Logo"
      />
      <div className="fluid-width d-flex justify-content-center">
        <p className="animate-charcter">Loading Content...</p>
      </div>
    </div>
  );
}
