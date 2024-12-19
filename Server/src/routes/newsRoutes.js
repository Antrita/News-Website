const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');
const cacheMiddleware = require('../middleware/cache');
const config = require('../config/config');

router.get('/top', cacheMiddleware(config.cacheTimeout), newsController.getTopStories);
router.get('/category/:category', cacheMiddleware(config.cacheTimeout), newsController.getNewsByCategory);
router.get('/article/:uuid', cacheMiddleware(config.cacheTimeout), newsController.getArticle);
router.get('/search', cacheMiddleware(config.cacheTimeout), newsController.searchArticles);

module.exports = router;
