package todo

import (
	"github.com/gorilla/mux"
	"gorm.io/gorm"
)

func RegisterRoutes(router *mux.Router) {
	router.HandleFunc("/api/todos", GetTodos).Methods("GET")
	router.HandleFunc("/api/todos", CreateTodo).Methods("POST")
	router.HandleFunc("/api/todos/{id:[0-9]+}", UpdateTodo).Methods("PATCH")
	router.HandleFunc("/api/todos/{id:[0-9]+}", DeleteTodo).Methods("DELETE")
}

func Migrate(db *gorm.DB) error {
	err := db.AutoMigrate(&Todo{})
	if err != nil {
		return err
	}
	return nil
}
