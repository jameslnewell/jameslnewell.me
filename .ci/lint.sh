#!/usr/bin/env bash
dir=$(dirname "$0")
source $dir/utils/setup-shell.sh

yarn run lint
