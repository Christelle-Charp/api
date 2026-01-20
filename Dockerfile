FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache git docker-cli docker-cli-compose

RUN git config --global --add safe.directory /srv/portfolio

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 4000

CMD ["npm", "start"]