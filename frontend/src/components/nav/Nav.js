import React, { useEffect } from "react";
import "./Nav.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  clickLink,
  getLinks,
} from "../../redux/features/navigation/navigationSlice";

export default function Nav() {
  const { deviceType } = useSelector((state) => state.control);

  const deviceIsDesktop = deviceType === "desktop" ? true : false;

  const dispatch = useDispatch();

  const links = useSelector((state) => state.navigation.links) || [];

  useEffect(() => {
    let navigationLinks = [
      {
        path: "/projects",
        clicked: false,
        className: "nav-column-link",
        imageLink: false,
        image: "",
        linkText: "Projects",
      },
      {
        path: "/skills",
        clicked: false,
        className: "nav-column-link",
        imageLink: false,
        image: "",
        linkText: "Skills",
      },
      {
        path: "/contact",
        clicked: false,
        className: "nav-column-link",
        imageLink: false,
        image: "",
        linkText: "Contact",
      },
      {
        path: "/",
        clicked: false,
        className: "nav-column-link",
        imageLink: true,
        image: "https://nxwv1images.s3.amazonaws.com/Nazere+Wright.png",
        linkText: "",
      },
    ];

    dispatch(getLinks(navigationLinks));
  }, [dispatch]);

  const HomePageLink = ({ link }) => {
    const navigate = useNavigate();
    const handleLinkClick = () => {
      dispatch(clickLink(link));
      navigate(link.path);
      console.log("hello");
    };

    return (
      <div
        className={`${
          deviceIsDesktop ? "" : "fluid-width"
        } col col-2 d-flex justify-content-center `}
      >
        <div onClick={() => handleLinkClick(link)}>
          <img
            height={220}
            src={link.imageLink && link.image ? link.image : undefined}
            style={{ cursor: "pointer" }}
            alt="home page link"
          />
        </div>
      </div>
    );
  };

  const NavigationGroup = ({ links, history }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const navylinks = useSelector((state) => state.navigation.links) || [];

    const handleLinkClick = (link) => {
      dispatch(clickLink(link));
      navigate(link.path);
      console.log(navylinks);
      console.log("hello");
    };

    return (
      <div
        className="col nav-column mb-2"
        style={{
          padding: "1rem",
        }}
      >
        {/* Nav links */}
        {links &&
          links.map((link) => {
            return (
              <div>
                <div
                  className={link.className}
                  onClick={() => handleLinkClick(link)}
                >
                  {link.linkText}
                </div>
              </div>
            );
          })}
      </div>
    );
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
        {links.length > 1
          ? [
              <HomePageLink
                link={links.filter((link) => link.path === "/")[0]}
              />,
              <NavigationGroup
                links={links.filter((link) => link.path !== "/")}
              />,
            ]
          : undefined}
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
