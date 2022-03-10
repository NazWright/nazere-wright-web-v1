import React from "react";
import Slider from "../slider/Slider";
import { images } from "../../config/images";

export default function AboutMe() {
  return (
    <section style={{ marginTop: "250px" }}>
      <section>
        <div className="container" style={{ height: "400px" }}>
          <div className="row d-flex flex-column aboutme-row">
            <div
              className="col d-flex justify-content-center align-items-end"
              style={{ height: "100%", width: "100%", padding: "0px" }}
            >
              <img
                className="headshot"
                src={images.HEADSHOT}
                alt="headshot of Nazere Wright, Software Engineer"
              />
              <h1 className="align-self-center about-me-header">About Me</h1>
            </div>
            <div className="col">
              <Slider />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
