package main

import (
	"github.com/gorilla/mux"
	"github.com/premo14/personal-site/database"
	"github.com/premo14/personal-site/health"
	"github.com/premo14/personal-site/todo"
	"github.com/rs/cors"
	"log"
	"net/http"
)

func main() {
	// Initialize the database
	if err := database.InitDatabase(); err != nil {
		log.Fatal("Database initialization failed:", err)
	}

	// Migrate model(s)
	if err := todo.Migrate(database.GetDB()); err != nil {
		log.Fatal("Migration failed:", err)
	}

	// Initialize router
	router := mux.NewRouter()

	// Register health check route
	health.RegisterRoutes(router)

	// Register to-do routes
	todo.RegisterRoutes(router)

	// CORS
	corsHandler := cors.New(cors.Options{
		AllowedOrigins:   []string{"https://www.premsanity.dev", "https://premsanity.com"},
		AllowCredentials: true,
		AllowedMethods:   []string{"GET", "POST", "PATCH", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Content-Type", "Authorization"},
	})

	// Define a static port (80) for the backend
	const backendPort = "80"

	// Start the server with CORS handler
	log.Printf("Starting server on port %s", backendPort)
	log.Fatal(http.ListenAndServe("0.0.0.0:"+backendPort, corsHandler.Handler(router)))
}
