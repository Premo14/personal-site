package main

import (
	"fmt"
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

	frontendPort := os.Getenv("VITE_APP_FRONTEND_PORT")
	if frontendPort == "" {
		frontendPort = "3000" // Default to 3000 if the variable is not set
	}

	// Construct the localhost URL with the correct port
	localhostURL := fmt.Sprintf("http://localhost:%s", frontendPort)
	productionURL := fmt.Sprint("http://98.83.131.132/")
	domain := fmt.Sprint("https://premsanity.com")

	// Setup CORS with the dynamically generated localhost URL
	corsHandler := cors.New(cors.Options{
		AllowedOrigins:   []string{localhostURL, productionURL, domain}, // Add the dynamically generated localhost URL
		AllowCredentials: true,
		AllowedMethods:   []string{"GET", "POST", "PATCH", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Content-Type", "Authorization"},
	})

	port := os.Getenv("BACKEND_PORT")
	if port == "" {
		port = "8080"
	}

	// Start the server with CORS handler
	log.Printf("Starting server on port %s", port)
	log.Fatal(http.ListenAndServe("0.0.0.0:"+port, corsHandler.Handler(router)))
}
