package database

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"log"
	"os"
	"time"
)

var DB *gorm.DB

func InitDatabase() error {
	dbUser := os.Getenv("DB_USER")
	dbPassword := os.Getenv("DB_PASSWORD")
	dbHost := os.Getenv("DB_HOST")
	dbPort := os.Getenv("DB_PORT")
	dbName := os.Getenv("DB_DATABASE")

	// DSN without the database name to create the database if it doesn't exist
	dsnWithoutDB := dbUser + ":" + dbPassword + "@tcp(" + dbHost + ":" + dbPort + ")/?timeout=5s"

	// Create the database if it doesn't exist
	err := createDatabaseIfNotExists(dsnWithoutDB, dbName)
	if err != nil {
		return fmt.Errorf("failed to create database: %w", err)
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

// createDatabaseIfNotExists checks if the database exists, and if not, creates it.
func createDatabaseIfNotExists(dsn, dbName string) error {
	// Connect to MySQL without a database specified
	sqlDB, err := sql.Open("mysql", dsn)
	if err != nil {
		return fmt.Errorf("unable to connect to MySQL: %w", err)
	}
	defer func(sqlDB *sql.DB) {
		err := sqlDB.Close()
		if err != nil {
			fmt.Println("Error closing DB")
		}
	}(sqlDB)

	// Check if the database exists
	_, err = sqlDB.Exec("CREATE DATABASE IF NOT EXISTS `" + dbName + "`")
	if err != nil {
		return fmt.Errorf("unable to create database %s: %w", dbName, err)
	}

	fmt.Println("Database", dbName, "is ready")
	return nil
}

func GetDB() *gorm.DB {
	return DB
}
