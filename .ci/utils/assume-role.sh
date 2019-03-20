unset  AWS_SESSION_TOKEN

role=$1
session=$2

temp_role=$(aws sts assume-role \
  --role-arn $role \
  --role-session-name $session
)

export AWS_ACCESS_KEY_ID=$(echo $temp_role | jq .Credentials.AccessKeyId | xargs)
export AWS_SECRET_ACCESS_KEY=$(echo $temp_role | jq .Credentials.SecretAccessKey | xargs)
export AWS_SESSION_TOKEN=$(echo $temp_role | jq .Credentials.SessionToken | xargs)
