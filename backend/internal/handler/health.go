package handler

import (
	"net/http"

	services "github.com/lucasquin/lucasquin.dev/internal/services/health"
	"github.com/lucasquin/lucasquin.dev/internal/utils"
)

type HealthHandler struct {
	HealthService *services.HealthService
}

func NewHealthHandler(service *services.HealthService) *HealthHandler {
	return &HealthHandler{
		HealthService: service,
	}
}

func (h *HealthHandler) CheckHealth(w http.ResponseWriter, r *http.Request) {
	response := h.HealthService.CheckHealth()
	utils.HttpResponse(response, http.StatusOK, w)
}
