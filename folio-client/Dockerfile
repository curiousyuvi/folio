FROM node:18-slim

COPY . /usr/src/app

WORKDIR /usr/src/app

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

RUN npm i

EXPOSE 3000

CMD ["npm","start"]