const mongoose = require("mongoose");
const Articles = mongoose.model("articles");

/**
 * blogController
 * handles CRUD updates to fo creating, reading, updating, and deleting articles.
 */

const blogController = () => {
  return {
    /**
     * @function getArticles - retrieves all of the current publsihed articles.
     * @param req - The request object
     * @param res - The response object
     * @return 200 - success | 500 - error
     */
    async getArticles(req, res) {
      try {
        const allArticles = await Articles.find({});
        if (!allArticles.length > 0) throw new Error("No articles found.");
        return res.status(200).send(allArticles);
      } catch (error) {
        return res.status(500).send({ error });
      }
    },

    /**
     * @function filterArticles - retrieves articles based on a specified property value of an article
     */
    async filterArticles() {},
  };
};

module.exports = blogController;
