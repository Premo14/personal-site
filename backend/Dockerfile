# Stage 1: Build the Go application
FROM golang:1.20-alpine AS builder

# Set the working directory inside the builder container
WORKDIR /app

# Copy the Go module files and download the dependencies
COPY go.mod go.sum ./
RUN go mod download

# Copy the source code
COPY . .

# Build the Go application statically for a smaller final image
RUN CGO_ENABLED=0 GOOS=linux go build -o main .

# Stage 2: Create a minimal image with the built binary
FROM alpine:3.18

# Set the working directory inside the final container
WORKDIR /app

# Copy the binary from the builder stage
COPY --from=builder /app/main .

# Command to run the executable
CMD ["./main"]
