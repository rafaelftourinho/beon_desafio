FROM node:16.14-alpine
WORKDIR /app_front-end
COPY . /app_front-end/
EXPOSE 3000
RUN npm i
ENTRYPOINT ["npm", "run", "dev"]
