# FROM node:19-alpine3.16
# WORKDIR /usr/src/app/ui
# COPY package*.json ./
# RUN npm cache clean --force
# RUN npm install
# RUN npm install -g @angular/cli
# COPY . .
# RUN npm run build
# EXPOSE 4200
# # CMD ["ng", "serve"]
# CMD ["npm", "run", "start"]
# Stage 1: Build the Angular app
FROM node:14-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

# Stage 2: Serve the Angular app with nginx
FROM nginx:alpine

COPY  ./dist/my-projext/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
