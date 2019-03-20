#!/usr/bin/env bash
dir=$(dirname "$0")
source $dir/utils/setup-shell.sh
source $dir/utils/install-aws.sh
environment=$1

# assume the role
source $dir/utils/assume-role.sh $RoleARN "deployment"

# create/update the stack
aws cloudformation deploy \
  --stack-name jameslnewell-website \
  --template-file ./cloudformation.yml \
  --parameter-overrides \
    Environment=$environment \
    HostedZoneId=$HostedZoneId \
    CanonicalDomain=$CanonicalDomain \
    AlternateDomain=$AlternateDomain \
    CertificateARN=$CertificateARN \
  --no-fail-on-empty-changeset

# list the stack outputs
aws cloudformation describe-stacks \
  --stack-name jameslnewell-website
