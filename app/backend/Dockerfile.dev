FROM node:16.14-alpine
WORKDIR /app_back-end
COPY . /app_back-end/
EXPOSE 3001
RUN npm i
ENTRYPOINT ["npm", "run", "dev"]
