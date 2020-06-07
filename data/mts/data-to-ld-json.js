#!/usr/bin/env node

const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const lines = JSON.parse(
  readFileSync(join(__dirname, "..", "geolines.geojson"), "utf8")
)
  .features.map((feature) => JSON.stringify(feature))
  .join("\n");

const polys = JSON.parse(
  readFileSync(join(__dirname, "..", "geopolys.geojson"), "utf8")
)
  .features.map((feature) => JSON.stringify(feature))
  .join("\n");

writeFileSync(join(__dirname, 'geolines.ld.json'), lines);
writeFileSync(join(__dirname, 'geopolys.ld.json'), polys);
