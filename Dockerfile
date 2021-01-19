FROM node:12-alpine

WORKDIR /opt/app/

COPY package.json webpack.config.js .env.dev tsconfig.json ./

RUN npm install

CMD npm run start:dev

