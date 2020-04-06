require('dotenv').config();

module.exports = {
  environment: process.env.NODE_ENV || 'development',
  assetsKey: '',
  signedCookiesSecret: process.env.SIGNED_COOKIES_SECRET,
};
