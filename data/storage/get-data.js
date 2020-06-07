const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

const credentials = new AWS.Credentials({
  accessKeyId: 'fake',
  secretAccessKey: 'fake'
});
const s3 = new AWS.S3({ credentials });
const Bucket = 'grand-canyon-geology';

const output = {
  polys: path.join(__dirname, '..', 'geopolys-2.geojson'),
  lines: path.join(__dirname, '..', 'geolines-2.geojson'),
};

const content = {
  polys: fs.createWriteStream(output.polys),
  lines: fs.createWriteStream(output.lines),
};

const input = {
  polys: s3.makeUnauthenticatedRequest('getObject', {
    Bucket,
    Key: 'geopolys.geojson',
  }),
  lines: s3.makeUnauthenticatedRequest('getObject', {
    Bucket,
    Key: 'geolines.geojson',
  }),
};

Promise.all([
  new Promise((resolve, reject) => {
    const read = input.polys.createReadStream();
    read.on('error', reject);
    read.pipe(content.polys);
    content.polys.on('finish', resolve);
  }),
  new Promise((resolve, reject) => {
    const read = input.lines.createReadStream();
    read.on('error', reject);
    read.pipe(content.lines);
    content.lines.on('finish', resolve);
  }),
]).catch((err) => console.error(err));
