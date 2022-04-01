import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useResponsiveClassName } from "../../hooks/useResponsiveClassName";
import { toggleSplashScreen } from "../../redux/features/control/controlSlice";
import { navigationLinks } from "../../constants/navigationLinks";
import Nav from "./Nav";
import HomePageLink from "./HomePageLink";
import { navigateTo } from "../../utils/navigateTo";
import { useDeviceInfo } from "../../hooks/useDeviceInfo";
import { selectArticle } from "../../redux/features/blog/blogSlice";

export default function NavContainer() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    dispatch(toggleSplashScreen(true));
    // clearing the selected article in state if the user is navigating away from the selected blog post.
    if (window.location.pathname === "/blog") {
      dispatch(selectArticle(""));
    }
    navigate(link.path);
  };

  const responsiveClassName = useResponsiveClassName();
  const deviceIsDesktop = useDeviceInfo();

  const navDivClassName = `${
    deviceIsDesktop ? "flex-row flex-wrap" : "flex-column"
  } row navigation align-items-center mb-2`;

  return (
    <section>
      <Nav
        links={navigationLinks}
        handleLinkClick={handleLinkClick}
        className={navDivClassName}
      >
        <Nav.Group gridWidth={responsiveClassName === "desktop" ? 2 : 12}>
          <HomePageLink
            link={navigationLinks.filter((link) => link.path === "/")[0]}
            handleLinkClick={handleLinkClick}
            imageHeight={responsiveClassName === "desktop" ? 175 : 200}
            altText="home page link"
            className={`col col-2 d-flex justify-content-center ${
              responsiveClassName !== "desktop" && "fluid-width"
            }`}
          />
        </Nav.Group>

        <Nav.Group gridWidth={responsiveClassName === "desktop" ? 8 : 12}>
          {navigationLinks &&
            navigationLinks
              .filter((link) => link.path !== "/")
              .map((link) => {
                return (
                  <div key={link.path}>
                    <div
                      className={`${link.className} nav-column-link nw-link ${responsiveClassName}`}
                      onClick={() => handleLinkClick(link)}
                    >
                      {link.linkText}
                    </div>
                  </div>
                );
              })}
        </Nav.Group>
        <Nav.Group gridWidth={responsiveClassName === "desktop" ? 2 : 12}>
          <div
            className="icon-container"
            onClick={() =>
              navigateTo("https://www.instagram.com/nazwrightthedev/")
            }
            style={{
              cursor: "pointer",
            }}
          >
            <i className="fa fa-instagram"></i>
          </div>
          <div
            className="icon-container"
            onClick={() => navigateTo("https://github.com/NazWright")}
            style={{
              cursor: "pointer",
            }}
          >
            <i className="fa fa-github-square"></i>
          </div>
          <div
            className="icon-container"
            onClick={() =>
              navigateTo("https://www.linkedin.com/in/nazere-wright-b486b0172/")
            }
            style={{
              cursor: "pointer",
            }}
          >
            <i className="fa fa-linkedin"> </i>
          </div>
        </Nav.Group>
      </Nav>
    </section>
  );
}

// subcomponents limit the number of imports im using as well
