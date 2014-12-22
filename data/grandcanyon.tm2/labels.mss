@name: '[name]';
@sans_lt:           "Open Sans Regular","Arial Unicode MS Regular";
@sans_lt_italic:    "Open Sans Italic","Arial Unicode MS Regular";
@sans:              "Open Sans Semibold","Arial Unicode MS Regular";
@sans_bold:         "Open Sans Bold","Arial Unicode MS Regular";
@sans_italic:       "Open Sans Semibold Italic","Arial Unicode MS Regular";
@sans_bold_italic:  "Open Sans Bold Italic","Arial Unicode MS Regular";
@place_halo:        fadeout(#fff,80);
@country_text:      @land * 0.2;
@country_halo:      @place_halo;
@state_text:        #666;
@state_halo:        @place_halo;
@city_text:         #4a4032;
@city_halo:         @place_halo;
@town_text:         lighten(#4a4032,10);
@town_halo:         @place_halo;
@poi_text:          @poi_text;  
@road_text:         #4a4032;
@road_halo:         #fff;
@other_text:        lighten(#4a4032,20);
@other_halo:        @place_halo;
@locality_text:     #aaa;
@locality_halo:     @land;
@village_text:      #888;
@village_halo:      @place_halo;
@transport_text:    #445;

#place_label[type='city'][zoom>=8][zoom<=14][localrank<=3] {
  text-name: @name;
  text-face-name: @sans;
  text-placement: point;
  text-fill: @city_text;
  text-halo-fill: @city_halo;
  text-halo-radius: 2;
  text-halo-rasterizer: fast;
  text-wrap-width: 40;
  text-min-distance: 5;
  text-line-spacing: -4;
  [zoom>=12] { text-halo-radius: 3; }
  [zoom=10] {
    text-size: 15;
    text-wrap-width: 70;
    [scalerank>=0][scalerank<=1] { text-size: 20; }
    [scalerank>=2][scalerank<=3] { text-size: 19; }
    [scalerank>=4][scalerank<=5] { text-size: 17; }
    [scalerank>=6] { text-size: 15; }
  }
  [zoom=11] {
    text-size: 16;
    text-wrap-width: 80;
    [scalerank>=0][scalerank<=1] { text-size: 20; }
    [scalerank>=2][scalerank<=3] { text-size: 19; }
    [scalerank>=4][scalerank<=5] { text-size: 17; }
    [scalerank>=6] { text-size: 16; }
  }
  [zoom=12] {
    text-size: 17;
    text-wrap-width: 100;
    [scalerank>=0][scalerank<=1] { text-size: 20; }
    [scalerank>=2][scalerank<=3] { text-size: 19; }
    [scalerank>=4][scalerank<=5] { text-size: 18; }
    [scalerank>=6] { text-size: 17; }
  }
  [zoom=13] {
    text-size: 18;
    text-wrap-width: 200;
    [scalerank>=0][scalerank<=1] { text-size: 20; }
    [scalerank>=2][scalerank<=3] { text-size: 19; }
    [scalerank>=4][scalerank<=5] { text-size: 19; }
    [scalerank>=6] { text-size: 17; }
  }
  [zoom=14] {
    text-fill: lighten(@city_text,10);
    text-size: 19;
    text-wrap-width: 300;
    [scalerank>=0][scalerank<=1] { text-size: 20; }
    [scalerank>=2][scalerank<=3] { text-size: 20; }
    [scalerank>=4][scalerank<=5] { text-size: 19; }
    [scalerank>=6] { text-size: 18; }
  }
}

#place_label[type='town'][zoom>=8][zoom<=14] {
  text-name: @name;
  text-face-name: @sans_lt;
  text-placement: point;
  text-fill: @town_text;
  text-halo-fill: @town_halo;
  text-halo-radius: 2;
  text-halo-rasterizer: fast;
  text-wrap-width: 60;
  text-wrap-before: true;
  text-line-spacing: -4;
  text-min-distance: 15;
  [zoom>=13] { text-min-distance: 4; }
  text-size: 12;
  [zoom>=11] { text-size: 14; text-min-distance: 18; }
  [zoom>=12] { text-size: 15; text-wrap-width: 80; }
  [zoom>=13] { text-size: 16; text-wrap-width: 120; }
  [zoom>=14] { text-size: 18; text-wrap-width: 160; text-halo-radius: 3; }
}

#place_label[type='village'][zoom>=10][zoom<=14] {
  text-name: @name;
  text-face-name: @sans;
  text-placement: point;
  text-fill: @town_text;
  text-size: 11;
  text-halo-fill: @town_halo;
  text-halo-radius: 2;
  text-halo-rasterizer: fast;
  text-wrap-width: 60;
  text-wrap-before: true;
  text-min-distance: 40;
  text-line-spacing: -4;
  [zoom>=12] { text-size: 12; }
  [zoom>=13] { text-wrap-width: 80; }
  [zoom>=14] { text-size: 14; text-wrap-width: 100; }
}

