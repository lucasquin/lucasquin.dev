package health

import (
	"log"

	"gorm.io/gorm"

	"github.com/lucasquin/lucasquin.dev/internal/models"
)

type HealthService struct {
	db *gorm.DB
}

func NewHealthService(db *gorm.DB) *HealthService {
	return &HealthService{
		db: db,
	}
}

func (h *HealthService) CheckHealth() string {
	sqlDB, err := h.db.DB()
	if err != nil {
		log.Fatal(err)
	}

	err = sqlDB.Ping()
	if err != nil {
		log.Fatal(err)
	}

	h.checkTables()

	return "Connection with database ok"
}

func (h *HealthService) checkTables() {
	err := h.db.AutoMigrate(&models.Post{})
	if err != nil {
		log.Fatal("Failed to create/update table: Post")
	}

	err = h.db.AutoMigrate(&models.Category{})
	if err != nil {
		log.Fatal("Failed to create/update table: Category")
	}
}
