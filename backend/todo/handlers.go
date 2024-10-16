package todo

import (
	"encoding/json"
	"github.com/gorilla/mux"
	"github.com/premo14/personal-site/database"
	"net/http"
)

// Todo Model definition
type Todo struct {
	ID        uint   `json:"id,omitempty" gorm:"primaryKey"`
	Completed bool   `json:"completed" gorm:"default:false"`
	Body      string `json:"body" gorm:"type:text"`
}

func GetTodos(w http.ResponseWriter, r *http.Request) {
	var todos []Todo
	if err := database.GetDB().Find(&todos).Error; err != nil {
		http.Error(w, "Failed to get todos", http.StatusInternalServerError)
		return
	}
	respondWithJSON(w, http.StatusOK, todos)
}

func CreateTodo(w http.ResponseWriter, r *http.Request) {
	var todo Todo
	if err := json.NewDecoder(r.Body).Decode(&todo); err != nil {
		http.Error(w, "Failed to parse request body", http.StatusBadRequest)
		return
	}
	if todo.Body == "" {
		http.Error(w, "Body is empty", http.StatusBadRequest)
		return
	}
	if err := database.GetDB().Create(&todo).Error; err != nil {
		http.Error(w, "Failed to create todo", http.StatusInternalServerError)
		return
	}
	respondWithJSON(w, http.StatusCreated, map[string]uint{"id": todo.ID})
}

func UpdateTodo(w http.ResponseWriter, r *http.Request) {
	id := mux.Vars(r)["id"]
	var todo Todo
	if err := database.GetDB().First(&todo, id).Error; err != nil {
		http.Error(w, "Todo not found", http.StatusNotFound)
		return
	}
	todo.Completed = !todo.Completed
	if err := database.GetDB().Save(&todo).Error; err != nil {
		http.Error(w, "Failed to update todo", http.StatusInternalServerError)
		return
	}
	respondWithJSON(w, http.StatusOK, map[string]bool{"success": true})
}

func DeleteTodo(w http.ResponseWriter, r *http.Request) {
	id := mux.Vars(r)["id"]
	if err := database.GetDB().Delete(&Todo{}, id).Error; err != nil {
		http.Error(w, "Failed to delete todo", http.StatusInternalServerError)
		return
	}
	respondWithJSON(w, http.StatusOK, map[string]bool{"success": true})
}

// Helper function to write JSON responses
func respondWithJSON(w http.ResponseWriter, statusCode int, payload interface{}) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(statusCode)
	if err := json.NewEncoder(w).Encode(payload); err != nil {
		http.Error(w, "Failed to encode response", http.StatusInternalServerError)
	}
}
