package main

import (
	"fmt"
	"github.com/gorilla/mux"
	"github.com/premo14/personal-site/database"
	"github.com/premo14/personal-site/health"
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

	// Register health check route
	health.RegisterRoutes(router)

	// Serve static files in production
	if os.Getenv("GO_ENV") == "production" {
		fs := http.FileServer(http.Dir("./client/dist"))
		router.PathPrefix("/").Handler(fs)
	}

	frontendPort := os.Getenv("VITE_APP_FRONTEND_PORT")
	if frontendPort == "" {
		frontendPort = "80" // Default to 3000 if the variable is not set
	}
	backendPort := os.Getenv("VITE_APP_BACKEND_PORT")
	if backendPort == "" {
		backendPort = "8080"
	}

	localhostURL := fmt.Sprint("https://premsanity.dev")
	httpsWwwDomain := fmt.Sprint("https://www.premsanity.com")
	httpsDomain := fmt.Sprint("https://premsanity.com")

	corsHandler := cors.New(cors.Options{
		AllowedOrigins:   []string{localhostURL, httpsWwwDomain, httpsDomain},
		AllowCredentials: true,
		AllowedMethods:   []string{"GET", "POST", "PATCH", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Content-Type", "Authorization"},
	})

	// Start the server with CORS handler
	log.Printf("Starting server on port %s", backendPort)
	log.Fatal(http.ListenAndServe("0.0.0.0:"+backendPort, corsHandler.Handler(router)))
}
