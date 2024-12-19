const axios = require('axios');
const config = require('../config/config');

class NewsService {
  constructor() {
    this.apiClient = axios.create({
      baseURL: 'https://api.thenewsapi.com/v1/news', //import news from TheNewsAPI 
      params: {
        api_token: config.newsApiKey,
        language: 'en',
      },
    });
  }

  async getTopStories(page = 1, limit = 10) {
    try {
      const response = await this.apiClient.get('/top', {
        params: { page, limit },
      });
      return response.data;
    } catch (error) {
      throw this.handleApiError(error);
    }
  }

  async getNewsByCategory(category, page = 1, limit = 10) {
    try {
      const response = await this.apiClient.get('/top', {
        params: {
          categories: category.toLowerCase(),
          page,
          limit,
        },
      });
      return response.data;
    } catch (error) {
      throw this.handleApiError(error);
    }
  }

  async getArticle(uuid) {
    try {
      const response = await this.apiClient.get(`/uuid/${uuid}`);
      return response.data;
    } catch (error) {
      throw this.handleApiError(error);
    }
  }

  async searchArticles(query, page = 1, limit = 10) {
    try {
      const response = await this.apiClient.get('/search', {
        params: {
          query,
          page,
          limit,
        },
      });
      return response.data;
    } catch (error) {
      throw this.handleApiError(error);
    }
  }

  handleApiError(error) {
    if (error.response) {
      const { status, data } = error.response;
      throw new Error(`API Error: ${status} - ${data.message || 'Unknown error'}`);
    }
    throw error;
  }
}

module.exports = new NewsService();
