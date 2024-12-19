const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const config = require('./config/config');
const newsRoutes = require('./routes/newsRoutes');
const errorHandler = require('./middleware/error');

const app = express();

// Middleware
app.use(helmet());
app.use(cors({ origin: config.corsOrigin }));
app.use(compression());
app.use(morgan('dev'));
app.use(express.json());

// newsRoutes
app.use('/api/news', newsRoutes);

// Error.js
app.use(errorHandler);

module.exports = app;
