#!/usr/bin/env bash
set +e
environment=$1
export AWS_DEFAULT_REGION=ap-southeast-2
yarn run satay
