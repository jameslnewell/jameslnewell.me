# install AWS CLI
# TODO: create a docker image in order to speed this up
apt-get -y -qq update
apt-get -y -qq install python3.4-dev
curl -O https://bootstrap.pypa.io/get-pip.py
python3.4 get-pip.py --user
pip install awscli --upgrade --user
