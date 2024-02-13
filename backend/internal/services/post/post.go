package post

type PostService interface {
	GetPosts() ([]Post, error)
}

type Category struct {
	Category string `json:"category"`
}

type Post struct {
	Title       string     `json:"title"`
	Slug        string     `json:"slug"`
	Description string     `json:"description"`
	Date        string     `json:"date"`
	Published   bool       `json:"published"`
	Categories  []Category `json:"categories"`
}

func GetPosts() ([]Post, error) {
	return []Post{}, nil
}
