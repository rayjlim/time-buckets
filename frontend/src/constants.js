module.exports = {
  ENVIRONMENT: process.env.NODE_ENV,
  FULL_DATE_FORMAT: 'yyyy-MM-dd',
  REST_ENDPOINT: process.env.NODE_ENV === 'development'
    ? 'http://localhost/projects/games-collection/backend/public/api/'
    : 'https://www.lilplaytime.com/games-collection-api/public/api/',
};
