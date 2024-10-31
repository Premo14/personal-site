package main

import (
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
	if err := database.InitDatabase(); err != nil {
		log.Fatal("Database initialization failed:", err)
	}

	if err := todo.Migrate(database.GetDB()); err != nil {
		log.Fatal("Migration failed:", err)
	}

	router := mux.NewRouter()

	health.RegisterRoutes(router)
	todo.RegisterRoutes(router)

	corsHandler := cors.New(cors.Options{
		AllowedOrigins:   []string{"https://www.premsanity.dev", "https://premsanity.com"},
		AllowCredentials: true,
		AllowedMethods:   []string{"GET", "POST", "PATCH", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Content-Type", "Authorization"},
	})

	backendPort := os.Getenv("BACKEND_PORT")
	if backendPort == "" {
		log.Fatal("BACKEND_PORT is not set")
	}

	log.Printf("Starting server on port %s", backendPort)
	log.Fatal(http.ListenAndServe("0.0.0.0:"+backendPort, corsHandler.Handler(router)))
}
