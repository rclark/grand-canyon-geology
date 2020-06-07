var gcg = {
  map: L.map('map', {
    center: [36.14951909060777,-111.98741912841797],
    zoom: 11,
    maxZoom: 14,
    minZoom: 10,
    maxBounds: L.latLngBounds([[35.4754,-114.0326],[36.5242,-110.9592]])
  }),

  gridInteraction: function (evt) {
    if (!evt.data) return;

    // Get the Unit information
    var unit = {
          unit: evt.data.unit || '??',
          unitname: evt.data.unitname || 'Unknown',
          color: evt.data.color || '#fff',
          description: evt.data.description || 'No Description'
        },
        template, html;

    // If this is a hover, update the content on the page
    if (evt.type === 'mouseover') {
      if ($('#hover-description').hasClass('hidden')) $('#hover-description').removeClass('hidden');

      template = $('#partial-unit').html();
      html = Mustache.to_html(template, unit);
      $('#hover-description').html(html);
    }

    // If this is a click, update the content below the fold
    if (evt.type === 'click') {
      template = $('#full-unit').html();
      html = Mustache.to_html(template, unit);
      $('#full-description').html(html);
      $('.scroll-btn').trigger('click');
    }
  }
};

// L.mapbox.tileLayer('rclark.d2f57dc3', {
//   accessToken: 'pk.eyJ1IjoicmNsYXJrIiwiYSI6ImNqczU3c3EzaDBjdzI0YW9idG1ibmxvdGkifQ.PtPykGD3icIQnfHJezCb_w',
//   attribution: '<a href="http://geomaps.wr.usgs.gov/arizona/">George Billingsley et al.</a> <a href="https://www.mapbox.com/about/maps/">© Mapbox © OpenStreetMap</a> and Ryan Clark, 2014'
// }).addTo(gcg.map);

// was rclark.h39e40a5
L.mapbox.gridLayer('rclark.grand-canyon-geology', { accessToken: 'pk.eyJ1IjoicmNsYXJrIiwiYSI6ImNqczU3c3EzaDBjdzI0YW9idG1ibmxvdGkifQ.PtPykGD3icIQnfHJezCb_w' })
  .on('mouseover', gcg.gridInteraction)
  .on('click', gcg.gridInteraction)
  .addTo(gcg.map);
