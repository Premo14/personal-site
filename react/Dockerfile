# Use an official Node.js runtime as a parent image
FROM node:18 AS production

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port for the development server, but fall back to port 3000 if not set
EXPOSE ${FRONTEND_PORT:-3000}

# Run the development server
CMD ["npm", "run", "dev"]