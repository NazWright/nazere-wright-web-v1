import React from "react";
import "./Header.css";
import brandingGraphic from "./brandingGraphic.png";

export default function Header() {
  const name = "Nazere Wright";
  const tagline = "Software Engineer";
  const desc =
    "I am a Software Engineer with a specialty in building web applications and creating memorable digital experiences.";

  return (
    <section className="header-section">
      <div className="row d-flex justify-content-end p-t-b-30">
        <div className="hero-branding col d-flex flex-column align-items-center">
          <h1>{name}</h1>
          <h2 className="tagline">{tagline}</h2>
        </div>
      </div>
    </section>
  );
}
