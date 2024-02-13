package handler

import (
	"net/http"

	"github.com/lucasquin/lucasquin.dev/internal/services"
	"github.com/lucasquin/lucasquin.dev/internal/utils"
)

type PostHandler struct {
	service services.PostService
}

func NewPostHandler(service services.PostService) *PostHandler {
	return &PostHandler{
		service: service,
	}
}

func (h *PostHandler) GetPosts(w http.ResponseWriter, r *http.Request) {
	response, err := h.service.GetPosts()
	if err != nil {
		utils.HttpResponse(err, http.StatusBadRequest, w)
	}

	utils.HttpResponse(response, http.StatusOK, w)
}
