@case: #fff;
@motorway: #a3abb7;
@main: #8c92a3;
@street: #eff;
@path: #987;

#road,
#bridge {
  ::mask { opacity: 1; }
  ::case { opacity: 1; }
  ::fill { opacity: 1; }
  ::path { opacity: 1; }
}

#road,
#bridge {
  [class='motorway']['mapnik::geometry_type'=2], {
    ::case[zoom>=6] {
      line-color: @case;
      [zoom<=9] { line-color: @motorway; }
      #road { line-cap: round; }
      line-width: 0.6;
      [zoom>= 8] { line-width: 0.8; }
      [zoom>=10] { line-width: 2.8; }
      [zoom>=11] { line-width: 3; }
      [zoom>=12] { line-width: 4; }
      [zoom>=13] { line-width: 5; }
      [zoom>=14] { line-width: 6.5; }
    }
    ::fill[zoom>=10] {
      line-color: @motorway;
      line-cap: round;
      [zoom>=11] { line-width: 1.2; }
      [zoom>=12] { line-width: 2; }
      [zoom>=13] { line-width: 3; }
      [zoom>=14] { line-width: 4; }
    }
  }
  [class='motorway_link']['mapnik::geometry_type'=2], {
    ::case {
      line-color: @case;
      #road { line-cap: round; }
      [zoom>=12] { line-width: 2.8; }
      [zoom>=14] { line-width: 3.5; }
    }
    ::fill[zoom>=10] {
      line-color: @motorway;
      line-cap: round;
      [zoom>=12] { line-width: 1.2; }
      [zoom>=14] { line-width: 2; }
    }
  }
  [class='main']['mapnik::geometry_type'=2] {
    ::case[zoom>=6] {
      line-color: @case;
      [zoom<=11] { line-color: @main; }
      #road { line-cap: round; }
      line-width: 0.4;
      [zoom>=12] { line-width: 3; }
      [zoom>=13] { line-width: 3.5; }
      [zoom>=14] { line-width: 4; }
    }
    ::fill[zoom>=12] {
      line-color: @main;
      line-cap: round;
      [zoom>=12] { line-width: 1; }
      [zoom>=13] { line-width: 1.5; }
      [zoom>=14] { line-width: 2; }
    }
  }
  [class='street']['mapnik::geometry_type'=2],
  [class='street_limited']['mapnik::geometry_type'=2] {
    ::case[zoom>=12] {
      line-color: @land * 0.8;
      line-opacity: 0.5;
      #road { line-cap: round; }
      [zoom>=13] { line-width: 4; }
      [zoom>=14] { line-width: 4; }
    }
    ::fill[zoom>=13] {
      line-color: @street;
      #road { line-cap: round; }
      [class='street_limited'] { line-dasharray: 6,1; }
      [zoom>=13] { line-width: 1.2; }
      [zoom>=14] { line-width: 1.6; }
    }
  }
  [class='service']['mapnik::geometry_type'=2] {
    ::case[zoom>=13] {
      line-color: #000;
      line-opacity: 0.04;
      #road { line-cap: round; }
      [zoom=13] { line-opacity: 0.5; }
      [zoom>=14] { line-width: 3; }
    }
    ::fill[zoom>=13] {
      line-color: @street;
      #road { line-cap: round; }
      [zoom>=14] { line-width: 1; }
    }
  }
  [class='path'][type!='steps'] {
    ::case[zoom>=14]['mapnik::geometry_type'=2] {
      line-color: #ffd;
      line-opacity: 0.5;
      #bridge { line-opacity: 1; }
      line-join: round;
      line-width: 2;
    }
    ::path[zoom>=14]['mapnik::geometry_type'=2] {
      line-join: round;
      line-width: 1;
      line-color: @path;
      [type='footway'],[type='hiking'],
      [type='cycleway'] {
        line-dasharray: 2,1;
      }
      [type='path'],[type='trail'],
      [type='mtb'] {
        line-dasharray: 6,2;
      }
      [type='other'] {
        line-dasharray: 2,3;
      }
    }
  }
}
