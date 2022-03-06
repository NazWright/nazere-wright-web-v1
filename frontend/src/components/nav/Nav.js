import React, { useEffect } from "react";
import "./Nav.css";
import { useDispatch, useSelector } from "react-redux";
import { getLinks } from "../../redux/features/navigation/navigationSlice";
import { navigationLinks } from "../../constants/navigationLinks";
import NavigationGroup from "./NavigationGroup";
import HomePageLink from "./HomePageLink";
import { useNavigate } from "react-router-dom";
import { toggleSplashScreen } from "../../redux/features/control/controlSlice";
import { navigateTo } from "../../utils/navigateTo";

export default function Nav() {
  const { deviceType } = useSelector((state) => state.control);

  const deviceIsDesktop = deviceType === "desktop" ? true : false;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const links = useSelector((state) => state.navigation.links) || [];

  const handleLinkClick = (link) => {
    dispatch(toggleSplashScreen(true));
    navigate(link.path);
  };

  useEffect(() => {
    dispatch(getLinks(navigationLinks));
  }, [dispatch]);

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
        {links.length > 1
          ? [
              <HomePageLink
                link={links.filter((link) => link.path === "/")[0]}
                handleLinkClick={handleLinkClick}
              />,
              <NavigationGroup
                links={links.filter((link) => link.path !== "/")}
                handleLinkClick={handleLinkClick}
              />,
            ]
          : undefined}
        {/* Icons */}
        <div className={`${deviceIsDesktop ? "col-2" : ""} col icons-nav`}>
          <div
            className="icon-container"
            onClick={() =>
              navigateTo("https://www.instagram.com/nazwrightthedeveloper/")
            }
            style={{
              cursor: "pointer",
            }}
          >
            <i className="fa fa-instagram social-media-icon"></i>
          </div>
          <div
            className="icon-container"
            onClick={() => navigateTo("https://github.com/NazWright")}
            style={{
              cursor: "pointer",
            }}
          >
            <i className="fa fa-github-square social-media-icon"></i>
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
            <i className="fa fa-linkedin social-media-icon"> </i>
          </div>
        </div>
      </div>
    </section>
  );
}
