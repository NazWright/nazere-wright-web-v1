import React from "react";
import Slider from "../slider/Slider";

export default function AboutMe() {
  return (
    <section>
      <div className="fluid-width d-flex justify-content-center">
        <h2 className="about-me-header foreground">About Me</h2>
      </div>

      <div className="fluid-width d-flex justify-content-center">
        <img
          src="https://nxwv1images.s3.amazonaws.com/Wright%2CNazere_Headshot.png"
          alt="headshot of Nazere Wright, Software Engineer"
          style={{ top: "10px", position: "relative" }}
        />
      </div>

      <div className="fluid-width d-flex justify-content-center">
        <Slider />
      </div>
    </section>
  );
}
