// the listings of articles
import React, { useEffect } from "react";
import Articles from "../article/Articles";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../redux/features/blog/blogSlice.js";
import { toggleSplashScreen } from "../../redux/features/control/controlSlice";
import { selectArticle } from "../../redux/features/blog/blogSlice";
import ArticleDetailed from "../article/ArticleDetailed";
// fetch the articles here

/**
 * @function BlogContent
 * Is responsible for fetching article content.
 * Handles conditional logic of selecting a blog post vs seeing all blog posts.
 * @props nameFilter - the text value for user search results of "Title"
 * @props authorFilter - the text value for user search results of "Author"
 * @props sortViewsDescending - true if article view count is sorted in descending order.
 * @props sortDate - true if date created is sorted in descending order.
 */
export default function BlogContent({
  nameFilter,
  authorFilter,
  sortViewsDescending,
}) {
  const dispatch = useDispatch();

  const { articles, selectedArticleId } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchBlogs());
    return () => {
      // cleanup
    };
  }, [dispatch]);

  const getArticles = () => {
    let newArticles;
    if (!nameFilter && !authorFilter && !sortViewsDescending) {
      return articles;
    }
    newArticles = articles.filter(
      (article) =>
        article.title.toLowerCase().includes(nameFilter) &&
        article.author.toLowerCase().includes(authorFilter)
    );
    return newArticles;
  };

  const backToBlog = () => {
    dispatch(toggleSplashScreen(true));
    dispatch(selectArticle(""));
  };

  const selectedArticle = articles.filter(
    (article) => article._id === selectedArticleId
  )[0];

  return (
    <div>
      {selectedArticleId ? (
        <ArticleDetailed backFunction={backToBlog} article={selectedArticle} />
      ) : (
        <Articles articles={getArticles()} />
      )}
    </div>
  );
}
