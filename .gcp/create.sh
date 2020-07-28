#!/usr/bin/env bash

ENV=development

gcloud deployment-manager deployments create infrastructure \
  --template .gcp/infrastructure.jinja \
  --properties "environment:$ENV"
