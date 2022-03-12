import React from "react";
import "./Header.css";
import { useSelector } from "react-redux";
import AddToHome from "../add-to-home/AddToHome";

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
        <div className="hero-branding col d-flex flex-column align-items-center  mb-3">
          <h1 className="mb-5">{name}</h1>
          <h2 className="tagline">{tagline}</h2>
        </div>
        <div className="d-flex justify-content-center"></div>
      </div>
    </section>
  );
}
