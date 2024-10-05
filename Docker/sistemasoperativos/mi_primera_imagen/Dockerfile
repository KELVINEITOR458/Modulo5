FROM ubuntu:latest
LABEL maintainer="kelvinbermeo8@gmail.com"
RUN apt-get update
RUN apt-get -y upgrade
RUN apt-get install -y curl
RUN apt-get install -y iputils-ping
RUN apt-get install -y telnet
CMD ["tail", "-f", "/dev/null"]
