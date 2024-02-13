package models

import (
	"gorm.io/gorm"
)

type Post struct {
	gorm.Model
	Title       string
	Slug        string
	Description string
	Published   bool
	Categories  []Category `gorm:"many2many:post_categories;"`
}
