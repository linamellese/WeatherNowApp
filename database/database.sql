-- Create database
CREATE DATABASE IF NOT EXISTS weathernow
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE weathernow;

-- Create user for application (run this if you want a dedicated DB user)
CREATE USER IF NOT EXISTS 'weathernow_app'@'localhost' IDENTIFIED BY 'secure_password_here';
GRANT ALL PRIVILEGES ON weathernow.* TO 'weathernow_app'@'localhost';
FLUSH PRIVILEGES;