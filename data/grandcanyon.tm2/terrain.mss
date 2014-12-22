Map {
  background-color: #fff;
}

@land: #fff;
@water: #cdd;
@water_dark: #185869;

#hillshade {
  ::0[zoom<=13],
  ::1[zoom=14] {
    comp-op: hard-light;
    polygon-clip: false;
    image-filters-inflate: true;
    [class='shadow'] {
      polygon-fill: #216;
      polygon-comp-op: multiply;
      [zoom>=0][zoom<=3] { polygon-opacity: 0.14; }
      [zoom>=4][zoom<=5] { polygon-opacity: 0.12; }
      [zoom>=6][zoom<=14] { polygon-opacity: 0.10; }
    }
    [class='highlight'] {
      polygon-fill: #fff;
      polygon-opacity: 0.2;
    }
  }
  ::1 { image-filters: agg-stack-blur(2,2); }
}

#contour::line[index!=-1] {
  line-color: #000;
  line-opacity: 0.1;
  line-width: 1.2;
  [index>=5] {
    line-opacity: 0.2;
    line-width: 1.2;
  }
}

#contour::label {
  [zoom<=12][index>=5],
  [zoom>=13][index=10] {
    text-name: "[ele]+' m'";
    text-face-name: 'Open Sans Regular';
    text-placement: line;
    text-size: 10;
    text-fill: #89879c;
    text-avoid-edges: true;
  }
}
