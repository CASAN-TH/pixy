# Stage 0, based on Node.js, to build and compile Angular
FROM node:8.9 as node
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY ./ /app/
ARG env=prod
RUN npm run build -- --prod

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.13
## Copy our default nginx config
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=node /app/dist/pixy /usr/share/nginx/html
# CMD ["nginx", "-g", "daemon off;"]
