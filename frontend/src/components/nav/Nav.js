import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <section className="header-color-primary">
      <div className="row navigation">
        <div className="col nav-column">
          {/* Nav links */}
          <div>
            <a href="/projects" className="nav-column-link">
              Projects
            </a>
          </div>
          <div>
            <a href="/skills" className="nav-column-link">
              Skills
            </a>
          </div>
          <div>
            <a href="/services" className="nav-column-link">
              Services
            </a>
          </div>
          <div>
            <a href="/contact" className="nav-column-link">
              Contact
            </a>
          </div>
        </div>
        {/* Icons */}
        <div className="col-3 icons-nav">
          <div>
            <i className="fa fa-instagram social-media-icon"></i>
          </div>
          <div>
            <i className="fa fa-github-square social-media-icon"></i>
          </div>
          <div>
            <i className="fa fa-linkedin social-media-icon"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
