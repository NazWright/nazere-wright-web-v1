import React from "react";
import "./Nav.css";
import { useSelector } from "react-redux";

export default function Nav() {
  const { deviceType, screenHeight, screenWidth } = useSelector(
    (state) => state.control
  );

  const changeBackground = () => {
    var header = document.querySelector("top");

    window.onscroll = function () {
      //TOP
      if (header.getBoundingClientRect().top <= 0) {
        console.log("TRIGGER: top of div reached.");
      }
      //BOTTOM
      if (header.getBoundingClientRect().bottom <= 0) {
        header.style.background = "red";
        console.log("bottom");
      }
    };
  };

  return (
    <section
      className="navbar-sticky-scroll"
      style={{
        position: deviceType === "desktop" ? undefined : "sticky",
      }}
    >
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
            <a href="/contact" className="nav-column-link">
              Contact
            </a>
          </div>
        </div>
        {/* Icons */}
        <div className="col-3 icons-nav">
          <div
            onClick={() => {
              window.location.href =
                "https://www.instagram.com/nazwrightthedeveloper/";
            }}
          >
            <i className="fa fa-instagram social-media-icon"></i>
          </div>
          <div
            onClick={() => {
              window.location.href = "https://github.com/NazWright";
            }}
          >
            <i className="fa fa-github-square social-media-icon"></i>
          </div>
          <div
            onClick={() => {
              window.location.href =
                "https://www.linkedin.com/in/nazere-wright-b486b0172/";
            }}
          >
            <i className="fa fa-linkedin social-media-icon"> </i>
          </div>
        </div>
      </div>
    </section>
  );
}
