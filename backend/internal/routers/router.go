package routers

import (
	"database/sql"
	"log"
	"net/http"

	"github.com/go-chi/chi/middleware"
	"github.com/go-chi/chi/v5"

	"github.com/lucasquin/lucasquin.dev/internal/middlewares"
)

func SetupRouter(db *sql.DB) *chi.Mux {
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Use(middlewares.Cors())

	RegisterRoutes(r, db)

	// Start the server
	log.Println("Starting server on :8080")
	http.ListenAndServe(":8080", r)

	return r
}
