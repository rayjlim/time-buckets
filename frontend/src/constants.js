module.exports = {
  ENVIRONMENT: process.env.NODE_ENV,
  FULL_DATE_FORMAT: 'yyyy-MM-dd',
  REST_ENDPOINT: process.env.NODE_ENV === 'development'
    ? 'http://localhost/projects/game-collection/backend/public/api/'
    : 'http://www.lilplaytime.com/game-collection-api/public/api/',
};