#place_label[type='suburb'][zoom>=12][zoom<=17] {
  text-name: @name;
  text-face-name: @sans_lt;
  text-placement: point;
  text-fill: @other_text;
  text-size: 11;
  text-halo-fill: @other_halo;
  text-halo-radius: 1.5;
  text-halo-rasterizer: fast;
  text-wrap-width: 60;
  text-wrap-before: true;
  text-min-distance: 4;
  text-line-spacing: -2;
  [zoom=12] { text-min-distance: 30; }
  [zoom>=13] { text-size: 12; text-min-distance: 20; }
  [zoom>=14] { text-size: 13; text-wrap-width: 80; }
}

#place_label[zoom>=13][zoom<=18] {
  [type='hamlet'],
  [type='neighbourhood'] {
    text-name: @name;
    text-face-name: @sans_lt;
    text-placement: point;
    text-fill: @other_text;
    text-size: 11;
    text-halo-fill: @other_halo;
    text-halo-radius: 1.5;
    text-halo-rasterizer: fast;
    text-wrap-width: 60;
    text-wrap-before: true;
    text-min-distance: 4;
    text-line-spacing: -2;
    [zoom>=14] { text-size: 12; text-wrap-width: 80; }
  }
}

#water_label {
  [zoom<=15][area>200000] {
    text-name: @name;
    text-halo-radius: 2;
    text-halo-rasterizer: fast;
    text-size: 11;
    text-wrap-width: 50;
    text-wrap-before: true;
    text-halo-fill: fadeout(#fff,80);
    text-line-spacing: -2;
    text-face-name: @sans_italic;
    text-fill: @water_dark;
  }
}

#waterway_label[type='river'][zoom>=12],
#waterway_label[type='canal'][zoom>=14] {
  text-avoid-edges: true;
  text-name: @name;
  text-face-name: @sans_italic;
  text-fill: @water_dark;
  text-halo-fill: fadeout(#fff,80%);
  text-halo-radius: 1.5;
  text-halo-rasterizer: fast;
  text-placement: line;
  text-min-distance: 400;
  text-size: 10;
  text-character-spacing: 0.25;
  text-dy: -7;
  [type='river'][zoom=14] {
    text-size: 10;
  }
}

#road_label[class='motorway'][zoom>=8][reflen>=1][reflen<=6],
#road_label[class='main'][zoom>=8][reflen>=1][reflen<=6] {
  shield-name: "[ref]";
  shield-file: url("img/shield/motorway_sm_[reflen].png");
  shield-size: 9;
  shield-face-name: @sans_bold;
  shield-fill: #fff;
  shield-spacing: 300;
  shield-avoid-edges: true;
  shield-min-padding: 10;
  shield-min-distance: 40;
  [zoom>=12] { shield-min-distance: 80; }
}

#road_label['mapnik::geometry_type'=2] {
  [class='motorway'][zoom>=12],
  [class='main'][zoom>=12],
  [class='street'][zoom<=14][len>2500],
  [class='street_limited'] {
    text-avoid-edges: true;
    text-name: @name;
    text-placement: line;
    text-face-name: @sans_lt;
    text-fill: @road_text;
    text-size: 11;
    text-halo-fill: fadeout(@land,85);
    text-halo-radius: 2;
    text-halo-rasterizer: fast;
    text-min-distance: 200;
    [zoom>=14] { text-size: 12; }
    [zoom>=16] { text-size: 14; }
    [zoom>=18] { text-size: 16; }
    [class='motorway'],
    [class='main'] {
      [zoom>=14] { text-size: 12; }
      [zoom>=16] { text-size: 14; }
      [zoom>=17] { text-size: 16; }
      [zoom>=18] { text-size: 18; }
    }
  }
}

#road_label[zoom>=14]['mapnik::geometry_type'=2]
[class!='motorway']
[class!='main']
[class!='street']
[class!='street_limited'] {
  text-avoid-edges: true;
  text-name: @name;
  text-placement: line;
  text-face-name: @sans;
  text-fill: #666;
  text-size: 10;
  text-halo-fill: fadeout(@land,60);
  text-halo-radius: 2;
  text-halo-rasterizer: fast;
  text-min-distance: 200;
}