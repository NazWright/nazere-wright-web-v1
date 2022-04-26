import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "../Articles.css";
import ArticleRating from "./ArticleRating";
import ArticleContent from "./ArticleContent";
import BackToBlogButton from "./BackToBlogButton";

/**
 * function ArticleDetailed]
 * A detailed view of a single chosen article.
 * @prop {Function} backFunction - function to toggle when back button is pressed.
 * @prop {Object} article - data for the article
 */

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

  // is the content expanded or not
  const [expanded, setExpanded] = useState(false);

  const toggleExpandedContent = () => {
    setExpanded(!expanded);
  };

  return (
    <Row className="detailed-article">
      {!expanded && (
        <Col sm={2}>
          <BackToBlogButton backFunction={backFunction} />
        </Col>
      )}
      <Col sm={expanded ? 12 : 7}>
        <ArticleContent
          title={title}
          content={content}
          expandContent={toggleExpandedContent}
          expanded={expanded}
        />
      </Col>
      {!expanded && (
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
      )}
    </Row>
  );
}
