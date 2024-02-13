package main

import (
	"log"

	"github.com/lucasquin/lucasquin.dev/internal/database/mysql"
	"github.com/lucasquin/lucasquin.dev/internal/routers"
)

func main() {
	db, err := mysql.Connect()

	sqlDB, err := db.DB()
	if err != nil {
		log.Fatal("failed to get database", err)
	}
	defer func() {
		err := sqlDB.Close()
		if err != nil {
			log.Fatal("failed to close database")
		}
	}()

	routers.SetupRouter(db)
}
