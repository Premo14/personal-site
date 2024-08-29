package main

import (
	"github.com/gorilla/mux"
	"github.com/premo14/personal-site/database"
	"github.com/premo14/personal-site/todo"
	"github.com/rs/cors"
	"log"
	"net/http"
	"os"
)

func main() {
	// Initialize the database
	if err := database.InitDatabase(); err != nil {
		log.Fatal("Database initialization failed:", err)
	}

	// Migrate the Todo model (and any future models)
	if err := todo.Migrate(database.GetDB()); err != nil {
		log.Fatal("Migration failed:", err)
	}

	// Initialize the router
	router := mux.NewRouter()

	// Register todo routes
	todo.RegisterRoutes(router)

	// Serve static files in production
	if os.Getenv("GO_ENV") == "production" {
		fs := http.FileServer(http.Dir("./client/dist"))
		router.PathPrefix("/").Handler(fs)
	}

	corsHandler := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000", "ajaipremo.com"},
		AllowCredentials: true,
		AllowedMethods:   []string{"GET", "POST", "PATCH", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Content-Type", "Authorization"},
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	// Start the server with CORS handler
	log.Printf("Starting server on port %s", port)
	log.Fatal(http.ListenAndServe("0.0.0.0:"+port, corsHandler.Handler(router)))
}
