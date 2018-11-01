-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "blogger" database --
CREATE DATABASE burgers_db;

-- Makes it so all of the following code will affect bamazon_db --
USE burgers_db;

--create table--
CREATE TABLE burgers (
 -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR (50)  NOT NULL,
  devoured BOOLEAN DEFAULT false, 
  Primary Key (id)
  );