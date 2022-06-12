FROM node:18-slim

ARG MONGODB_USER \
    MONGODB_PASSWORD

ENV MONGODB_USER=${MONGODB_USER} \
    MONGODB_PASSWORD=${MONGODB_PASSWORD}

COPY . /usr/src/app

WORKDIR /usr/src/app

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

RUN npm i

RUN touch .env

RUN echo "MONGODB_URL=mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@mongo:27017/folio_db" > .env

RUN echo "MONGODB_URL=mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@mongo:27017/folio_db"

RUN cat .env

EXPOSE 5000

CMD ["npm","start"]