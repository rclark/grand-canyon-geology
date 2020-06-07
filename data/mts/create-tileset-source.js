#!/usr/bin/env node

const https = require('https');
const { stringify } = require('querystring');
const { URL } = require('url');
const { createReadStream } = require('fs');
const { join } = require('path');
const FormData = require('form-data');

const baseUrl = 'https://api.mapbox.com/tilesets/v1/sources';
const query = stringify({ access_token: process.env.ACCESS_TOKEN });
const url = new URL(`${baseUrl}/rclark/grand-canyon?${query}`);

const upload = (filename) => new Promise((resolve, reject) => {
  const data = createReadStream(filename);
  const form = new FormData();
  form.append('file', data);

  const options = {
    method: 'POST',
    host: url.host,
    path: `${url.pathname}${url.search}`,
    headers: { 'Content-Type': 'multipart/form-data' }
  };

  console.log(options);

  const req = https.request(options, (res) => {
    let err = new Error();
    if (res.statusCode > 299) err.statusCode = res.statusCode;

    let body = '';
    res.on('data', (d) => body += d);
    res.on('end', () => {
      if (!err.statusCode) resolve(JSON.parse(body));
      err.message = body;
      reject(err);
    });
    res.on('error', reject);
  });

  req.on('error', reject);
  // console.log(`pipe ${filename}`);
  form.pipe(req);
});

upload(join(__dirname, 'geolines.ld.json'))
  .then(() => upload(join(__dirname, 'geopolys.ld.json')))
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
