-- phpMyAdmin SQL Dump
-- version 5.0.4deb2+deb11u1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 29-08-2022 a las 22:07:57
-- Versión del servidor: 10.5.15-MariaDB-0+deb11u1
-- Versión de PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `alcuidado`
--
CREATE DATABASE IF NOT EXISTS `alcuidado` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `alcuidado`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE `novedades` (
  `id` int(11) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(16, 'Madrid volverá a teñirse de azul con la Carrera y Caminata Popular por la Diabetes', 'Tras dos años de ausencia por la pandemia, ya están abiertas las inscripciones para la carrera solidaria por la diabetes más multitudinaria de España.', 'Tras dos años de espera por la situación sanitaria, la Fundación para la Diabetes Novo Nordisk y la Asociación Diabetes Madrid vuelven a organizar la Carrera y Caminata Popular por la Diabetes y ExpoDiabetes en su 9ª edición. La actividad se llevará a cabo en Madrid el próximo 13 de noviembre y las inscripciones ya están abiertas. Así, las calles se volverán a teñir de azul bajo el lema “Únete a la marea azul. Muévete por la Diabetes”.\r\n\r\nEn el marco del Día Mundial de la Diabetes, que se celebra el 14 de noviembre, esta iniciativa busca concienciar sobre la importancia del ejercicio físico en la prevención de la diabetes tipo 1 y 2, además de su control. También, otro de los objetivos es informar y educar sobre la enfermedad a quienes conviven con ella y a la población general sobre la importancia de seguir unos hábitos de vida saludables.\r\n\r\nLa carrera tendrá este año como padrino a Dani Albero, la primera persona con diabetes en competir en el Dakar (2019) y que en 2021 logró ser el primero en acabar este duro rally. En las ediciones anteriores la carrera ha contado con padrinos como Javi Nieves, Kiliam Meyer, Belinda Washington o Vicente del Bosque, entre otros.\r\n\r\nCon este apoyo, la 9ª Carrera y Caminata Popular por la Diabetes se celebrará en el Paseo de Camoens del Parque del Oeste de Madrid y, como en otras ediciones, contempla diferentes pruebas deportivas: una carrera de 10 km, otra de 5 km -con categorías masculina y femenina en ambas y tres premios por categoría-, una caminata de 2,2 km y una serie de carreras infantiles para niños de hasta 12 años.\r\n\r\nPor otro lado, existe la posibilidad de realizar una inscripción solidaria y colaborar con estos proyectos gracias al denominado Dorsal 0, que permite realizar una donación en el contexto de este evento.', 'vayy3913n707xuscbkaj'),
(17, 'Aumenta el riesgo de enfermedades cardiovasculares y diabetes tras la infección de Covid-19', 'El estudio publicado en la revista \'PLOS Medicine\' apunta que los pacientes que contraen Covid-19 tienen un mayor riesgo de desarrollar enfermedades cardiovasculares y diabetes.', 'Los pacientes que contraen COVID-19 corren un mayor riesgo de desarrollar enfermedades cardiovasculares y diabetes, sobre todo en los tres meses siguientes a la infección, según un nuevo estudio de los investigadores Emma Rezel-Potts, Martin Gulliford y sus colegas del King\'s College de Londres (Reino Unido), publicado en la revista de acceso abierto \'PLOS Medicine\'.\r\n\r\nLos científicos reconocen cada vez más que la COVID-19 es una afección multisistémica que puede causar enfermedades en todo el organismo, probablemente al desencadenar vías que causan inflamación.\r\n\r\nEn el nuevo estudio, los investigadores estudiaron si una muestra de pacientes con COVID-19 desarrollaba nuevos casos de diabetes y enfermedades cardiovasculares en mayor proporción que una muestra de personas que nunca habían padecido la enfermedad en el año siguiente a la infección.', 'zjuoffuecunrm6zlai3t'),
(18, 'Las enfermeras ya pueden prescribir fármacos para la hipertensión y la diabetes', 'Mediante la resolución publicada el pasado 5 de julio en el Boletín Oficial del Estado (BOE) se validan las Guías para la indicación,', 'Tras el acuerdo de la Comisión Permanente de Farmacia del Consejo Interterritorial del Sistema Nacional de Salud, del 13 de julio de 2021, el Boletín Oficial de Estado (BOE) ha publicado esta semana -casi un año después- las dos nuevas guías que regulan la indicación de medicamentos por parte de las enfermeras en el ámbito de patologías crónicas con un alto impacto en la sociedad por su elevada prevalencia, como son la\r\nhipertensión arterial y la diabetes, donde las enfermeras desempeñan una labor crucial.\r\n\r\nMediante la resolución publicada el pasado 5 de julio en el Boletín Oficial del Estado (BOE) se validan las Guías para la indicación, uso y autorización de dispensación de medicamentos sujetos a prescripción médica por parte de las enfermeras de: Hipertensión, y la de: Diabetes mellitus tipo 1 y tipo 2, con una relación de 15 grupos de fármacos por clasificación ATC, como diuréticos y agentes beta-bloqueantes. La revisión de los contenidos de ambas guías se realizará al menos cada cinco años, con objeto de incorporar la nueva evidencia disponible. \r\n\r\nEstos protocolos de actuación nacen -como ya ocurrió con el anterior de heridas, que se aprobó hace unos meses- fruto del consenso con las organizaciones colegiales de enfermeros y de médicos, comunidades autónomas, mutualidades y los ministerios de Sanidad y Defensa, y forman parte de una serie de guías de práctica clínica y asistencial para la indicación de medicamentos por parte de las enfermeras en distintos procesos asistenciales. De hecho, se espera que esta normativa tenga gran impacto en los pacientes crónicos.\r\nDos nuevos documentos ministeriales se suman al desarrollo, tardío y no exento de problemas, de la prescripción enfermera en España “Celebro que se empiecen a dar pasos para culminar un hito como es la prescripción enfermera, una medida con una evidente repercusión positiva sobre la salud de la población, pero sobre la que los distintos gobiernos no han actuado con la celeridad que exigía la norma e incluso han puesto manifiestos obstáculos a su desarrollo, pese a que viene a dar respuesta a una clara necesidad asistencial de los pacientes”, ha explicado Florentino Pérez Raya, presidente del Consejo General de Enfermería (CGE).', 'dyrmrjaewhdmeis50m2f');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'gabriel', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'facundo', '81dc9bdb52d04dc20036dbd8313ed055'),
(4, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `novedades`
--
ALTER TABLE `novedades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `novedades`
--
ALTER TABLE `novedades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
