#!/usr/bin/env bash
dir=$(dirname "$0")
source $dir/utils/setup-shell.sh
environment=$1

# assume the role
source $dir/utils/assume-role.sh $RoleARN "deployment"

export BUCKET=$(aws cloudformation describe-stacks --stack-name jameslnewell-website --query "Stacks[0].Outputs[?OutputKey=='BucketName'].OutputValue" --output text)

yarn run satay
