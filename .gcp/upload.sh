#!/usr/bin/env bash

ENV=development

gsutil -m rsync -r -d .build/ gs://jameslnewell.dev/
