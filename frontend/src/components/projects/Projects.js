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

  console.log(newprojects);

  const style = {
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
          <h2 style={style.title} className="nw-section-title">
            {" "}
            Projects{" "}
          </h2>
        </Col>
      </Row>

      <div className="project-container">{renderContent(newprojects)}</div>
    </div>
  );
}
