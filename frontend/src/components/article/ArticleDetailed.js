import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./Articles.css";
import { FaArrowLeft, FaExpand, FaScroll } from "react-icons/fa";
import ArticleRating from "./ArticleRating";

export default function ArticleDetailed({ backFunction, article }) {
  const [value, setValue] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [articleRated, setArticleRated] = useState(false);

  const onChange = (rating) => {
    setArticleRated(true);
    setValue(rating);
    if (articleRated) setModalOpen(!modalOpen);
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
        <ArticleRating
          count={5}
          hasHalfRating={true}
          heading={[<h4>How did I do?</h4>, <h5>Rate this article</h5>]}
          onRatingChange={onChange}
          ratingValue={value}
          size={30}
          starsColor={"rgb(241, 175, 12)"}
        />
      </Col>
    </Row>
  );
}
