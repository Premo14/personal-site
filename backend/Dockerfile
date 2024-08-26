# Use an official Go runtime as a parent image
FROM golang:1.22 AS builder

# Set the working directory
WORKDIR /app

# Copy the Go module files and download the dependencies
COPY go.mod go.sum ./
RUN go mod download

# Copy the source code
COPY . .

# List files in the working directory to verify
RUN ls -l /app

# Build the Go application
RUN go build -o main . || { echo 'Build failed'; exit 1; }

# List files after build to verify binary presence
RUN ls -l /app

# Use a minimal base image for the final stage
FROM debian:bullseye-slim

# Install necessary packages
RUN apt-get update && apt-get install -y \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Copy the binary from the builder stage
COPY --from=builder /app/main .

# Expose the port the app runs on
EXPOSE 8080

# Command to run the executable
CMD ["sh", "-c", "./main && tail -f /dev/null"]
#CMD ["sh", "-c", "./main & wait"]
