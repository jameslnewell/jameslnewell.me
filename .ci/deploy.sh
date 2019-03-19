#!/usr/bin/env bash
dir=$(dirname "$0")
source $dir/utils/setup-shell.sh

environment=$1
export AWS_DEFAULT_REGION=ap-southeast-2
yarn run satay
