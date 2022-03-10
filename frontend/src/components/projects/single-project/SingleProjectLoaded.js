import React from "react";
import { Row, Col } from "react-bootstrap";
import ProjectRating from "../ProjectRating";
import ProjectLogo from "../ProjectLogo";

export default function SingleProjectLoaded({
  onChange,
  value,
  image,
  name,
  logoStyle,
  titleStyle,
  ratingLabel,
  showRating,
}) {
  return (
    <div>
      <Row className="mb-4">
        <Col sm={12}>
          <ProjectLogo
            width={"100%"}
            height={250}
            style={logoStyle}
            src={image}
          />
        </Col>
        <Col
          sm={12}
          className="align-items-center d-flex justify-content-center mb-3"
        >
          <h2 style={titleStyle}> {name} </h2>
        </Col>
      </Row>
      {showRating && (
        <ProjectRating onChange={onChange} value={value} label={ratingLabel} />
      )}
    </div>
  );
}
