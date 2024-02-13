package main

import (
	"log"

	_ "github.com/go-sql-driver/mysql"

	"github.com/lucasquin/lucasquin.dev/internal/database/mysql"
	"github.com/lucasquin/lucasquin.dev/internal/routers"
)

func main() {
	db, err := mysql.Connect()
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	routers.SetupRouter(db)
}
