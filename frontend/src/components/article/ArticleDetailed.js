import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./Articles.css";
import { FaArrowLeft, FaExpand, FaScroll } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";

export default function ArticleDetailed({ backFunction, article }) {
  const [value, setValue] = useState(0);

  const onChange = (rating) => {
    setValue(rating);
  };

  const { title, author, dateCreated, content } = article;
  return (
    <Row className="detailed-article">
      <Col sm={2}>
        <button onClick={backFunction}>
          <FaArrowLeft style={{ textShadow: "2px 2px 2px black" }} /> Back to
          All Articles
        </button>
      </Col>
      <Col sm={7}>
        <Card className="article-content">
          <Card.Header>
            <div>
              <h2>{title}</h2>
            </div>
            <div className="d-flex justify-content-end expand-content">
              <FaExpand /> Expand Content
            </div>
          </Card.Header>
          <Card.Body>
            {content}
            <br />
            <br />
            <br />

            {content}
          </Card.Body>
        </Card>

        <div>
          <span className="scrolling-indicator">
            <FaScroll /> Scroll inside content to read more...
          </span>
        </div>
      </Col>
      <Col sm={2} className="rating-container">
        <div>
          <h4>How did I do?</h4>
          <h5>Rate this article</h5>
          <ReactStars
            size={30}
            activeColor={"rgb(241, 175, 12)"}
            count={5}
            isHalf={true}
            onChange={onChange}
            value={value}
          />
        </div>
      </Col>
    </Row>
  );
}
