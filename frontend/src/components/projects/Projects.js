import React, { useEffect } from "react";
import SingleProject from "./SingleProject";
import { useSelector, useDispatch } from "react-redux";
import { fetchProjects } from "../../redux/features/projects/projectSlice";
import { Row, Col } from "react-bootstrap";
import { useDeviceInfo } from "../../hooks/useDeviceInfo";

export default function Projects() {
  const dispatch = useDispatch();
  const newprojects = useSelector((state) => state.projects.projects);
  const { deviceIsDesktop } = useDeviceInfo();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const ContentLoading = () => {
    return <div style={{ height: "100vh" }}>Loading Content...</div>;
  };

  const LoadedContent = () => {
    return (
      <Row style={{ flexWrap: "nowrap", overflowX: "scroll" }}>
        {newprojects.map((project) => {
          return (
            <Col sm={4}>
              <SingleProject {...project} key={project.name} />
            </Col>
          );
        })}
      </Row>
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
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Row style={{ position: "relative" }}>
        <Col sm={12}>
          <h2
            style={{
              color: "white",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            {" "}
            Projects{" "}
          </h2>
          <span
            style={{
              backgroundColor: "white",
              position: "absolute",
              borderRadius: "10px",
              fontSize: "1.5vw",
              boxShadow: "3px 3px 3px black",
              zIndex: "1000",
              right: "30px",
            }}
          >
            {deviceIsDesktop ? "Scroll" : "Swipe"} to the rignt to view more
            projects!
          </span>
        </Col>
      </Row>

      <div
        className="project-container"
        style={{ marginTop: "2rem", padding: "1rem" }}
      >
        {renderContent(newprojects && newprojects.length > 0)}
      </div>
    </div>
  );
}
