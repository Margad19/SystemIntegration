const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();

// 🧠 Proxy API requests from Heroku URL to your local backend
app.use('/api', createProxyMiddleware({
  target: 'http://localhost:5005',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/api',
  },
}));

// 🧠 Serve static files from the real Travelfy frontend
app.use(express.static('public'));

app.listen(8000, () => {
  console.log('Proxy server running at http://localhost:8000');
});
