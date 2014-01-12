#arizonaslope {
  raster-opacity: 0.5;
  raster-comp-op: multiply;
  raster-scaling: lanczos;
  raster-colorizer-default-mode: linear;
  raster-colorizer-default-color: transparent;
  raster-colorizer-stops:
    stop(0, #fff)
    stop(90, #000)
}

.shade {
  raster-opacity: 0.5;
  raster-comp-op: multiply;
  raster-scaling: lanczos;
  raster-colorizer-default-mode: linear;
  raster-colorizer-default-color: transparent;
  raster-colorizer-stops:
    stop(1, #000)
    stop(170, #fff)
}