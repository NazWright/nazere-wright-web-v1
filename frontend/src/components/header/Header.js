import React from "react";
import "./Header.css";

export default function Header() {
  const name = "Nazere Wright";
  const tagline = "Software Engineer";

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
