package routers

import (
	"github.com/go-chi/chi/v5"

	"github.com/lucasquin/lucasquin.dev/handler"
)

func HealthRoutes(router *chi.Mux) {
	router.Group(func(r chi.Router) {
		router.Get("/health", handler.CheckHealth)
	})
}
