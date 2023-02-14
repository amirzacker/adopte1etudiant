const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: ' http://localhost:3001',
      //target: 'https://adopte1etudiant.onrender.com',
      changeOrigin: true,
    })
  );
};
