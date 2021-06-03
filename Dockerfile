# Specify a base image
FROM node:12.13.0-alpine as build 
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

## install only the packages defined in the package-lock.json (faster than the normal npm install)
RUN npm install 
# Copy the contents of the project to the image
COPY . .
# Run 'npm build' when the container starts.
RUN npm run build

# Pull in the from the official nginx image to run in the client 
FROM nginx 
# expose for pport 3000 
EXPOSE 3000
# Copy over the custom default configs and the build folder to the ngnix
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
