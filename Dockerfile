# Use an official Node.js runtime as a parent image
FROM node:18 AS development

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port for the development server
EXPOSE 3000

# Run the development server
CMD ["npm", "run", "dev"]
