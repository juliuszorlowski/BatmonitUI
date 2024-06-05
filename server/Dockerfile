FROM node:20-alpine

ENV batmonit_jwtPrivateKey=mySecureKey

WORKDIR /server

COPY package.json .

RUN npm install

COPY . .

RUN chmod +x startup.sh

EXPOSE 3900

ENTRYPOINT [ "./startup.sh" ]