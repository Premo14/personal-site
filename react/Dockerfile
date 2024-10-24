# Development Build: Use Node.js to run a live development server
FROM node:18-alpine

# Install curl
RUN apk add --no-cache curl

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port for development server (adjust to your development port, default to 3000)
EXPOSE ${VITE_APP_FRONTEND_PORT:-3000}

# Run the development server
CMD ["npm", "run", "dev"]

# ------------------------------
# Production Build (Uncomment when ready to switch to production)
# ------------------------------
# # Stage 1: Build the frontend for production
# FROM node:18-alpine AS build
#
# # Set the working directory
# WORKDIR /app
#
# # Copy package.json and package-lock.json (or yarn.lock)
# COPY package*.json ./
#
# # Install dependencies
# RUN npm install
#
# # Copy the rest of the application code
# COPY . .
#
# # Set environment variables (adjust as needed)
# ENV VITE_APP_PROTOCOL=${VITE_APP_PROTOCOL:-https}
# ENV VITE_APP_BASE_URI=${VITE_APP_BASE_URI:-api.premsanity.com}
# ENV VITE_APP_BACKEND_PORT=${VITE_APP_BACKEND_PORT:-8080}
#
# # Build the app for production
# RUN npm run build
#
# # Stage 2: Use Nginx to serve the static files
# FROM nginx:alpine
#
# # Copy the built files from the previous stage
# COPY --from=build /app/dist /usr/share/nginx/html
#
# # Expose the correct port for Nginx (typically 80 for production)
# EXPOSE 80
#
# # Start Nginx server
# CMD ["nginx", "-g", "daemon off;"]
