import React from "react";
import ReactStars from "react-rating-stars-component";

/**
 * ArticleRating
 * the rating for a single view of an article
 */
export default function ArticleRating({
  onRatingChange,
  ratingValue,
  starsColor,
  hasHalfRating,
  size,
  count,
  heading,
}) {
  return (
    <div>
      {heading && heading}
      <ReactStars
        size={size}
        activeColor={starsColor}
        count={count}
        isHalf={hasHalfRating}
        onChange={onRatingChange}
        value={ratingValue}
      />
    </div>
  );
}
