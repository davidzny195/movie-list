DROP DATABASE movies;

CREATE DATABASE movies;

USE movies;

CREATE TABLE movie_list (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  title VARCHAR(255),
  description VARCHAR (255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);