import React from "react";
import "./Header.css";
import brandingGraphic from "./brandingGraphic.png";

export default function Header() {
  const name = "Nazere Wright";
  const tagline = "Software Engineer";
  const desc =
    "I am a Software Engineer with a specialty in building web applications and creating memorable digital experiences.";

  return (
    <section className="header-color-primary hero-section">
      <div className="row d-flex justify-content-end p-t-b-30">
        <div className="hero-branding col d-flex flex-column align-items-center">
          <h1>{name}</h1>
          <h2 className="tagline">{tagline}</h2>
          <p>{desc}</p>
        </div>

        <div className="col col-4 img-col">
          <img
            src={brandingGraphic}
            alt="Branding graphic which shows people working on web project"
          />
        </div>
      </div>
      <div></div>
      <div></div>
    </section>
  );
}
