CREATE TABLE `animals` (
  `id` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Class` varchar(100) NOT NULL,
  `Legs` tinyint(1) NOT NULL,
  `Pet` tinyint(1) NOT NULL
);
INSERT INTO `animals` (`id`, `Name`, `Class`, `Legs`, `Pet`) VALUES
(1, 'kutya', 'emlos', 4, 1),
(2, 'macska', 'emlos', 4, 1),
(5, 'csiga', 'gyürüsfereg', 0, 0),
(6, 'zsiraf', 'emlos', 4, 0),
(7, 'őz', 'emlos', 4, 0),
(8, 'jegesmedve', 'jegesmedve', 4, 1),
(9, 'gólya', 'madár', 2, 0),
(10, 'nyúl', 'emlős', 2, 1),
(11, 'béka', 'hüllő', 2, 1),
(12, 'krokodil', 'hüllő', 4, 0),
(13, 'papagáj', 'madár', 2, 1),
(14, 'szúnyog', 'rovar', 4, 0),
(15, 'katicabogár', 'rovar', 8, 0),
(16, 'méhecske', 'rovar', 8, 0),
(17, 'tyúk', 'madár', 4, 0),
(18, 'pingvin', 'madár', 2, 0),
(19, 'hópárduc', 'emlős', 4, 0),
(21, 'tasmánördög', 'emlős', 4, 0),
(24, 'Jávorszarvas', 'Emlős', 4, 0),
(26, 'Aranyhal', '0', 0, 1);