import React from "react";
import "./Header.css";
import { useSelector } from "react-redux";

export default function Header() {
  const { deviceType } = useSelector((state) => state.control);

  const deviceIsDesktop = deviceType === "desktop";

  const name = "Nazere Wright";
  const tagline = "Software Engineer";
  const desc =
    "I am a Software Engineer with a specialty in building web applications and creating memorable digital experiences.";

  return (
    <section className="header-section">
      <div className="row d-flex justify-content-end p-t-b-30">
        <div className="hero-branding col d-flex flex-column align-items-center">
          <h1 style={{ fontSize: deviceIsDesktop ? "4vw" : "8vw" }}>{name}</h1>
          <h2 className="tagline">{tagline}</h2>
        </div>
      </div>
    </section>
  );
}
