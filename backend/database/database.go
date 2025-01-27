package database

import (
	"fmt"
	_ "github.com/go-sql-driver/mysql"
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
	dbHost := "mysql"
	dbPort := os.Getenv("MYSQL_PORT")
	dbName := os.Getenv("MYSQL_DATABASE")
	viteAppEnv := os.Getenv("VITE_APP_ENV")

	// DSN without the database name to create the database if it doesn't exist
	dsnWithoutDB := dbUser + ":" + dbPassword + "@tcp(" + dbHost + ":" + dbPort + ")/?timeout=5s"

	// Create the database if it doesn't exist using GORM Exec
	if viteAppEnv == "dev" {
		err := createDatabaseIfNotExists(dsnWithoutDB, dbName)
		if err != nil {
			return fmt.Errorf("failed to create database: %w", err)
		}
	}

	// DSN with the database name to connect after creation
	dsn := dbUser + ":" + dbPassword + "@tcp(" + dbHost + ":" + dbPort + ")/" + dbName + "?timeout=5s"

	// Retry the connection to the database
	retryCount := 5
	for i := 0; i < retryCount; i++ {
		DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
		if err == nil {
			fmt.Println("Connected to MySQL database:", dbName)
			return nil
		}

		log.Printf("Failed to connect to MySQL (attempt %d/%d): %s", i+1, retryCount, err)
		time.Sleep(5 * time.Second)
	}

	return fmt.Errorf("failed to connect to MySQL after %d attempts", retryCount)
}

func createDatabaseIfNotExists(dsn, dbName string) error {
	// Open a GORM connection without specifying a database
	tempDB, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		return fmt.Errorf("unable to connect to MySQL: %w", err)
	}
	defer func() {
		sqlDB, _ := tempDB.DB()
		err := sqlDB.Close()
		if err != nil {
			log.Fatal("Error closing database connection:", err)
		}
	}()

	// Use GORM to execute a raw SQL command to create the database if it doesn't exist
	err = tempDB.Exec("CREATE DATABASE IF NOT EXISTS `" + dbName + "`").Error
	if err != nil {
		return fmt.Errorf("unable to create database %s: %w", dbName, err)
	}

	fmt.Println("Database", dbName, "is ready")
	return nil
}

func GetDB() *gorm.DB {
	return DB
}
