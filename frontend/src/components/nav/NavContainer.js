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

export default function NavContainer() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    console.log(link);
    dispatch(toggleSplashScreen(true));
    navigate(link.path);
  };

  const responsiveClassName = useResponsiveClassName();
  const deviceIsDesktop = useDeviceInfo();

  const navDivClassName = `${
    deviceIsDesktop ? "flex-row flex-wrap" : "flex-column"
  } row navigation align-items-center`;

  return (
    <section>
      <Nav
        links={navigationLinks}
        handleLinkClick={handleLinkClick}
        className={navDivClassName}
      >
        <Nav.Group gridWidth={2}>
          <HomePageLink
            link={navigationLinks.filter((link) => link.path === "/")[0]}
            handleLinkClick={handleLinkClick}
          />
        </Nav.Group>
        <Nav.Group gridWidth={8}>
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
        <Nav.Group gridWidth={2}>
          <div
            className="icon-container"
            onClick={() =>
              navigateTo("https://www.instagram.com/nazwrightthedeveloper/")
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
