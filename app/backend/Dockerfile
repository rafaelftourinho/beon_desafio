# FROM node:16.14-alpine
# WORKDIR /app_back-end
# COPY . ./
# EXPOSE 3001
# RUN npm i
# RUN npm run build
# RUN npm run seed
# ENTRYPOINT ["npm", "start"]

FROM node:16.14-alpine
WORKDIR /app_back-end
COPY . /app_back-end/
EXPOSE 3001
RUN npm i
RUN npm run build
ENTRYPOINT ["npm", "run", "dev"]
