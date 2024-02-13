package health

import (
	"database/sql"
	"log"
)

type HealthService struct {
	db *sql.DB
}

func NewHealthService(db *sql.DB) *HealthService {
	return &HealthService{
		db: db,
	}
}

func (hs *HealthService) CheckHealth() string {
	err := hs.db.Ping()
	if err != nil {
		log.Fatal(err)
	}

	return "Connection with database ok"
}
