FROM node:latest

COPY . /var/www

WORKDIR /var/www

EXPOSE 3000

# RUN apk add --update \
# 		make

RUN npm install

CMD make

