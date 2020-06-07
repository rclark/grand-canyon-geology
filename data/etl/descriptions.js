const parse = require('csv-parse/lib/sync');
const fs = require('fs');
const path = require('path');

const content = {
  units: parse(fs.readFileSync(path.join(__dirname, '..', 'all-units.csv')), {
    columns: true,
  }),
  descriptions: parse(
    fs.readFileSync(path.join(__dirname, '..', 'descriptions.csv')),
    { columns: true }
  ),
};

// console.log(content.units[0]);

const units = content.units.map((unit) => {
  const { abbreviation, name } = unit;
  const match = content.descriptions.find((u) => {
    return u.unit === abbreviation;
  });

  const description = match ? match.description : 'No Description';

  return {
    unit: abbreviation,
    name: name || 'Unknown',
    description,
  };
});

fs.writeFileSync(
  path.join(__dirname, '..', 'unit-definitions.json'),
  JSON.stringify(units, null, 2)
);
