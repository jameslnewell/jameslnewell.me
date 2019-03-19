# install AWS CLI
# TODO: create a docker image in order to speed this up
RUN sudo apt-get update && \
    sudo apt-get install python-pip && \
    sudo pip install awscli
