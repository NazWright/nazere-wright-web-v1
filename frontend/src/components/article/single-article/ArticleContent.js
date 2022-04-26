import React from "react";
import { Card } from "react-bootstrap";
import { FaExpand, FaScroll } from "react-icons/fa";

/**
 * function ArticleContent
 * content section of a single view article
 * @prop {String} title
 * @prop {Element} content - React element that contains the article content to display
 * @prop {Function}  expandContent- toggles when the content has been expanded or shrinked.
 * @prop {Boolean} expanded
 */

export default function ArticleContent({
  title,
  content,
  expandContent,
  expanded,
}) {
  return (
    <div className="d-flex flex-column">
      <Card className="article-content-card">
        <Card.Header>
          <div>
            <h2>{title}</h2>
          </div>
          <div
            className="d-flex justify-content-end expand-content"
            onClick={expandContent}
          >
            <FaExpand /> {expanded ? "Shrink" : "Expand"} Content
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
    </div>
  );
}
