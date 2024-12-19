const newsService = require('../services/newsService');

const newsController = {
  async getTopStories(req, res, next) {
    try {
      const { page, limit } = req.query;
      const data = await newsService.getTopStories(page, limit);
      res.json(data);
    } catch (error) {
      next(error);
    }
  },

  async getNewsByCategory(req, res, next) {
    try {
      const { category } = req.params;
      const { page, limit } = req.query;
      const data = await newsService.getNewsByCategory(category, page, limit);
      res.json(data);
    } catch (error) {
      next(error);
    }
  },

  async getArticle(req, res, next) {
    try {
      const { uuid } = req.params;
      const data = await newsService.getArticle(uuid);
      res.json(data);
    } catch (error) {
      next(error);
    }
  },

  async searchArticles(req, res, next) {
    try {
      const { query, page, limit } = req.query;
      const data = await newsService.searchArticles(query, page, limit);
      res.json(data);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = newsController;
