-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 08, 2022 at 03:06 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `storage`
--

-- --------------------------------------------------------

--
-- Table structure for table `basin`
--

CREATE TABLE `basin` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `weight` int(11) NOT NULL,
  `place` varchar(128) NOT NULL,
  `arrived` date NOT NULL DEFAULT current_timestamp(),
  `marinadestart` date NOT NULL DEFAULT '2001-01-01',
  `marinadeend` date NOT NULL DEFAULT '2001-01-01',
  `smoking` date DEFAULT '2001-01-01',
  `rsid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `drystorage`
--

CREATE TABLE `drystorage` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `weight` int(11) NOT NULL,
  `place` varchar(128) NOT NULL,
  `arrived` date NOT NULL DEFAULT '2001-01-01',
  `expiration` date NOT NULL DEFAULT '2001-01-01',
  `externalid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `finalproduct`
--

CREATE TABLE `finalproduct` (
  `id` int(11) NOT NULL,
  `rsid` int(11) DEFAULT NULL,
  `bid` int(11) DEFAULT NULL,
  `did` int(11) DEFAULT NULL,
  `externalid` int(11) DEFAULT NULL,
  `name` varchar(128) NOT NULL,
  `weight` int(11) NOT NULL,
  `place` varchar(128) NOT NULL,
  `arrived` date NOT NULL DEFAULT current_timestamp(),
  `butchered` date NOT NULL DEFAULT '2001-01-01',
  `marinated` date NOT NULL DEFAULT '2001-01-01',
  `smoked` date NOT NULL DEFAULT '2001-01-01'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `resourcestorage`
--

CREATE TABLE `resourcestorage` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `weight` int(11) DEFAULT NULL,
  `place` varchar(128) DEFAULT NULL,
  `arrived` date NOT NULL DEFAULT current_timestamp(),
  `butchered` date DEFAULT '2001-01-01'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `scrap`
--

CREATE TABLE `scrap` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `weight` int(11) NOT NULL,
  `place` varchar(128) NOT NULL,
  `time` date NOT NULL DEFAULT current_timestamp(),
  `rsid` int(11) NOT NULL,
  `did` int(11) NOT NULL,
  `bid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `statistics`
--

CREATE TABLE `statistics` (
  `id` int(11) NOT NULL,
  `fpid` int(11) NOT NULL,
  `rsid` int(11) NOT NULL,
  `bid` int(11) NOT NULL,
  `did` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `weight` int(11) NOT NULL,
  `place` varchar(128) NOT NULL,
  `arrived` date NOT NULL DEFAULT current_timestamp(),
  `butchered` date NOT NULL DEFAULT '2001-01-01',
  `marinated` date NOT NULL DEFAULT '2001-01-01',
  `smoked` date NOT NULL DEFAULT '2001-01-01',
  `stated` date NOT NULL DEFAULT '2001-01-01'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(20) NOT NULL,
  `role` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`) VALUES
(1, 'admin', 'admin', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `basin`
--
ALTER TABLE `basin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `drystorage`
--
ALTER TABLE `drystorage`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `finalproduct`
--
ALTER TABLE `finalproduct`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `resourcestorage`
--
ALTER TABLE `resourcestorage`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `scrap`
--
ALTER TABLE `scrap`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `statistics`
--
ALTER TABLE `statistics`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `basin`
--
ALTER TABLE `basin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `drystorage`
--
ALTER TABLE `drystorage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `finalproduct`
--
ALTER TABLE `finalproduct`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `resourcestorage`
--
ALTER TABLE `resourcestorage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `scrap`
--
ALTER TABLE `scrap`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `statistics`
--
ALTER TABLE `statistics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
