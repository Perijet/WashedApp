CREATE DATABASE washedapp_db;

USE washedapp_db;

CREATE TABLE supplies(
	id int NOT NULL AUTO_INCREMENT,
	ItemName VARCHAR(50) NOT NULL,
	ItemDescription VARCHAR(50) NOT NULL,
    StockQuantity INTEGER(10) NOT NULL,
    Price DECIMAL(13,2) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE equipment(
	id int NOT NULL AUTO_INCREMENT,
	SerialNumber VARCHAR(50) NOT NULL,
	BrandName VARCHAR(50) NOT NULL,
	Type VARCHAR(50) NOT NULL,
	PurchaseDate DATE NOT NULL,
	ServiceDate DATE NOT NULL,
	PRIMARY KEY(id)
);