package handler

import (
	"net/http"

	"github.com/lucasquin/lucasquin.dev/utils"
)

func GetPosts(w http.ResponseWriter, r *http.Request) {
	utils.HttpResponse[string](w, "Same posts", http.StatusOK)
}
