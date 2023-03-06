FROM node:lts-alpine as build
WORKDIR /react-app

ARG REACT_APP_ADMIN_URL=https://strapi.quiz.smartbits.hu
ENV REACT_APP_ADMIN_URL=$REACT_APP_ADMIN_URL

ARG REACT_APP_PUBLIC_URL=https://quiz.smartbits.hu
ENV REACT_APP_PUBLIC_URL=$REACT_APP_PUBLIC_URL

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /react-app/build /usr/share/nginx/html
