package routers

import (
	"database/sql"

	"github.com/go-chi/chi/v5"

	"github.com/lucasquin/lucasquin.dev/internal/handler"
	services "github.com/lucasquin/lucasquin.dev/internal/services/health"
)

func HealthRoutes(router *chi.Mux, db *sql.DB) {
	healthService := services.NewHealthService(db)
	healthHandler := handler.NewHealthHandler(healthService)

	router.Group(func(r chi.Router) {
		router.Get("/health", healthHandler.CheckHealth)
	})
}
