const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://adopte1etudiant.onrender.com',
      changeOrigin: true,
    })
  );
};
