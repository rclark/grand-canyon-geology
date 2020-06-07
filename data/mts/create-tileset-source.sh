#!/usr/bin/env bash

set -eu

curl \
  -X POST \
  "https://api.mapbox.com/tilesets/v1/sources/rclark/grand-canyon?access_token=${ACCESS_TOKEN}" \
  -F "file=@$(pwd)/geolines.ld.json" \
  --header "Content-Type: multipart/form-data"

curl \
  -X POST \
  "https://api.mapbox.com/tilesets/v1/sources/rclark/grand-canyon?access_token=${ACCESS_TOKEN}" \
  -F "file=@$(pwd)/geopolys.ld.json" \
  --header "Content-Type: multipart/form-data"
