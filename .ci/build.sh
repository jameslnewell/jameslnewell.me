#!/usr/bin/env bash
set +e
environment=$1
export GA_ID=
yarn run build
