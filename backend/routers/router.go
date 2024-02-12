package routers

import (
	"log"
	"net/http"

	"github.com/go-chi/chi/middleware"
	"github.com/go-chi/chi/v5"

	"github.com/lucasquin/lucasquin.dev/middlewares"
)

func InitializeRouter() *chi.Mux {
	router := chi.NewRouter()
	router.Use(middleware.Logger)
	router.Use(middleware.Recoverer)
	router.Use(middlewares.Cors())

	RegisterRoutes(router)

	// Start the server
	log.Println("Starting server on :8080")
	http.ListenAndServe(":8080", router)

	return router
}
