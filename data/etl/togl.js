#!/usr/bin/env node

var fs = require('fs');
var split = require('split');
var path = require('path');

var mss = fs.createReadStream(path.resolve(__dirname, '..', 'grandcanyon.tm2', 'geology.mss'));
var glpath = path.resolve(__dirname, '..', 'grandcanyon.gl.json');
var gl = require(glpath);
var background;
gl.layers = gl.layers.reduce(function(layers, layer) {
  if (layer['source-layer'] === 'geounits') return layers;
  if (layer.id === 'background') {
    background = layer;
    return layers;
  }
  layers.push(layer);
  return layers;
}, []);

mss.pipe(split())
  .on('data', function(line) {
    line = line.toString().trim();
    var m = /\[unit="(.+?)"\] { polygon-fill: (.+?); }/.exec(line);
    if (!m) return;
    addUnitLayer(m[1], m[2]);
  })
  .on('end', function() {
    gl.layers.unshift(background);
    fs.writeFile(glpath, JSON.stringify(gl, null, 2));
  });

function addUnitLayer(unit, color) {
  if (unit === 'water') return;
  gl.layers.unshift({
    "id": unit,
    "interactive": true,
    "minzoom": 0,
    "layout": {},
    "maxzoom": 22,
    "filter": [
      "all",
      [
        "==",
        "unit",
        unit
      ]
    ],
    "type": "fill",
    "source": "mapbox",
    "paint": {
      "fill-color": color
    },
    "source-layer": "geounits"
  });
}
