-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.24-MariaDB - mariadb.org binary distribution
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
CREATE DATABASE IF NOT EXISTS `clipshop` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `clipshop`;

-- Volcando estructura para tabla clipshop.banners
CREATE TABLE IF NOT EXISTS `banners` (
  `idBanners` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `banner` varchar(155) NOT NULL DEFAULT '0',
  PRIMARY KEY (`idBanners`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla clipshop.banners: ~2 rows (aproximadamente)
INSERT INTO `banners` (`idBanners`, `banner`) VALUES
	(9, 'Banner1669645146943.png'),
	(10, 'Banner1670514381769.png');

-- Volcando estructura para tabla clipshop.categorias
CREATE TABLE IF NOT EXISTS `categorias` (
  `idCategorias` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombreCategoria` varchar(155) NOT NULL,
  PRIMARY KEY (`idCategorias`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla clipshop.categorias: ~4 rows (aproximadamente)
INSERT INTO `categorias` (`idCategorias`, `nombreCategoria`) VALUES
	(1, 'embalaje'),
	(2, 'ordenadores'),
	(3, 'rollos de papel'),
	(4, 'etiquetas autoadhesivas');

-- Volcando estructura para tabla clipshop.codigopostal
CREATE TABLE IF NOT EXISTS `codigopostal` (
  `idCodPost` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `barrio` varchar(255) NOT NULL,
  `comuna` int(11) NOT NULL,
  `cp` int(10) unsigned NOT NULL,
  PRIMARY KEY (`idCodPost`)
) ENGINE=InnoDB AUTO_INCREMENT=627 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla clipshop.codigopostal: ~626 rows (aproximadamente)
INSERT INTO `codigopostal` (`idCodPost`, `barrio`, `comuna`, `cp`) VALUES
	(1, 'Recoleta', 2, 1000),
	(2, 'Recoleta', 2, 1001),
	(3, 'Recoleta', 2, 1011),
	(4, 'Recoleta', 2, 1012),
	(5, 'Recoleta', 2, 1013),
	(6, 'Recoleta', 2, 1013),
	(7, 'Recoleta', 2, 1014),
	(8, 'Recoleta', 2, 1015),
	(9, 'Recoleta', 2, 1016),
	(10, 'Recoleta', 2, 1017),
	(11, 'Recoleta', 2, 1018),
	(12, 'Recoleta', 2, 1019),
	(13, 'Recoleta', 2, 1020),
	(14, 'Recoleta', 2, 1021),
	(15, 'Recoleta', 2, 1022),
	(16, 'Recoleta', 2, 1023),
	(17, 'Recoleta', 2, 1024),
	(18, 'Recoleta', 2, 1025),
	(19, 'Recoleta', 2, 1026),
	(20, 'Recoleta', 2, 1055),
	(21, 'Recoleta', 2, 1057),
	(22, 'Recoleta', 2, 1059),
	(23, 'Recoleta', 2, 1060),
	(24, 'Recoleta', 2, 1061),
	(25, 'Recoleta', 2, 1062),
	(26, 'Recoleta', 2, 1091),
	(27, 'Recoleta', 2, 1108),
	(28, 'Recoleta', 2, 1111),
	(29, 'Recoleta', 2, 1112),
	(30, 'Recoleta', 2, 1114),
	(31, 'Recoleta', 2, 1115),
	(32, 'Recoleta', 2, 1116),
	(33, 'Recoleta', 2, 1117),
	(34, 'Recoleta', 2, 1118),
	(35, 'Recoleta', 2, 1119),
	(36, 'Recoleta', 2, 1120),
	(37, 'Recoleta', 2, 1121),
	(38, 'Recoleta', 2, 1122),
	(39, 'Recoleta', 2, 1123),
	(40, 'Recoleta', 2, 1124),
	(41, 'Recoleta', 2, 1125),
	(42, 'Recoleta', 2, 1126),
	(43, 'Recoleta', 2, 1127),
	(44, 'Recoleta', 2, 1128),
	(45, 'Recoleta', 2, 1129),
	(46, 'Recoleta', 2, 1170),
	(47, 'Recoleta', 2, 1171),
	(48, 'Recoleta', 2, 1172),
	(49, 'Recoleta', 2, 1173),
	(50, 'Recoleta', 2, 1174),
	(51, 'Recoleta', 2, 1175),
	(52, 'Recoleta', 2, 1180),
	(53, 'Recoleta', 2, 1186),
	(54, 'Recoleta', 2, 1187),
	(55, 'Recoleta', 2, 1188),
	(56, 'Recoleta', 2, 1215),
	(57, 'Recoleta', 2, 1414),
	(58, 'Recoleta', 2, 1425),
	(59, 'palermo', 14, 1004),
	(60, 'palermo', 14, 1007),
	(61, 'palermo', 14, 1019),
	(62, 'palermo', 14, 1055),
	(63, 'palermo', 14, 1113),
	(64, 'palermo', 14, 1172),
	(65, 'palermo', 14, 1175),
	(66, 'palermo', 14, 1176),
	(67, 'palermo', 14, 1177),
	(68, 'palermo', 14, 1179),
	(69, 'palermo', 14, 1180),
	(70, 'palermo', 14, 1181),
	(71, 'palermo', 14, 1182),
	(72, 'palermo', 14, 1183),
	(73, 'palermo', 14, 1186),
	(74, 'palermo', 14, 1188),
	(75, 'palermo', 14, 1404),
	(76, 'palermo', 14, 1414),
	(77, 'palermo', 14, 1416),
	(78, 'palermo', 14, 1425),
	(79, 'palermo', 14, 1426),
	(80, 'palermo', 14, 1428),
	(81, 'palermo', 14, 1429),
	(82, 'palermo', 14, 1439),
	(83, 'Agronomia', 15, 1417),
	(84, 'Agronomia', 15, 1419),
	(85, 'Agronomia', 15, 1427),
	(86, 'Agronomia', 15, 1431),
	(87, 'Almagro', 5, 1172),
	(88, 'Almagro', 5, 1247),
	(89, 'Balvanera', 3, 1020),
	(90, 'Balvanera', 3, 1022),
	(91, 'Balvanera', 3, 1025),
	(92, 'Balvanera', 3, 1026),
	(93, 'Balvanera', 3, 1027),
	(94, 'Balvanera', 3, 1028),
	(95, 'Balvanera', 3, 1029),
	(96, 'Balvanera', 3, 1030),
	(97, 'Balvanera', 3, 1031),
	(98, 'Balvanera', 3, 1032),
	(99, 'Balvanera', 3, 1033),
	(100, 'Balvanera', 3, 1034),
	(101, 'Balvanera', 3, 1036),
	(102, 'Balvanera', 3, 1039),
	(103, 'Balvanera', 3, 1040),
	(104, 'Balvanera', 3, 1044),
	(105, 'Balvanera', 3, 1045),
	(106, 'Balvanera', 3, 1046),
	(107, 'Balvanera', 3, 1051),
	(108, 'Balvanera', 3, 1052),
	(109, 'Balvanera', 3, 1056),
	(110, 'Balvanera', 3, 1079),
	(111, 'Balvanera', 3, 1080),
	(112, 'Balvanera', 3, 1081),
	(113, 'Balvanera', 3, 1083),
	(114, 'Balvanera', 3, 1089),
	(115, 'Balvanera', 3, 1090),
	(116, 'Balvanera', 3, 1091),
	(117, 'Balvanera', 3, 1094),
	(118, 'Balvanera', 3, 1096),
	(119, 'Balvanera', 3, 1098),
	(120, 'Balvanera', 3, 1170),
	(121, 'Balvanera', 3, 1171),
	(122, 'Balvanera', 3, 1172),
	(123, 'Balvanera', 3, 1173),
	(124, 'Balvanera', 3, 1174),
	(125, 'Balvanera', 3, 1179),
	(126, 'Balvanera', 3, 1180),
	(127, 'Balvanera', 3, 1181),
	(128, 'Balvanera', 3, 1183),
	(129, 'Balvanera', 3, 1186),
	(130, 'Balvanera', 3, 1187),
	(131, 'Balvanera', 3, 1189),
	(132, 'Balvanera', 3, 1190),
	(133, 'Balvanera', 3, 1191),
	(134, 'Balvanera', 3, 1193),
	(135, 'Balvanera', 3, 1194),
	(136, 'Balvanera', 3, 1196),
	(137, 'Balvanera', 3, 1197),
	(138, 'Balvanera', 3, 1198),
	(139, 'Balvanera', 3, 1201),
	(140, 'Balvanera', 3, 1203),
	(141, 'Balvanera', 3, 1204),
	(142, 'Balvanera', 3, 1207),
	(143, 'Balvanera', 3, 1209),
	(144, 'Balvanera', 3, 1210),
	(145, 'Balvanera', 3, 1211),
	(146, 'Balvanera', 3, 1212),
	(147, 'Balvanera', 3, 1213),
	(148, 'Balvanera', 3, 1214),
	(149, 'Balvanera', 3, 1215),
	(150, 'Balvanera', 3, 1219),
	(151, 'Balvanera', 3, 1222),
	(152, 'Balvanera', 3, 1223),
	(153, 'Balvanera', 3, 1225),
	(154, 'Balvanera', 3, 1227),
	(155, 'Balvanera', 3, 1229),
	(156, 'Barracas', 4, 1066),
	(157, 'Barracas', 4, 1104),
	(158, 'Barracas', 4, 1110),
	(159, 'Barracas', 4, 1138),
	(160, 'Barracas', 4, 1139),
	(161, 'Barracas', 4, 1140),
	(162, 'Barracas', 4, 1141),
	(163, 'Barracas', 4, 1143),
	(164, 'Barracas', 4, 1152),
	(165, 'Barracas', 4, 1153),
	(166, 'Barracas', 4, 1164),
	(167, 'Barracas', 4, 1255),
	(168, 'Barracas', 4, 1260),
	(169, 'Barracas', 4, 1265),
	(170, 'Barracas', 4, 1267),
	(171, 'Barracas', 4, 1268),
	(172, 'Barracas', 4, 1269),
	(173, 'Barracas', 4, 1270),
	(174, 'Barracas', 4, 1271),
	(175, 'Barracas', 4, 1272),
	(176, 'Barracas', 4, 1273),
	(177, 'Barracas', 4, 1274),
	(178, 'Barracas', 4, 1275),
	(179, 'Barracas', 4, 1276),
	(180, 'Barracas', 4, 1277),
	(181, 'Barracas', 4, 1278),
	(182, 'Barracas', 4, 1279),
	(183, 'Barracas', 4, 1280),
	(184, 'Barracas', 4, 1281),
	(185, 'Barracas', 4, 1282),
	(186, 'Barracas', 4, 1283),
	(187, 'Barracas', 4, 1284),
	(188, 'Barracas', 4, 1285),
	(189, 'Barracas', 4, 1286),
	(190, 'Barracas', 4, 1287),
	(191, 'Barracas', 4, 1288),
	(192, 'Barracas', 4, 1289),
	(193, 'Barracas', 4, 1290),
	(194, 'Barracas', 4, 1291),
	(195, 'Barracas', 4, 1292),
	(196, 'Barracas', 4, 1293),
	(197, 'Barracas', 4, 1294),
	(198, 'Barracas', 4, 1295),
	(199, 'Barracas', 4, 1296),
	(200, 'Barracas', 4, 1425),
	(201, 'Barracas', 4, 1437),
	(202, 'Belgrano', 13, 1424),
	(203, 'Belgrano', 13, 1425),
	(204, 'Belgrano', 13, 1426),
	(205, 'Belgrano', 13, 1428),
	(206, 'Belgrano', 13, 1429),
	(207, 'Belgrano', 13, 1430),
	(208, 'Belgrano', 13, 1468),
	(209, 'La Boca', 4, 1063),
	(210, 'La Boca', 4, 1065),
	(211, 'La Boca', 4, 1155),
	(212, 'La Boca', 4, 1157),
	(213, 'La Boca', 4, 1158),
	(214, 'La Boca', 4, 1160),
	(215, 'La Boca', 4, 1161),
	(216, 'La Boca', 4, 1162),
	(217, 'La Boca', 4, 1163),
	(218, 'La Boca', 4, 1164),
	(219, 'La Boca', 4, 1165),
	(220, 'La Boca', 4, 1166),
	(221, 'La Boca', 4, 1167),
	(222, 'La Boca', 4, 1169),
	(223, 'La Boca', 4, 1185),
	(224, 'La Boca', 4, 1265),
	(225, 'La Boca', 4, 1266),
	(226, 'Boedo', 5, 1218),
	(227, 'Boedo', 5, 1220),
	(228, 'Boedo', 5, 1221),
	(229, 'Boedo', 5, 1226),
	(230, 'Boedo', 5, 1228),
	(231, 'Boedo', 5, 1230),
	(232, 'Boedo', 5, 1231),
	(233, 'Boedo', 5, 1232),
	(234, 'Boedo', 5, 1233),
	(235, 'Boedo', 5, 1235),
	(236, 'Boedo', 5, 1236),
	(237, 'Boedo', 5, 1237),
	(238, 'Boedo', 5, 1238),
	(239, 'Boedo', 5, 1239),
	(240, 'Boedo', 5, 1240),
	(241, 'Boedo', 5, 1241),
	(242, 'Boedo', 5, 1250),
	(243, 'Cacharita', 15, 1414),
	(244, 'Cacharita', 15, 1416),
	(245, 'Cacharita', 15, 1418),
	(246, 'Cacharita', 15, 1427),
	(247, 'Coghlan', 12, 1428),
	(248, 'Coghlan', 12, 1429),
	(249, 'Coghlan', 12, 1430),
	(250, 'Coghlan', 12, 1431),
	(251, 'Colegiales', 13, 1414),
	(252, 'Colegiales', 13, 1426),
	(253, 'Colegiales', 13, 1427),
	(254, 'Colegiales', 13, 1428),
	(255, 'Constitución', 1, 1070),
	(256, 'Constitución', 1, 1071),
	(257, 'Constitución', 1, 1072),
	(258, 'Constitución', 1, 1073),
	(259, 'Constitución', 1, 1074),
	(260, 'Constitución', 1, 1075),
	(261, 'Constitución', 1, 1076),
	(262, 'Constitución', 1, 1077),
	(263, 'Constitución', 1, 1080),
	(264, 'Constitución', 1, 1099),
	(265, 'Constitución', 1, 1100),
	(266, 'Constitución', 1, 1101),
	(267, 'Constitución', 1, 1102),
	(268, 'Constitución', 1, 1103),
	(269, 'Constitución', 1, 1107),
	(270, 'Constitución', 1, 1110),
	(271, 'Constitución', 1, 1130),
	(272, 'Constitución', 1, 1133),
	(273, 'Constitución', 1, 1134),
	(274, 'Constitución', 1, 1135),
	(275, 'Constitución', 1, 1136),
	(276, 'Constitución', 1, 1137),
	(277, 'Constitución', 1, 1138),
	(278, 'Constitución', 1, 1139),
	(279, 'Constitución', 1, 1140),
	(280, 'Constitución', 1, 1147),
	(281, 'Constitución', 1, 1148),
	(282, 'Constitución', 1, 1150),
	(283, 'Constitución', 1, 1151),
	(284, 'Constitución', 1, 1152),
	(285, 'Constitución', 1, 1153),
	(286, 'Constitución', 1, 1154),
	(287, 'Constitución', 1, 1159),
	(288, 'Constitución', 1, 1180),
	(289, 'Constitución', 1, 1206),
	(290, 'Constitución', 1, 1245),
	(291, 'Constitución', 1, 1261),
	(292, 'Constitución', 1, 1407),
	(293, 'Constitución', 1, 1426),
	(294, 'Constitución', 1, 1427),
	(295, 'Constitución', 1, 1480),
	(296, 'Floresta', 10, 1406),
	(297, 'Floresta', 10, 1407),
	(298, 'Floresta', 10, 1416),
	(299, 'Floresta', 10, 1419),
	(300, 'Floresta', 10, 1440),
	(301, 'Floresta', 10, 1471),
	(302, 'Montserrat', 1, 1000),
	(303, 'Montserrat', 1, 1002),
	(304, 'Montserrat', 1, 1010),
	(305, 'Montserrat', 1, 1014),
	(306, 'Montserrat', 1, 1020),
	(307, 'Montserrat', 1, 1033),
	(308, 'Montserrat', 1, 1041),
	(309, 'Montserrat', 1, 1063),
	(310, 'Montserrat', 1, 1064),
	(311, 'Montserrat', 1, 1065),
	(312, 'Montserrat', 1, 1066),
	(313, 'Montserrat', 1, 1067),
	(314, 'Montserrat', 1, 1068),
	(315, 'Montserrat', 1, 1069),
	(316, 'Montserrat', 1, 1070),
	(317, 'Montserrat', 1, 1071),
	(318, 'Montserrat', 1, 1072),
	(319, 'Montserrat', 1, 1073),
	(320, 'Montserrat', 1, 1074),
	(321, 'Montserrat', 1, 1075),
	(322, 'Montserrat', 1, 1076),
	(323, 'Montserrat', 1, 1077),
	(324, 'Montserrat', 1, 1079),
	(325, 'Montserrat', 1, 1080),
	(326, 'Montserrat', 1, 1082),
	(327, 'Montserrat', 1, 1084),
	(328, 'Montserrat', 1, 1085),
	(329, 'Montserrat', 1, 1086),
	(330, 'Montserrat', 1, 1087),
	(331, 'Montserrat', 1, 1088),
	(332, 'Montserrat', 1, 1091),
	(333, 'Montserrat', 1, 1092),
	(334, 'Montserrat', 1, 1093),
	(335, 'Montserrat', 1, 1095),
	(336, 'Montserrat', 1, 1096),
	(337, 'Montserrat', 1, 1097),
	(338, 'Montserrat', 1, 1098),
	(339, 'Montserrat', 1, 1100),
	(340, 'Montserrat', 1, 1101),
	(341, 'Montserrat', 1, 1107),
	(342, 'Montserrat', 1, 1110),
	(343, 'Montserrat', 1, 1134),
	(344, 'Montserrat', 1, 1135),
	(345, 'Montserrat', 1, 1136),
	(346, 'Montserrat', 1, 1158),
	(347, 'Montserrat', 1, 1168),
	(348, 'Montserrat', 1, 1405),
	(349, 'Montserrat', 1, 1406),
	(350, 'Montserrat', 1, 1407),
	(351, 'Montserrat', 1, 1416),
	(352, 'Montserrat', 1, 1424),
	(353, 'Monte Castro', 10, 1407),
	(354, 'Monte Castro', 10, 1408),
	(355, 'Monte Castro', 10, 1416),
	(356, 'Monte Castro', 10, 1417),
	(357, 'Monte Castro', 10, 1419),
	(358, 'Nueva Pompeya', 4, 1263),
	(359, 'Nueva Pompeya', 4, 1429),
	(360, 'Nueva Pompeya', 4, 1436),
	(361, 'Nueva Pompeya', 4, 1437),
	(362, 'Nuñez', 13, 1428),
	(363, 'Nuñez', 13, 1429),
	(364, 'Villa Soldati', 8, 1406),
	(365, 'Villa Soldati', 8, 1407),
	(366, 'Villa Soldati', 8, 1437),
	(367, 'Villa Riachuelo', 8, 1439),
	(368, 'Villa Lugano', 8, 1407),
	(369, 'Villa Lugano', 8, 1439),
	(370, 'Parque Chacabuco', 7, 1238),
	(371, 'Parque Chacabuco', 7, 1250),
	(372, 'Parque Chacabuco', 7, 1406),
	(373, 'Parque Chacabuco', 7, 1424),
	(374, 'Parque Chacabuco', 7, 1437),
	(375, 'Parque Avellaneda', 9, 1406),
	(376, 'Parque Avellaneda', 9, 1407),
	(377, 'Parque Avellaneda', 9, 1439),
	(378, 'Parque Avellaneda', 9, 1440),
	(379, 'Mataderos', 9, 1407),
	(380, 'Mataderos', 9, 1439),
	(381, 'Mataderos', 9, 1440),
	(382, 'Liniers', 9, 1407),
	(383, 'Liniers', 9, 1408),
	(384, 'Liniers', 9, 1440),
	(385, 'Flores', 7, 1406),
	(386, 'Flores', 7, 1407),
	(387, 'Flores', 7, 1416),
	(388, 'Flores', 7, 1417),
	(389, 'Flores', 7, 1424),
	(390, 'Flores', 7, 1437),
	(391, 'Caballito', 6, 1184),
	(392, 'Caballito', 6, 1235),
	(393, 'Caballito', 6, 1405),
	(394, 'Caballito', 6, 1406),
	(395, 'Caballito', 6, 1414),
	(396, 'Caballito', 6, 1416),
	(397, 'Caballito', 6, 1424),
	(398, 'Villa Urquiza', 12, 1427),
	(399, 'Villa Urquiza', 12, 1428),
	(400, 'Villa Urquiza', 12, 1430),
	(401, 'Villa Urquiza', 12, 1431),
	(402, 'Villa Santa Rita', 11, 1223),
	(403, 'Villa Santa Rita', 11, 1407),
	(404, 'Villa Santa Rita', 11, 1416),
	(405, 'Villa Santa Rita', 11, 1417),
	(406, 'Villa Santa Rita', 11, 1419),
	(407, 'Villa Real', 10, 1006),
	(408, 'Villa Real', 10, 1408),
	(409, 'Villa Real', 10, 1414),
	(410, 'Villa Real', 10, 1417),
	(411, 'Villa Real', 10, 1419),
	(412, 'Villa Pueyrredon', 12, 1419),
	(413, 'Villa Pueyrredon', 12, 1425),
	(414, 'Villa Pueyrredon', 12, 1431),
	(415, 'Parque Chas', 15, 1427),
	(416, 'Parque Chas', 15, 1431),
	(417, 'Parque Patricios', 4, 1234),
	(418, 'Parque Patricios', 4, 1241),
	(419, 'Parque Patricios', 4, 1243),
	(420, 'Parque Patricios', 4, 1244),
	(421, 'Parque Patricios', 4, 1245),
	(422, 'Parque Patricios', 4, 1247),
	(423, 'Parque Patricios', 4, 1249),
	(424, 'Parque Patricios', 4, 1254),
	(425, 'Parque Patricios', 4, 1256),
	(426, 'Parque Patricios', 4, 1258),
	(427, 'Parque Patricios', 4, 1259),
	(428, 'Parque Patricios', 4, 1260),
	(429, 'Parque Patricios', 4, 1261),
	(430, 'Parque Patricios', 4, 1262),
	(431, 'Parque Patricios', 4, 1263),
	(432, 'Parque Patricios', 4, 1264),
	(433, 'Parque Patricios', 4, 1275),
	(434, 'Parque Patricios', 4, 1282),
	(435, 'Parque Patricios', 4, 1283),
	(436, 'Parque Patricios', 4, 1284),
	(437, 'Parque Patricios', 4, 1437),
	(438, 'Paternal', 15, 1416),
	(439, 'Paternal', 15, 1417),
	(440, 'Paternal', 15, 1427),
	(441, 'Puerto Madero', 1, 1000),
	(442, 'Puerto Madero', 1, 1001),
	(443, 'Puerto Madero', 1, 1005),
	(444, 'Puerto Madero', 1, 1006),
	(445, 'Puerto Madero', 1, 1007),
	(446, 'Puerto Madero', 1, 1010),
	(447, 'Puerto Madero', 1, 1184),
	(448, 'Puerto Madero', 1, 1425),
	(449, 'Retiro', 1, 1001),
	(450, 'Retiro', 1, 1004),
	(451, 'Retiro', 1, 1005),
	(452, 'Retiro', 1, 1006),
	(453, 'Retiro', 1, 1007),
	(454, 'Retiro', 1, 1008),
	(455, 'Retiro', 1, 1009),
	(456, 'Retiro', 1, 1010),
	(457, 'Retiro', 1, 1011),
	(458, 'Retiro', 1, 1012),
	(459, 'Retiro', 1, 1013),
	(460, 'Retiro', 1, 1014),
	(461, 'Retiro', 1, 1016),
	(462, 'Retiro', 1, 1021),
	(463, 'Retiro', 1, 1025),
	(464, 'Retiro', 1, 1054),
	(465, 'Retiro', 1, 1055),
	(466, 'Retiro', 1, 1057),
	(467, 'Retiro', 1, 1058),
	(468, 'Retiro', 1, 1059),
	(469, 'Retiro', 1, 1061),
	(470, 'Retiro', 1, 1062),
	(471, 'Retiro', 1, 1099),
	(472, 'Retiro', 1, 1104),
	(473, 'Retiro', 1, 1111),
	(474, 'Retiro', 1, 1120),
	(475, 'Retiro', 1, 1125),
	(476, 'Retiro', 1, 1156),
	(477, 'Retiro', 1, 1416),
	(478, 'San Cristobal', 3, 1080),
	(479, 'San Cristobal', 3, 1099),
	(480, 'San Cristobal', 3, 1133),
	(481, 'San Cristobal', 3, 1151),
	(482, 'San Cristobal', 3, 1219),
	(483, 'San Cristobal', 3, 1220),
	(484, 'San Cristobal', 3, 1221),
	(485, 'San Cristobal', 3, 1222),
	(486, 'San Cristobal', 3, 1223),
	(487, 'San Cristobal', 3, 1224),
	(488, 'San Cristobal', 3, 1225),
	(489, 'San Cristobal', 3, 1227),
	(490, 'San Cristobal', 3, 1229),
	(491, 'San Cristobal', 3, 1230),
	(492, 'San Cristobal', 3, 1231),
	(493, 'San Cristobal', 3, 1232),
	(494, 'San Cristobal', 3, 1233),
	(495, 'San Cristobal', 3, 1234),
	(496, 'San Cristobal', 3, 1242),
	(497, 'San Cristobal', 3, 1243),
	(498, 'San Cristobal', 3, 1244),
	(499, 'San Cristobal', 3, 1246),
	(500, 'San Cristobal', 3, 1247),
	(501, 'San Cristobal', 3, 1248),
	(502, 'San Cristobal', 3, 1249),
	(503, 'San Cristobal', 3, 1251),
	(504, 'San Cristobal', 3, 1252),
	(505, 'San Cristobal', 3, 1253),
	(506, 'San Cristobal', 3, 1254),
	(507, 'San Cristobal', 3, 1256),
	(508, 'San Cristobal', 3, 1259),
	(509, 'San Nicolas', 1, 1001),
	(510, 'San Nicolas', 1, 1002),
	(511, 'San Nicolas', 1, 1003),
	(512, 'San Nicolas', 1, 1004),
	(513, 'San Nicolas', 1, 1005),
	(514, 'San Nicolas', 1, 1006),
	(515, 'San Nicolas', 1, 1007),
	(516, 'San Nicolas', 1, 1008),
	(517, 'San Nicolas', 1, 1009),
	(518, 'San Nicolas', 1, 1010),
	(519, 'San Nicolas', 1, 1011),
	(520, 'San Nicolas', 1, 1012),
	(521, 'San Nicolas', 1, 1013),
	(522, 'San Nicolas', 1, 1014),
	(523, 'San Nicolas', 1, 1015),
	(524, 'San Nicolas', 1, 1016),
	(525, 'San Nicolas', 1, 1017),
	(526, 'San Nicolas', 1, 1018),
	(527, 'San Nicolas', 1, 1019),
	(528, 'San Nicolas', 1, 1020),
	(529, 'San Nicolas', 1, 1022),
	(530, 'San Nicolas', 1, 1023),
	(531, 'San Nicolas', 1, 1025),
	(532, 'San Nicolas', 1, 1026),
	(533, 'San Nicolas', 1, 1028),
	(534, 'San Nicolas', 1, 1033),
	(535, 'San Nicolas', 1, 1035),
	(536, 'San Nicolas', 1, 1036),
	(537, 'San Nicolas', 1, 1037),
	(538, 'San Nicolas', 1, 1038),
	(539, 'San Nicolas', 1, 1039),
	(540, 'San Nicolas', 1, 1040),
	(541, 'San Nicolas', 1, 1041),
	(542, 'San Nicolas', 1, 1042),
	(543, 'San Nicolas', 1, 1043),
	(544, 'San Nicolas', 1, 1044),
	(545, 'San Nicolas', 1, 1045),
	(546, 'San Nicolas', 1, 1047),
	(547, 'San Nicolas', 1, 1048),
	(548, 'San Nicolas', 1, 1049),
	(549, 'San Nicolas', 1, 1050),
	(550, 'San Nicolas', 1, 1053),
	(551, 'San Nicolas', 1, 1053),
	(552, 'San Nicolas', 1, 1055),
	(553, 'San Nicolas', 1, 1056),
	(554, 'San Nicolas', 1, 1066),
	(555, 'San Nicolas', 1, 1084),
	(556, 'San Nicolas', 1, 1105),
	(557, 'San Nicolas', 1, 1106),
	(558, 'San Nicolas', 1, 1190),
	(559, 'San Nicolas', 1, 1416),
	(560, 'San Nicolas', 1, 1425),
	(561, 'San Telmo', 1, 1063),
	(562, 'San Telmo', 1, 1064),
	(563, 'San Telmo', 1, 1065),
	(564, 'San Telmo', 1, 1066),
	(565, 'San Telmo', 1, 1068),
	(566, 'San Telmo', 1, 1069),
	(567, 'San Telmo', 1, 1091),
	(568, 'San Telmo', 1, 1098),
	(569, 'San Telmo', 1, 1099),
	(570, 'San Telmo', 1, 1100),
	(571, 'San Telmo', 1, 1101),
	(572, 'San Telmo', 1, 1102),
	(573, 'San Telmo', 1, 1103),
	(574, 'San Telmo', 1, 1107),
	(575, 'San Telmo', 1, 1114),
	(576, 'San Telmo', 1, 1140),
	(577, 'San Telmo', 1, 1141),
	(578, 'San Telmo', 1, 1143),
	(579, 'San Telmo', 1, 1147),
	(580, 'San Telmo', 1, 1150),
	(581, 'San Telmo', 1, 1152),
	(582, 'San Telmo', 1, 1153),
	(583, 'San Telmo', 1, 1154),
	(584, 'San Telmo', 1, 1165),
	(585, 'San Telmo', 1, 1217),
	(586, 'San Telmo', 1, 1426),
	(587, 'Velez Sarsfield', 10, 1407),
	(588, 'Versalles', 10, 1086),
	(589, 'Versalles', 10, 1407),
	(590, 'Versalles', 10, 1408),
	(591, 'Saavedra', 12, 1428),
	(592, 'Saavedra', 12, 1429),
	(593, 'Saavedra', 12, 1430),
	(594, 'Saavedra', 12, 1431),
	(595, 'Saavedra', 12, 1431),
	(596, 'Villa Crespo', 15, 1069),
	(597, 'Villa Crespo', 15, 1183),
	(598, 'Villa Crespo', 15, 1189),
	(599, 'Villa Crespo', 15, 1405),
	(600, 'Villa Crespo', 15, 1414),
	(601, 'Villa Crespo', 15, 1416),
	(602, 'Villa Crespo', 15, 1425),
	(603, 'Villa del Parque', 11, 1084),
	(604, 'Villa del Parque', 11, 1407),
	(605, 'Villa del Parque', 11, 1414),
	(606, 'Villa del Parque', 11, 1416),
	(607, 'Villa del Parque', 11, 1417),
	(608, 'Villa del Parque', 11, 1417),
	(609, 'Villa del Parque', 11, 1419),
	(610, 'Villa del Parque', 11, 1425),
	(611, 'Villa del Parque', 11, 1428),
	(612, 'Villa Devoto', 11, 1417),
	(613, 'Villa Devoto', 11, 1419),
	(614, 'Villa Ortuza', 15, 1427),
	(615, 'Villa Ortuza', 15, 1430),
	(616, 'Villa Ortuza', 15, 1431),
	(617, 'Villa General Mitre', 11, 1158),
	(618, 'Villa General Mitre', 11, 1406),
	(619, 'Villa General Mitre', 11, 1416),
	(620, 'Villa General Mitre', 11, 1417),
	(621, 'Villa General Mitre', 11, 1425),
	(622, 'Villa General Mitre', 11, 1429),
	(623, 'Villa Luro', 10, 1407),
	(624, 'Villa Luro', 10, 1408),
	(625, 'Villa Luro', 10, 1416),
	(626, 'Villa Luro', 10, 1440);

-- Volcando estructura para tabla clipshop.productos
CREATE TABLE IF NOT EXISTS `productos` (
  `idProductos` int(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(155) NOT NULL DEFAULT '0',
  `FKidCategoria` int(10) unsigned NOT NULL DEFAULT 0,
  `precio` decimal(20,2) NOT NULL DEFAULT 0.00,
  `descripcion` text DEFAULT NULL,
  `imagen` varchar(155) NOT NULL,
  `oferta` tinyint(2) DEFAULT 0,
  `color` varchar(50) DEFAULT NULL,
  `peso` decimal(20,2) DEFAULT NULL,
  `medida` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idProductos`),
  KEY `FKidCategorias` (`FKidCategoria`),
  CONSTRAINT `FKidCategorias` FOREIGN KEY (`FKidCategoria`) REFERENCES `categorias` (`idCategorias`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla clipshop.productos: ~7 rows (aproximadamente)
INSERT INTO `productos` (`idProductos`, `nombre`, `FKidCategoria`, `precio`, `descripcion`, `imagen`, `oferta`, `color`, `peso`, `medida`) VALUES
	(17, 'Cuadrado', 1, 50.00, 'rollo de papel', 'Producto1669646038787.jpg', 0, 'Rosa', 13.00, ''),
	(19, 'Prueba de slide toggle', 3, 356.00, '<srfhbdzxfbzdthdgc', 'Producto1669646002557.jpg', 1, 'Transparente', 13.00, ''),
	(20, 'Film', 3, 185.00, 'blab lab wed', 'Producto1669646020731.jpg', 1, 'Azul', 12.00, '25'),
	(21, 'Cuadrado Rosa', 1, 12458.00, NULL, 'Producto1667744118309.jpg', 1, '', 25.00, ''),
	(23, 'Cuadrado Rosa', 4, 12458.00, NULL, 'Producto1667745707853.jpg', 1, '', 10.00, ''),
	(24, 'Cuadrado  Azul', 2, 12.00, NULL, 'Producto1667745971340.jpg', 1, 'Azul', 2.50, '20cm x 30cm');

-- Volcando estructura para tabla clipshop.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `idUsuarios` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(155) NOT NULL,
  `email` varchar(155) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `telefono` int(11) DEFAULT NULL,
  `FKCodigoPostal` int(10) unsigned DEFAULT NULL,
  `password` varchar(155) NOT NULL,
  `rol` varchar(50) NOT NULL DEFAULT 'user',
  PRIMARY KEY (`idUsuarios`),
  KEY `FKCodigoPostal` (`FKCodigoPostal`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla clipshop.usuarios: ~6 rows (aproximadamente)
INSERT INTO `usuarios` (`idUsuarios`, `nombre`, `email`, `direccion`, `telefono`, `FKCodigoPostal`, `password`, `rol`) VALUES
	(4, 'Ailen', 'cury.ailena@gmail.com', 'Avenida Estado de Israel 4487', 1168508686, NULL, '$2a$10$b7sFjxISyLrhJGkSMYHzHub/Z36c4JqVkeAD6fp7HSvE5OU30Onw.', 'user'),
	(6, 'Ailen', 'ailu@ailu.com', 'Soy Administrador', 1168508686, NULL, '$2a$10$BRrCiQPiGWAIAxj7b8TYCewkG8eMKJWP3xTF.Ya4PsdgzimYJEgWu', 'admin'),
	(9, 'Ailen Cury', 'ailen@gmail.com', 'Prueba dirección', 555555, NULL, '$2a$10$.p53ZobtisbEW7UY53PeQeDIuGqhdlswCK0Lvi81CIJL90C.PqxK.', 'user'),
	(10, 'Noni', 'noni@gmail.com', 'Casa Noni', 1125689588, NULL, '$2a$10$idhhKteaOhDAUzrZhxsvTux/EbND5Y1ZQ4lRw5JWGaKjTCoYvlkCG', 'admin'),
	(11, 'ailen', 'cury.ailena@gmail.com', 'Avenida Estado de Israel 4487', 1111, NULL, '$2a$10$3c1K5EwctubuoL5o1zGQjOGqox5fcl2xzlrDErLtfHoAMRIZB2lSW', 'user'),
	(12, 'ahfxrykudlt.ify-u', 'cury.ailena@gmail.com', 'Avenida Estado de Israel 4487', 5555, NULL, '$2a$10$B80MsCkiLV.koQ31E78LFuarqAhBpHpbersEqFIV11IVRWr12RlF6', 'user');

-- Volcando estructura para tabla clipshop.ventas
CREATE TABLE IF NOT EXISTS `ventas` (
  `idVentas` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idProductos` int(10) NOT NULL,
  `idUsuarios` int(10) NOT NULL,
  `cantidad` int(10) NOT NULL,
  `precio` int(10) NOT NULL,
  PRIMARY KEY (`idVentas`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla clipshop.ventas: ~0 rows (aproximadamente)

-- Volcando estructura para tabla clipshop.vouchers
CREATE TABLE IF NOT EXISTS `vouchers` (
  `idVouchers` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `voucher` varchar(155) NOT NULL DEFAULT '',
  `valor` int(20) NOT NULL,
  `fecha` date NOT NULL,
  PRIMARY KEY (`idVouchers`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla clipshop.vouchers: ~1 rows (aproximadamente)
INSERT INTO `vouchers` (`idVouchers`, `voucher`, `valor`, `fecha`) VALUES
	(5, 'estamosCreciendo2023', 15, '2022-11-28'),
	(6, '', 150, '2022-12-08');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
