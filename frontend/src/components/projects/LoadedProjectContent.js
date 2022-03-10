import React from "react";
import { Row, Col } from "react-bootstrap";
import SingleProject from "./single-project/SingleProject";
import { useDeviceInfo } from "../../hooks/useDeviceInfo";

export default function LoadedProjectContent({ projects }) {
  const { deviceIsDesktop, deviceType } = useDeviceInfo();

  return (
    <Row style={{ flexWrap: "nowrap", overflowX: "scroll" }}>
      {projects.map((project) => {
        return (
          <Col sm={deviceIsDesktop ? 4 : deviceType === "tablet" ? 6 : 12}>
            <SingleProject {...project} key={project.name} />
          </Col>
        );
      })}
    </Row>
  );
}
