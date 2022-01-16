import React from "react";
import Curve from "../curve/Curve";
import Slider from "../slider/Slider";
import headshot from "./Wright,Nazere_Headshot.png";

export default function AboutMe() {
  return (
    <section>
      <Curve upward={true} />
      <section style={{ maxHeight: "300px", background: "rgb(241,175,12)" }}>
        <div className="container" style={{ height: "400px" }}>
          <div
            className="row d-flex flex-column aboutme-row"
            style={{ width: "100%" }}
          >
            <div
              className="col d-flex justify-content-center align-items-end"
              style={{ height: "100%", width: "100%", padding: "0px" }}
            >
              <img className="headshot" src={headshot} />
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
