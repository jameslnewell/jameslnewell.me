#!/usr/bin/env bash
dir=$(dirname "$0")
source $dir/utils/setup-shell.sh

environment=$1
export GA_ID=
yarn run build
