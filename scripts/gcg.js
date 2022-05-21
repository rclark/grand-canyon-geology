mapboxgl.accessToken =
  'pk.eyJ1IjoicmNsYXJrIiwiYSI6ImNqczU3c3EzaDBjdzI0YW9idG1ibmxvdGkifQ.PtPykGD3icIQnfHJezCb_w';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/rclark/ckixofj0b2mbp19ozzcqi78d7',
  center: [-111.98741912841797, 36.14951909060777],
  zoom: 11,
  maxZoom: 14,
  minZoom: 10,
  maxBounds: [
    [-114.0326, 35.4754],
    [-110.9592, 36.5242],
  ],
  hash: true
});

const features = (event) => {
  if (!event) return;

  const data = map.queryRenderedFeatures(event.point, { layers: ['geopolys'] });
  if (!data[0]) return;
  return data[0].properties;
};

map.on('mousemove', 'geopolys', (event) => {
  const unit = features(event);
  if (!unit) return;

  if ($('#hover-description').hasClass('hidden'))
    $('#hover-description').removeClass('hidden');

  template = $('#partial-unit').html();
  html = Mustache.to_html(template, unit);
  $('#hover-description').html(html);
});

map.on('click', (event) => {
  const unit = features(event);
  if (!unit) return;

  template = $('#full-unit').html();
  html = Mustache.to_html(template, unit);
  $('#full-description').html(html);
  $('.scroll-btn').trigger('click');
});

map.on('load', () => {
  map.addSource('mapbox-dem', {
    'type': 'raster-dem',
    'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
    'tileSize': 512,
    'maxzoom': 14
  });

  // add the DEM source as a terrain layer with exaggerated height
  map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });

  map.addControl(new mapboxgl.NavigationControl({
    visualizePitch: true
  }), 'top-left');
})
