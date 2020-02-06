FROM node:10-alpine3.9
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
RUN npm install -P
RUN apk add mongodb mongodb-tools
RUN npm run build-production
RUN npm run seed
EXPOSE 3002
CMD [ "npm", "start" ]