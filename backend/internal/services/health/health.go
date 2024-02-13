package health 

type HealthService interface {
	CheckHealth() string 
}

func CheckHealth() string {
	return "API running." 
}
