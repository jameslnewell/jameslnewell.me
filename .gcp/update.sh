#!/usr/bin/env bash

ENV=development

gcloud deployment-manager deployments update infrastructure \
  --template .gcp/infrastructure.jinja \
  --properties "environment:$ENV"
  # --preview \
