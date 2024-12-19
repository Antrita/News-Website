require('dotenv').config();

const config = {
  port: process.env.PORT || 5000,
  newsApiKey: process.env.NEWS_API_KEY,
  nodeEnv: process.env.NODE_ENV || 'development',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  cacheTimeout: process.env.CACHE_TIMEOUT || 300, 
};

module.exports = config;
