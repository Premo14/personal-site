package health

import (
	"github.com/gorilla/mux"
	"log"
	"net/http"
)

func CheckHealthHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	_, err := w.Write([]byte("Service is healthy"))
	if err != nil {
		log.Println("Error in Health Check Handler:", err)
	}
}

func RegisterRoutes(router *mux.Router) {
	router.HandleFunc("/health", CheckHealthHandler).Methods("GET")
}
