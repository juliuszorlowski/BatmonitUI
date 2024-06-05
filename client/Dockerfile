FROM node:20-alpine as build-stage

WORKDIR /client

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "./startup.sh" ]