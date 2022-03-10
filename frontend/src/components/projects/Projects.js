import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProjects } from "../../redux/features/projects/projectSlice";
import { Row, Col } from "react-bootstrap";
import { useDeviceInfo } from "../../hooks/useDeviceInfo";
import ContentLoading from "./ContentLoading";
import LoadedProjectContent from "./LoadedProjectContent";

export default function Projects() {
  const dispatch = useDispatch();
  const newprojects = useSelector((state) => state.projects.projects);
  const { deviceIsDesktop } = useDeviceInfo();

  const style = {
    tooltip: {
      backgroundColor: "white",
      position: "absolute",
      borderRadius: "10px",
      fontSize: deviceIsDesktop ? "1.5vw" : "4vw",
      boxShadow: "3px 3px 3px black",
      zIndex: "1000",
      right: "30px",
    },
    title: {
      color: "white",
      letterSpacing: "2px",
      textTransform: "uppercase",
    },
    div: {
      textAlign: "center",
    },
    row: {
      position: "relative",
    },
  };

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  // if conditon is true the content will be rendered

  function renderContent(projects) {
    if (projects && projects.length && projects.length > 1) {
      return <LoadedProjectContent projects={newprojects} />;
    }
    return <ContentLoading />;
  }

  return (
    <div style={style.div}>
      <Row style={style.row}>
        <Col sm={12}>
          <h2 style={style.title}> Projects </h2>
          <span style={style.tooltip}>
            {deviceIsDesktop ? "Scroll" : "Swipe"} right &gt;
          </span>
        </Col>
      </Row>

      <div className="project-container">{renderContent(newprojects)}</div>
    </div>
  );
}
