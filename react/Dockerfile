## Development Build: Use Node.js to run a live development server
#FROM node:18-alpine
#
## Set the working directory
#WORKDIR /app
#
## Copy package.json and package-lock.json (or yarn.lock)
#COPY package*.json ./
#
## Install dependencies
#RUN npm install
#
## Copy the rest of the application code
#COPY . .
#
## Run the development server
#CMD ["npm", "run", "dev"]

# ------------------------------
# Production Build
# ------------------------------
# Stage 1: Build the app
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Use NGINX to serve the static files
FROM nginx:alpine

# Copy the custom NGINX configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
