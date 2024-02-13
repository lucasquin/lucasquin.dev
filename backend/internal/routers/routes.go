package routers

import (
	"github.com/go-chi/chi/v5"
)

func RegisterRoutes(router *chi.Mux) {
	HealthRoutes(router)
	PostRoutes(router)
}
