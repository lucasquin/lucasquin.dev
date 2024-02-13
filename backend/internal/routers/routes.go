package routers

import (
	"github.com/go-chi/chi/v5"
	"gorm.io/gorm"
)

func RegisterRoutes(r *chi.Mux, db *gorm.DB) {
	HealthRoutes(r, db)
}
