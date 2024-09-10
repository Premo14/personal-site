# Use an official Go runtime as a parent image
FROM golang:1.22

# Set the working directory
WORKDIR /app

# Copy the Go module files and download the dependencies
COPY go.mod go.sum ./
RUN go mod download

# Copy the source code
COPY . .

# Expose the port the app runs on
EXPOSE ${BACKEND_PORT:-8080}

# Command to run the executable
#CMD ["sh", "-c", "./main && tail -f /dev/null"] # for debugging
CMD ["./main"]