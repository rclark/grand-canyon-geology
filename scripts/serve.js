'use strict';

const http = require('http');
const path = require('path');
const {URL} = require('url')
const fs = require('fs');
const base = path.resolve(__dirname, '..');

http.createServer((req, res) => {
  const uri = new URL(req.url, 'http://localhost:8080/')
  const file = uri.pathname.slice(1);

  if (uri.pathname === '/')
    return fs.createReadStream(path.join(base, 'index.html')).pipe(res);
  if (fs.existsSync(path.join(base, file)))
    return fs.createReadStream(path.join(base, file)).pipe(res);
  res.writeHead(404);
  res.end();
}).listen(8080);
