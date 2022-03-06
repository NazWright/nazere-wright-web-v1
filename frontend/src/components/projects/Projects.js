import React, { useEffect } from "react";
import SplashScreen from "../splash-screen/SplashScreen";
import SingleProject from "./SingleProject";
import { useSelector, useDispatch } from "react-redux";
import { fetchProjects } from "../../redux/features/projects/projectSlice";

export default function Projects() {
  const dispatch = useDispatch();
  const newprojects = useSelector((state) => state.projects.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const ContentLoading = () => {
    return <div style={{ height: "100vh" }}>Loading Content...</div>;
  };

  const LoadedContent = () => {
    return (
      <div className="project-container display-flex justify-content-s-a">
        {newprojects.map((project) => {
          return <SingleProject {...project} key={project.name} />;
        })}
      </div>
    );
  };

  // if conditon is true the content will be rendered

  function renderContent(condition) {
    if (condition === true) {
      return <LoadedContent />;
    }
    return <ContentLoading />;
  }

  return (
    <SplashScreen>
      <div
        className="overlay"
        style={{
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "white",
            paddingTop: 40,
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          {" "}
          Projects{" "}
        </h2>

        <div
          className="project-container"
          style={{ marginTop: "2rem", padding: "1rem" }}
        >
          {renderContent(newprojects && newprojects.length > 0)}
        </div>
      </div>
    </SplashScreen>
  );
}
