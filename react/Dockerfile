## Use an official Node.js runtime as a parent image
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
#EXPOSE ${VITE_APP_FRONTEND_PORT:-443}
#
## Run the development server
#CMD ["npm", "run", "dev"]

# Stage 1: Build the frontend using Node.js
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set environment variables if needed (ensure these are available in the build step)
ENV VITE_APP_BACKEND_PROTOCOL=${VITE_APP_BACKEND_PROTOCOL:-http}
ENV VITE_APP_BASE_URI=${VITE_APP_BASE_URI:-premsanity.com}
ENV VITE_APP_BACKEND_PORT=${VITE_APP_BACKEND_PORT:-80}

# Build the app for production
RUN npm run build

# Stage 2: Use Nginx to serve the static files
FROM nginx:alpine

# Copy the built files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the correct port for Nginx
EXPOSE 443

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
