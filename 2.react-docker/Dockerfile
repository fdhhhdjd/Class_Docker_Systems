FROM node:current-alpine AS development

ENV NODE_ENV development

WORKDIR /app

COPY ./package.json .

RUN yarn

COPY . .

CMD ["yarn", "dev"]