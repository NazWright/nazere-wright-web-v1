import React from "react";
import "./Nav.css";
import { useSelector } from "react-redux";

export default function Nav() {
  const { deviceType } = useSelector((state) => state.control);

  const deviceIsDesktop = deviceType === "desktop" ? true : false;

  const onHomePage = window.location.pathname === "/" ? true : false;

  const toHomePage = () => {
    window.location.href = "/";
  };

  const HomePageLink = () => {
    return (
      <div
        className={`${
          deviceIsDesktop ? "" : "fluid-width"
        } col col-2 d-flex justify-content-center `}
      >
        <img
          height={220}
          src="https://nxwv1images.s3.amazonaws.com/Nazere+Wright.png"
          onClick={toHomePage}
          style={{ cursor: "pointer" }}
        ></img>
      </div>
    );
  };

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
      style={{
        position: deviceIsDesktop ? undefined : "sticky",
      }}
    >
      <div
        className={`${
          deviceIsDesktop ? "flex-row flex-wrap" : "flex-column"
        } row navigation align-items-center`}
      >
        <HomePageLink />

        <div
          className="col nav-column mb-2"
          style={{
            padding: "1rem",
          }}
        >
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
        <div className={`${deviceIsDesktop ? "col-2" : ""} col icons-nav`}>
          <div
            className="icon-container"
            onClick={() => {
              window.location.href =
                "https://www.instagram.com/nazwrightthedeveloper/";
            }}
            style={{
              cursor: "pointer",
            }}
          >
            <i className="fa fa-instagram social-media-icon"></i>
          </div>
          <div
            className="icon-container"
            onClick={() => {
              window.location.href = "https://github.com/NazWright";
            }}
            style={{
              cursor: "pointer",
            }}
          >
            <i className="fa fa-github-square social-media-icon"></i>
          </div>
          <div
            className="icon-container"
            onClick={() => {
              window.location.href =
                "https://www.linkedin.com/in/nazere-wright-b486b0172/";
            }}
            style={{
              cursor: "pointer",
            }}
          >
            <i className="fa fa-linkedin social-media-icon"> </i>
          </div>
        </div>
      </div>
    </section>
  );
}
