create database hola;
use hola;
CREATE TABLE books(
   id int primary key not null auto_increment,
   title VARCHAR(25),
   author VARCHAR(25),
   editorial VARCHAR(25)
);

INSERT INTO books (title, author, editorial) values
('La Iliada', 'Homero', 'Antisana');
INSERT INTO books (title, author, editorial) values
('Romero y Julieta', 'Homero', 'Christian');
INSERT INTO books (title, author, editorial) values
('Escritos', 'Pepito', 'Melanie');

SELECT * FROM hola.books;