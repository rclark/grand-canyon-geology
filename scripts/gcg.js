var gcg = {
  map: L.map('map', {
    center: [36.14951909060777,-111.98741912841797],
    zoom: 11,
    maxZoom: 14,
    maxBounds: L.latLngBounds([[35.4754,-114.0326],[36.5242,-110.9592]])
  })
};

L.mapbox.tileLayer('http://a.tiles.usgin.org/grand-canyon-retina/tiles.json', {
  retinaVersion: 'http://a.tiles.usgin.org/grand-canyon-retina/tiles.json'
}).addTo(gcg.map);

/*
L.mapbox.tileLayer('rclark.map-55q8nfsk', {
  attribution: '<a href="https://www.mapbox.com/about/maps/">Terms & Feedback</a>',
  detectRetina: true
}).addTo(gcg.map);
*/