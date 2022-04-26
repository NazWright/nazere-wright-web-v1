import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Button from "../../lib/Button/Button";
import { MdDescription } from "react-icons/md";
import { FaClock, FaUser, FaEye } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";

/**
 * function ArticleListItem
 * Individual list item that gives preview of article.
 */
export default function ArticleListItem({
  title,
  author,
  views,
  dateCreated,
  tagline,
  content,
  _id,
  handleClick,
}) {
  const parseDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  return (
    <Card className="blog-article">
      <Card.Header>{title}</Card.Header>
      <Card.Body style={{ padding: "1.5rem" }}>
        <Row className="d-flex align-items-center">
          <Col>
            <p>
              {" "}
              <span>
                <MdDescription size={30} />{" "}
              </span>{" "}
              {tagline}
            </p>
          </Col>
          <Col>
            <p>
              {" "}
              <span>
                <FaUser size={30} />{" "}
              </span>{" "}
              {author}
            </p>
          </Col>

          <Col>
            <p>
              {" "}
              <span>
                <FaClock size={30} />{" "}
              </span>{" "}
              {parseDate(dateCreated)}
            </p>
          </Col>

          <Col>
            <p>
              {" "}
              <span>
                <FaEye size={30} />{" "}
              </span>{" "}
              {views}
            </p>
          </Col>
        </Row>
        <Row
          className="d-flex justify-content-end"
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "100%",
            padding: "1rem",
          }}
        >
          <Col sm={5} className="d-flex justify-content-end">
            <Button
              style={{ width: "10vw", height: "6vh" }}
              onClick={handleClick}
            >
              View Article{" "}
              <BsArrowRightShort className="view-arrow" size={25} />
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
