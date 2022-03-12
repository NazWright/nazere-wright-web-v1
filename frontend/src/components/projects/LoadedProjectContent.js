import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import SingleProject from "./single-project/SingleProject";
import { useDeviceInfo } from "../../hooks/useDeviceInfo";

export default function LoadedProjectContent({ projects }) {
  const { deviceIsDesktop, deviceType } = useDeviceInfo();

  return (
    <Carousel fade={true}>
      <Carousel.Item interval={3000}>
        <Row
          style={{
            flexWrap: "nowrap",
            overflowX: "scroll",
            padding: ".5rem 1.5rem",
          }}
        >
          {projects.map((project, index) => {
            if (index < 3) {
              return (
                <Col
                  sm={deviceIsDesktop ? 4 : deviceType === "tablet" ? 6 : 12}
                >
                  <SingleProject
                    {...project}
                    id={project._id}
                    key={project.name}
                  />
                </Col>
              );
            }
          })}
        </Row>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <Row
          style={{
            flexWrap: "nowrap",
            overflowX: "scroll",
            padding: ".5rem 1.5rem",
          }}
        >
          {projects.map((project, index) => {
            if (index >= 3) {
              return (
                <Col
                  sm={deviceIsDesktop ? 4 : deviceType === "tablet" ? 6 : 12}
                >
                  <SingleProject
                    {...project}
                    id={project._id}
                    key={project.name}
                  />
                </Col>
              );
            }
          })}
        </Row>
      </Carousel.Item>
    </Carousel>
  );
}
