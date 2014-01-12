@trail-color: #707070;
@trail-dash: 8,2;
@trail-width: 1.25;
@simplify: 10;

#trails [zoom > 9] {
  ::border {
    line-simplify: @simplify;
  	line-color: #ccc;
    comp-op: lighten;
    line-cap: round;
    line-width: @trail-width * 1.75;
  }
  
  line-simplify: @simplify;
  line-cap: butt;
  line-width: @trail-width;
  line-color: @trail-color;
  line-dasharray: @trail-dash;
}

#trail-labels [zoom > 12] {
  text-face-name: "Open Sans Italic","Arial Unicode MS Regular";
  text-name: [name];
  text-placement: line;
  text-halo-fill: #ccc;
  text-halo-radius: 1;
  text-size: 11;
  [zoom > 13] { text-size: 12; }
  text-character-spacing: 1.25;
}

#rapids [zoom > 12] {
  text-face-name: "Open Sans Regular","Arial Unicode MS Regular";
  text-name: [name];
  text-halo-fill: #fff;
  text-halo-radius: 1.5;
  text-size: 11;
  text-wrap-width: 1;
  [zoom > 13] { text-size: 12; }
}
