#!/usr/bin/env sh

aws cloudformation update-stack \
  --stack-name grand-canyon-geology-bucket \
  --template-body "file://data/storage/template.yaml" \
  --profile softies
