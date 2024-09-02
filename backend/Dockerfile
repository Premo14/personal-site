# Use an official Go runtime as a parent image
FROM golang:1.22 AS builder

# Set the working directory
WORKDIR /app

# Copy the Go module files and download the dependencies
COPY go.mod go.sum ./
RUN go mod download

# Copy the source code
COPY . .

# Build the Go application
RUN go build -o main .

# Use a minimal base image for the final stage
FROM golang:1.22

# Install necessary packages
RUN apt-get update && apt-get install -y \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Copy the binary from the builder stage
COPY --from=builder /app/main .

# Expose the port the app runs on
EXPOSE ${BACKEND_PORT:-8080}

# Command to run the executable
#CMD ["sh", "-c", "./main && tail -f /dev/null"] # for debugging
CMD ["./main"]
