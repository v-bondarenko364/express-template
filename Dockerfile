FROM node:12-alpine

WORKDIR /opt/app/

COPY package.json webpack.config.js .env.dev tsconfig.json ./

RUN yarn

CMD yarn start:dev

