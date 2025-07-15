FROM node:20

WORKDIR /app

RUN apt-get update && apt-get install -y curl nano

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
