#!/usr/bin/env bash

set -eu

curl \
  -X POST \
  "https://api.mapbox.com/tilesets/v1/rclark.grand-canyon-mts?access_token=${ACCESS_TOKEN}" \
  -d "@$(pwd)/mapbox-tileset/recipe.json" \
  --header "Content-Type:application/json"

curl \
  -X POST \
  "https://api.mapbox.com/tilesets/v1/rclark.grand-canyon-mts/publish?access_token=${ACCESS_TOKEN}"
