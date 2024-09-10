package database

import (
	"fmt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"log"
	"os"
	"time"
)

var DB *gorm.DB
var err error

func InitDatabase() error {
	dbUser := os.Getenv("MYSQL_USER")
	dbPassword := os.Getenv("MYSQL_PASSWORD")
	dbHost := os.Getenv("MYSQL_HOST")
	dbPort := os.Getenv("MYSQL_PORT")
	dbName := os.Getenv("MYSQL_DATABASE")
	dsn := dbUser + ":" + dbPassword + "@tcp(" + dbHost + ":" + dbPort + ")/" + dbName + "?timeout=5s"
	retryCount := 5

	for i := 0; i < retryCount; i++ {
		DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
		if err == nil {
			fmt.Println("Connected to MySQL")
			return nil
		}

		log.Printf("Failed to connect to MySQL (attempt %d/%d): %s", i+1, retryCount, err)
		time.Sleep(5 * time.Second)
	}

	return fmt.Errorf("failed to connect to MySQL after %d attempts", retryCount)
}

func GetDB() *gorm.DB {
	return DB
}
