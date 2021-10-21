create database MA;
USE MA;
#drop database MA

CREATE TABLE usuario (
id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
nombre VARCHAR(256) NOT NULL,
usuario VARCHAR(256) NOT NULL,
contrasena VARCHAR(256) NULL,
edad integer NOT NULL,
fecha_registro date not null,
rol enum('1','2') not null DEFAULT '1');

INSERT INTO usuario 
( nombre, usuario, contrasena, edad, fecha_registro, rol) VALUES 
('Administrador','admin','123',100,"2021/10/20",2),
('juan','username1','contrasenaSegura',19,"2021/10/19",1),
('henrry','username2','123456',25,"2021/10/18",1),
('michael','username3','contrasena123',33,"2021/10/17",1);

  
  CREATE TABLE ticket (id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
                              usuario VARCHAR(256) NOT NULL,
                              solicitud VARCHAR(256) NOT NULL,
                              fecha_inicio_requerimiento date NOT NULL,
                              estado enum('1','2') not null DEFAULT '1',
                              fecha_cierre_requerimiento date not null DEFAULT "0000/00/00");
