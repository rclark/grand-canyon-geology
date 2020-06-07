const parse = require('csv-parse/lib/sync');
const fs = require('fs');
const path = require('path');

const input = {
  polys: path.join(__dirname, '..', 'data', 'geopolys.geojson'),
  lines: path.join(__dirname, '..', 'data', 'geolines.geojson'),
  definitions: path.join(__dirname, '..', 'data', 'unit-definitions.csv'),
};

const content = {
  polys: fs.readFileSync(input.polys),
  lines: fs.readFileSync(input.lines),
  definitions: fs.readFileSync(input.definitions),
};

const parsed = {
  polys: JSON.parse(content.polys),
  lines: JSON.parse(content.lines),
  definitions: parse(content.definitions, {
    columns: ['unit', 'name', 'color', 'description'],
  }),
};

const output = {
  polys: path.join(__dirname, 'geopolys.ld.json'),
  lines: path.join(__dirname, 'geolines.ld.json'),
};

const destination = {
  polys: fs.createWriteStream(output.polys),
  lines: fs.createWriteStream(output.lines),
};

parsed.polys.features.forEach((f) => {
  const def = parsed.definitions.find((d) => d.unit === f.properties.unit);
  if (!def) throw new Error(`failed to find ${f.properties.unit}`);
  f.properties.unitname = def.name;
  f.properties.color = def.color;
  f.properties.description = def.description;
  destination.polys.write(`${JSON.stringify(f)}\n`);
});

parsed.lines.features.forEach((l) => {
  destination.lines.write(`${JSON.stringify(l)}\n`);
});

destination.polys.end();
destination.lines.end();
