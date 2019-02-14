'use strict';

const fs = require('fs');
const split = require('split');
const path = require('path');

const colors = {};
const filters = [
  'match',
  ['get', 'unit']
];
let current = filters;

fs.createReadStream(path.join(__dirname, 'uniqueColors.csv'))
  .pipe(split())
  .on('data', (line) => {
    if (!line) return;
    line = line.toString();
    const fields = line.split('","').map((field) => field.replace(/^"/, '').replace(/"$/, ''));
    fields[1].split(',').forEach((unit) => colors[unit] = fields[0]);
  })
  .on('end', () => {
    fs.createReadStream(path.join(__dirname, '../all-units.csv'))
      .pipe(split())
      .on('data', (line) => {
        if (!line) return;
        line = line.toString();
        const fields = line.split('","').map((field) => field.replace(/^"/, '').replace(/"$/, ''));
        const unit = fields[0];
        const color = colors[unit];
        current.push([unit]);
        current.push(color);
        const next = [
          'match',
          ['get', 'unit']
        ];
        current.push(next);
        current = next;
      })
      .on('end', () => {
        fs.writeFileSync(path.join(__dirname, 'style.json'), JSON.stringify(filters, null, 2));
      });
  });





// [
//   "match",
//   ["get", "unit"],
//   ["Cba"],
//   "hsl(0, 84%, 64%)",
//   "#000"
// ]
