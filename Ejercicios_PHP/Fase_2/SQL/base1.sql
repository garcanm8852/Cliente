-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-02-2021 a las 17:59:32
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.2.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `base1`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `consultarAlumno` (IN `smail` VARCHAR(70))  NO SQL
SELECT * FROM alumnos WHERE mail = smail$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `consultarAlumnos` ()  NO SQL
SELECT * FROM ALUMNOS$$

CREATE DEFINER=`insert`@`localhost` PROCEDURE `insertarAlumnos` (IN `codigo` INT, IN `nombre` VARCHAR(50), IN `mail` VARCHAR(70), IN `codigocurso` INT)  NO SQL
INSERT into alumnos (codigo, nombre, mail, codigocurso) VALUES (codigo, nombre, mail, codigocurso)$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `codigo` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `mail` varchar(70) COLLATE utf8mb4_spanish_ci NOT NULL,
  `codigocurso` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`codigo`, `nombre`, `mail`, `codigocurso`) VALUES
(1, 'pepe', 'pepemail', 1),
(2, 'pepeclon', 'pepeclonmail', 2),
(3, 'Manuel', 'a20garcanm8852@ies-mardecadiz.com', 3),
(4, 'Manuel', 'a20garcanm8852@ies-mardecadiz.com', 3),
(5, 'Manuel', 'a20garcanm8852@ies-mardecadiz.com', 3),
(6, 'Manuel', 'a20garcanm8852@ies-mardecadiz.com', 3),
(7, 'Manuel', 'a20garcanm8852@ies-mardecadiz.com', 3),
(8, 'Manuel', 'a20garcanm8852@ies-mardecadiz.com', 3),
(9, 'Manuel', 'a20garcanm8852@ies-mardecadiz.com', 3),
(10, 'Manuel', 'a20garcanm8852@ies-mardecadiz.com', 3),
(11, 'Manuel', 'a20garcanm8852@ies-mardecadiz.com', 3),
(12, 'Manuel', 'a20garcanm8852@ies-mardecadiz.com', 3),
(13, 'Manuel', 'a20garcanm8852@ies-mardecadiz.com', 3),
(14, 'Manuel', 'a20garcanm8852@ies-mardecadiz.com', 3),
(15, 'Manuel', 'a20garcanm8852@ies-mardecadiz.com', 3),
(16, 'Manuel', 'a20garcanm8852@ies-mardecadiz.com', 3),
(17, 'Manuel', 'a20garcanm8852@ies-mardecadiz.com', 3),
(18, 'Manuel', 'a20garcanm8852@ies-mardecadiz.com', 3);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`codigo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
