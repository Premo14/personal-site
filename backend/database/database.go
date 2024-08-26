package database

import (
	"fmt"
	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"log"
	"os"
	"time"
)

var DB *gorm.DB
var err error

func InitDatabase() error {
	err = godotenv.Load(".env")
	if err != nil {
		log.Fatal("Error loading .env file:", err)
	}

	dsn := os.Getenv("MYSQL_DSN")
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