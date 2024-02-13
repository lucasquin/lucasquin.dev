package routers

import (
	"database/sql"

	"github.com/go-chi/chi/v5"
)

func RegisterRoutes(r *chi.Mux, db *sql.DB) {
	HealthRoutes(r, db)
}
