package handler

import (
	"net/http"

	"github.com/lucasquin/lucasquin.dev/utils"
)

func CheckHealth(w http.ResponseWriter, r *http.Request) {
	utils.HttpResponse[string](w, "Status ok", http.StatusOK)
}
