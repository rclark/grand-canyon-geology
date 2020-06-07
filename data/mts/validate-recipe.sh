#!/usr/bin/env bash

set -eu

curl \
  -X PUT \
  "https://api.mapbox.com/tilesets/v1/validateRecipe?access_token=${ACCESS_TOKEN}" \
  -d @recipe.json \
  --header "Content-Type:application/json"
