const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

const credentials = new AWS.ProcessCredentials({ profile: 'softies' });
const s3 = new AWS.S3({ credentials });
const Bucket = 'grand-canyon-geology';

const input = {
  polys: path.join(__dirname, '..', 'geopolys.geojson'),
  lines: path.join(__dirname, '..', 'geolines.geojson'),
};

const content = {
  polys: fs.createReadStream(input.polys),
  lines: fs.createReadStream(input.lines),
};

const output = {
  polys: s3
    .upload({ Bucket, Key: 'geopolys.geojson', Body: content.polys })
    .promise(),
  lines: s3
    .upload({ Bucket, Key: 'geolines.geojson', Body: content.lines })
    .promise(),
};

Promise.all([output.polys, output.lines]).catch((err) => console.error(err));
