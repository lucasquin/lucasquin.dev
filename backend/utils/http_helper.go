package utils

import (
	"encoding/json"
	"net/http"
)

func HttpResponse[T any](w http.ResponseWriter, data T, statusCode int) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(statusCode)
	if err := json.NewEncoder(w).Encode(data); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
