package routers

import (
	"github.com/go-chi/chi/v5"

	"github.com/lucasquin/lucasquin.dev/internal/handler"
	services "github.com/lucasquin/lucasquin.dev/internal/services/post"
)

func PostRoutes(router *chi.Mux) {

	Service := services.
	router.Group(func(r chi.Router) {
		router.Get("/posts", handler.GetPosts)
	})
}
