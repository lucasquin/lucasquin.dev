package routers

import (
	"github.com/go-chi/chi/v5"

	"github.com/lucasquin/lucasquin.dev/internal/handler"
	services "github.com/lucasquin/lucasquin.dev/internal/services/health"
)

func HealthRoutes(router *chi.Mux) {
	healthHandler := handler.NewHealthHandler(services.HealthService())

	router.Group(func(r chi.Router) {
		router.Get("/health", healthHandler.CheckHealth)
	})
}
