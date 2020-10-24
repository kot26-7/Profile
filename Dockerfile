FROM node:lts-alpine

RUN mkdir /myapp
WORKDIR /myapp
COPY . /myapp

RUN apk update && \
    npm install -g npm @vue/cli