package handler

import (
	"net/http"

	"github.com/lucasquin/lucasquin.dev/internal/services"
	"github.com/lucasquin/lucasquin.dev/internal/utils"
)

type HealthHandler struct {
	service services.HealthService
}

func NewHealthHandler(service services.HealthService) *HealthHandler {
	return &HealthHandler{
		service: service,
	}
}

func (h *HealthHandler) CheckHealth(w http.ResponseWriter, r *http.Request) {
	response := h.service.CheckHealth()
	utils.HttpResponse(response, http.StatusOK, w)
}
