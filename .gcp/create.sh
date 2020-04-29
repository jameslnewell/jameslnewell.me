#!/usr/bin/env bash

ENV=development

gcloud deployment-manager deployments create infrastructure \
  --template .gcp/infrastructure.jinja \
  --properties "environment:$ENV"
  # --preview \

# # create the bucket
# gsutil mb -c standard -l US -b on gs://jameslnewell.dev.${ENV}


# # create the certificate
# if ["$ENV" == "production"]; then
#   gcloud beta compute ssl-certificates create jameslnewell.dev \
#     --global \
#     --domains jameslnewell.dev \
#     --description The certificate for https://jameslnewell.dev/
# fi
