import React from "react";
import ArticleListItem from "./single-article/ArticleListItem";
import { useDispatch } from "react-redux";
import { toggleSplashScreen } from "../../redux/features/control/controlSlice";
import { selectArticle } from "../../redux/features/blog/blogSlice";

/**
 * @function Articles
 * component is responsible for validating & presenting the list of articles.
 */
export default function Articles({ articles }) {
  const NoArticlesMessage = () => {
    return <h2>No Articles Found...</h2>;
  };

  const dispatch = useDispatch();

  /**
   * @function viewDetailedArticle
   * navigates to the content in a particular article.
   * @param {String} id - the id of the article
   */

  const viewDetailedArticle = (id) => {
    dispatch(toggleSplashScreen(true));
    // select article which changes the BlogContent component.
    dispatch(selectArticle(id));
  };

  return (
    <div className="article-container">
      {articles.map((article) => {
        return (
          <ArticleListItem
            key={article._id}
            {...article}
            handleClick={() => viewDetailedArticle(article._id)}
          />
        );
      })}
    </div>
  );
}
