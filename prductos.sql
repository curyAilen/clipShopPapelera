-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.27-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para clipshop
CREATE DATABASE IF NOT EXISTS `clipshop` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `clipshop`;

-- Volcando estructura para tabla clipshop.productos
DROP TABLE IF EXISTS `productos`;
CREATE TABLE IF NOT EXISTS `productos` (
  `idProductos` int(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL DEFAULT '0',
  `FKidCategoria` int(10) unsigned NOT NULL DEFAULT 0,
  `filtro` varchar(155) NOT NULL,
  `precio` decimal(20,2) NOT NULL DEFAULT 0.00,
  `oferta` tinyint(1) DEFAULT 0,
  `imagen` varchar(155) NOT NULL,
  PRIMARY KEY (`idProductos`),
  KEY `FKidCategorias` (`FKidCategoria`),
  CONSTRAINT `FKidCategorias` FOREIGN KEY (`FKidCategoria`) REFERENCES `categorias` (`idCategorias`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=603 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla clipshop.productos: ~70 rows (aproximadamente)
INSERT IGNORE INTO `productos` (`idProductos`, `nombre`, `FKidCategoria`, `filtro`, `precio`, `oferta`, `imagen`) VALUES
	(533, 'Film Stretch Transparente- Rollo de 50 cm/2,5 kg', 1, 'film stretch', 1.00, 1, 'film-A.jpg'),
	(534, 'Film Stretch Negro- Rollo de 50 cm/2,5 kg', 1, 'film stretch', 1.00, 0, 'film-A.jpg'),
	(535, 'Film Stretch Verde- Rollo de 50 cm/2,5 kg', 1, 'film stretch', 1.00, 1, 'film-A.jpg'),
	(536, 'Film Stretch Azul- Rollo de 50 cm/2,5 kg', 1, 'film stretch', 1.00, 1, 'film-A.jpg'),
	(537, 'Film Stretch Rojo- Rollo de 50 cm/2,5 kg', 1, 'film stretch', 1.00, 1, 'film-A.jpg'),
	(538, 'Film Stretch Transparente-C/Mango- Rollo de 50cm/2,6kg', 1, 'film con mango', 1.00, 1, 'film-A.jpg'),
	(539, 'Film Stretch Negro-C/Mango- Rollo de 50cm/2,6kg', 1, 'film con mango', 1.00, 1, 'film-A.jpg'),
	(540, 'Film Stretch Transparente- Rollo de 50 cm/4 kg', 1, 'film stretch', 1.00, 0, 'film-A.jpg'),
	(541, 'Film Stretch Negro- Rollo de 50 cm/4 kg', 1, 'film stretch', 1.00, 0, 'film-A.jpg'),
	(542, 'Film Stretch Verde- Rollo de 50 cm/4 kg', 1, 'film stretch', 1.00, 0, 'film-A.jpg'),
	(543, 'Film Stretch Azul- Rollo de 50 cm/4 kg', 1, 'film stretch', 1.00, 0, 'film-A.jpg'),
	(544, 'Film Stretch Rojo- Rollo de 50 cm/4 kg', 1, 'film stretch', 1.00, 0, 'film-B.jpg'),
	(545, 'Film Stretch Transparente- Rollo de 10cm', 1, 'film stretch', 1.00, 0, 'film-B.jpg'),
	(546, 'Film Stretch Negro- Rollo de 10cm', 1, 'film stretch', 1.00, 1, 'film-B.jpg'),
	(547, 'Film Stretch Verde- Rollo de 10cm', 1, 'film stretch', 1.00, 1, 'film-B.jpg'),
	(548, 'Film Stretch Azul- Rollo de 10cm', 1, 'film stretch', 1.00, 1, 'film-B.jpg'),
	(549, 'Film Stretch Rojo- Rollo de 10cm', 1, 'film stretch', 1.00, 1, 'film-B.jpg'),
	(550, 'Film Alimenticio 38x1000', 1, 'film alimenticio', 1.00, 0, 'film-B.jpg'),
	(551, 'Rollo de burbujas de polietileno- Pluribol 50cm x 50mts', 1, 'pluribol ', 1.00, 0, 'film-B.jpg'),
	(552, 'Rollo de burbujas de polietileno- Pluribol 1mt x 50mts', 1, 'pluribol ', 1.00, 1, 'film-B.jpg'),
	(553, 'Rollo de cartón corrugado 1 mt x 25mts', 1, 'corrugado ', 1.00, 1, 'film-B.jpg'),
	(554, 'Rollo de cartón corrugado 80cm x 25mts', 1, 'corrugado ', 1.00, 1, 'film-B.jpg'),
	(555, 'Cinta de Embalaje 48 x100', 1, 'cinta ', 1.00, 1, 'film-B.jpg'),
	(556, 'Cinta de Embalaje frágil', 1, 'cinta ', 1.00, 1, 'film-B.jpg'),
	(557, 'Rollo de Etiquetas Térmicas 55mm x 44mm', 4, 'etiquetas autoadhesiva ', 1.00, 1, 'etiquetas-A.jpg'),
	(558, 'Rollo de Etiquetas Térmicas 80mm x 50mm', 4, 'etiquetas autoadhesiva ', 1.00, 1, 'etiquetas-B.jpg'),
	(559, 'Rollo de Etiquetas Térmicas 80mm x 80mm', 4, 'etiquetas autoadhesiva ', 1.00, 0, 'etiquetas-A.jpg'),
	(560, 'Rollo de Etiquetas Térmicas 50mm x 25mm', 4, 'etiquetas autoadhesiva ', 1.00, 0, 'etiquetas-B.jpg'),
	(561, 'Rollo de Etiquetas Térmicas 57mm x 20mm', 4, 'etiquetas autoadhesiva ', 1.00, 0, 'etiquetas-A.jpg'),
	(562, 'Rollo de Etiquetas Térmicas 60mm x 46mm', 4, 'etiquetas autoadhesiva ', 1.00, 0, 'etiquetas-B.jpg'),
	(563, 'Rollo de Etiquetas Térmicas 100mm x 152mm', 4, 'etiquetas autoadhesiva ', 1.00, 1, 'etiquetas-A.jpg'),
	(564, 'Rollo de Etiquetas Térmicas 100mm x 190mm', 4, 'etiquetas autoadhesiva ', 1.00, 1, 'etiquetas-B.jpg'),
	(565, 'Rollo de Etiquetas Blancas 22mm x 12mm', 4, 'etiquetas autoadhesiva ', 1.00, 0, 'etiquetas-A.jpg'),
	(566, 'Rollo De Papel Obra Self 76mm X 30mm', 4, 'rollos fiscales ', 1.00, 1, 'ordenadores-A.jpg'),
	(567, 'Rollo De Papel Obra Self Self 76mm x 20mm', 4, 'rollos fiscales ', 1.00, 1, 'ordenadores-B.jpg'),
	(568, 'Rollo De Papel Obra 37mm X 40mm', 4, 'rollos fiscales ', 1.00, 0, 'ordenadores-A.jpg'),
	(569, 'Rollo De Papel Obra 76 mm x 40mm', 4, 'rollos fiscales ', 1.00, 1, 'ordenadores-B.jpg'),
	(570, 'Rollo De Papel Obra 37mm X 50mm', 4, 'rollos fiscales ', 1.00, 1, 'ordenadores-A.jpg'),
	(571, 'Rollo De Papel Obra 70mm x 70mm', 4, 'rollos fiscales ', 1.00, 0, 'ordenadores-B.jpg'),
	(572, 'Rollo De Papel Obra Self Self 76mm x 20mm', 4, 'rollos fiscales ', 1.00, 0, 'ordenadores-A.jpg'),
	(573, 'Rollo De Papel Obra 44mm X 50mm', 4, 'rollos fiscales ', 1.00, 0, 'ordenadores-B.jpg'),
	(574, 'Rollo De Papel Obra 44mm X 40mm', 4, 'rollos fiscales ', 1.00, 0, 'ordenadores-A.jpg'),
	(575, 'Expendedora de Números para Turnos- Roja', 2, 'expendedora sin barral', 1.00, 1, 'ordenadores-B.jpg'),
	(576, 'Expendedora de Números para Turnos- Negra', 2, 'expendedora sin barral', 1.00, 1, 'ordenadores-A.jpg'),
	(577, 'Expendedora de Números para Turnos- Blanca', 2, 'expendedora sin barral', 1.00, 1, 'ordenadores-B.jpg'),
	(578, 'Expendedora de Números para Turnos- Gris', 2, 'expendedora sin barral', 1.00, 0, 'ordenadores-A.jpg'),
	(579, 'Expendedora de Números para Turnos- Violeta', 2, 'expendedora sin barral', 1.00, 0, 'ordenadores-B.jpg'),
	(580, 'Expendedora de Números para Turnos- Marrón', 2, 'expendedora sin barral', 1.00, 0, 'ordenadores-A.jpg'),
	(581, 'Expendedora de Números para Turnos- Naranja', 2, 'expendedora sin barral', 1.00, 0, 'ordenadores-B.jpg'),
	(582, 'Expendedora de Números para Turnos- Amarilla', 2, 'expendedora sin barral', 1.00, 1, 'ordenadores-A.jpg'),
	(583, 'Expendedora De Números Para Turnos Con Pie Y Cartel', 2, 'expendedora con barral', 1.00, 1, 'ordenadores-B.jpg'),
	(584, 'Expendedora De Números Para Turnos Con Pie Y Cartel + Pincha Papel', 2, 'expendedora con barral', 1.00, 1, 'ordenadores-A.jpg'),
	(585, 'Cartel \'\'Retire su número\'\' Rojo', 2, 'accesorios ', 1.00, 1, 'ordenadores-B.jpg'),
	(586, 'Cartel \'\'Retire su número\'\' Bordó', 2, 'accesorios ', 1.00, 1, 'ordenadores-A.jpg'),
	(587, 'Cartel \'\'Retire su número\'\' Negro', 2, 'accesorios ', 1.00, 0, 'ordenadores-B.jpg'),
	(588, 'Cartel \'\'Retire su número\'\' Azul', 2, 'accesorios ', 1.00, 0, 'ordenadores-A.jpg'),
	(589, 'Pincha Papel Para Numeros de Turnos', 2, 'accesorios ', 1.00, 0, 'ordenadores-B.jpg'),
	(590, 'Barral Para Expendedora De Números Con Pie', 2, 'accesorios ', 1.00, 0, 'ordenadores-A.jpg'),
	(591, 'Etiquetadora Jolly-Jh8- 8 Dígitos', 4, 'etiquetadoras etiquetadoras', 1.00, 0, 'ordenadores-B.jpg'),
	(592, 'Etiquetadora OpenComercial', 4, 'etiquetadoras etiquetadoras', 1.00, 1, 'etiquetas-B.jpg'),
	(593, 'Entintador para Etiquetadora Jolly', 4, 'etiquetadoras etintadores', 1.00, 0, 'etiquetas-A.jpg'),
	(594, 'Entintador OpenComercial', 4, 'etiquetadoras etintadores', 1.00, 0, 'etiquetas-B.jpg'),
	(595, 'Rollo de Números para Turnos x 1000 Rojo', 2, 'rollos de numeros x 1000', 1.00, 0, 'ordenadores-A.jpg'),
	(596, 'Rollo de Números para Turnos x 1000 Verde', 2, 'rollos de numeros x 1000', 1.00, 0, 'ordenadores-B.jpg'),
	(597, 'Rollo de Números para Turnos x 1000 Azul', 2, 'rollos de numeros x 1000', 1.00, 0, 'ordenadores-A.jpg'),
	(598, 'Rollo de Números para Turnos x 1000 Amarillo', 2, 'rollos de numeros x 1000', 1.00, 0, 'ordenadores-B.jpg'),
	(599, 'Rollo de Números para Turnos x 2000 Rojo', 2, 'rollos de numeros x 2000', 1.00, 0, 'ordenadores-A.jpg'),
	(600, 'Rollo de Números para Turnos x 2000 Verde', 2, 'rollos de numeros x 2000', 1.00, 1, 'ordenadores-B.jpg'),
	(601, 'Rollo de Números para Turnos x 2000 Amarillo', 2, 'rollos de numeros x 2000', 1.00, 1, 'ordenadores-A.jpg'),
	(602, 'Rollo de Números para Turnos x 2000 Azul', 2, 'rollos de numeros x 2000', 1.00, 1, 'ordenadores-B.jpg');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
