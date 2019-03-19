#!/usr/bin/env bash
set +e
environment=$1
export AWS_DEFAULT_REGION=ap-southeast-2

# create/update the stack
aws cloudformation deploy \
  --stack-name jameslnewell-website \
  --template-file ./cloudformation.yml \
  --parameter-overrides \
    Environment=$environment \
    HostedZoneId=ZEV303J0ZWF4F \
    CanonicalDomain=jameslnewell.dev \
    AlternateDomain=www.jameslnewell.dev \
    CertificateARN=arn:aws:acm:us-east-1:875588135668:certificate/c39474f5-20a3-4bc5-80a9-04cb279810c7

# list the stack outputs
aws cloudformation describe-stacks \
  --stack-name jameslnewell-website
