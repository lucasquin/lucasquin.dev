package routers

import (
	"github.com/go-chi/chi/v5"

	"github.com/lucasquin/lucasquin.dev/handler"
)

func PostRoutes(router *chi.Mux) {
	router.Group(func(r chi.Router) {
		router.Get("/posts", handler.GetPosts)
	})
}
