const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.resolve(__dirname);

const stockHandler = require('./api/stock.js');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer(async (req, res) => {
  const reqUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = reqUrl.pathname;

  // Handle /api/stock
  if (pathname === '/api/stock' || pathname === '/api/stock.js') {
    // Adapt req and res for the serverless function
    req.query = Object.fromEntries(reqUrl.searchParams.entries());
    
    // Add express-like helpers to res if missing
    if (!res.status) {
      res.status = function (statusCode) {
        res.statusCode = statusCode;
        return this;
      };
    }
    if (!res.json) {
      res.json = function (data) {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify(data));
        return this;
      };
    }

    try {
      await stockHandler(req, res);
    } catch (err) {
      console.error('Server error handling /api/stock:', err);
      if (!res.headersSent) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify({ error: 'Internal Server Error: ' + err.message }));
      }
    }
    return;
  }

  // Rewrite /calc_zscore or /zscore or / to index.html
  if (pathname === '/' || pathname === '/calc_zscore' || pathname === '/zscore') {
    pathname = '/index.html';
  }

  // Prevent directory traversal
  const safePath = path.normalize(pathname).replace(/^(\.\.[/\\])+/, '');
  let filePath = path.join(PUBLIC_DIR, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // 404 Not Found
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end('<h1>404 Not Found</h1><p>The requested file does not exist.</p>');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.statusCode = 200;
    res.setHeader('Content-Type', contentType);

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`\n=========================================================`);
  console.log(`🚀 Altman Z-Score Analytics Server đang chạy tại:`);
  console.log(`👉 http://localhost:${PORT}`);
  console.log(`👉 API Endpoint: http://localhost:${PORT}/api/stock?symbol=VGI`);
  console.log(`=========================================================\n`);
});

module.exports = server;
