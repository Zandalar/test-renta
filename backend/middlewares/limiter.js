const rateLimit = require('express-rate-limit');
const { limiterErrorText } = require('../constants/constants');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  message: { message: limiterErrorText },
});

module.exports = limiter;
