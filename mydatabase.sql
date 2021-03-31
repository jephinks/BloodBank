-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 31, 2021 at 12:27 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
CREATE TABLE IF NOT EXISTS `city` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `contactus`
--

DROP TABLE IF EXISTS `contactus`;
CREATE TABLE IF NOT EXISTS `contactus` (
  `id` int(25) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  `mail` varchar(25) NOT NULL,
  `phone` bigint(20) NOT NULL,
  `message` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contactus`
--

INSERT INTO `contactus` (`id`, `name`, `mail`, `phone`, `message`) VALUES
(1, 'test', 'test@gmail.com', 5245879, 'hiiiiii'),
(2, 'AMAL P SREENIVASAN', 'jephinks@gmail.com', 8129968224, 'hhhhhhhhhhhhhhhhhhhhhh');

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;
CREATE TABLE IF NOT EXISTS `country` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `hospitalregistration`
--

DROP TABLE IF EXISTS `hospitalregistration`;
CREATE TABLE IF NOT EXISTS `hospitalregistration` (
  `hid` int(11) NOT NULL,
  `hname` varchar(25) NOT NULL,
  `address` varchar(50) NOT NULL,
  `mailid` varchar(30) NOT NULL,
  `phone` bigint(20) NOT NULL,
  `usermobile` bigint(15) NOT NULL,
  `country` varchar(20) NOT NULL,
  `usercity` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`hid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hospitalregistration`
--

INSERT INTO `hospitalregistration` (`hid`, `hname`, `address`, `mailid`, `phone`, `usermobile`, `country`, `usercity`, `password`) VALUES
(3, 'hospital1', 'Addresssss1111', 'h1@gmail.com', 1122445566, 22445588, 'Canada', 'montreal', 'h1');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
CREATE TABLE IF NOT EXISTS `login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` char(2) NOT NULL,
  `mailid` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `type`, `mailid`, `password`) VALUES
(1, 'a', 'admin@gmail.com', 'admin'),
(2, 'd', 'jephin@gmail.com', 'jephin'),
(3, 'h', 'h1@gmail.com', 'h1'),
(4, 'd', 'pious@gmail.com', 'pious'),
(5, 'd', 'j@gmail.com', 'j'),
(6, 'd', 'amal@gmail.com', 'amal');

-- --------------------------------------------------------

--
-- Table structure for table `userregistration`
--

DROP TABLE IF EXISTS `userregistration`;
CREATE TABLE IF NOT EXISTS `userregistration` (
  `userid` int(11) NOT NULL,
  `fname` varchar(25) NOT NULL,
  `lname` varchar(25) NOT NULL,
  `mailid` varchar(50) NOT NULL,
  `usermobile` bigint(20) NOT NULL,
  `usermobile2` bigint(20) NOT NULL,
  `usercity` varchar(50) NOT NULL,
  `countries` char(25) NOT NULL,
  `bloodgroup` char(10) NOT NULL,
  `birthday` date NOT NULL,
  `lastdate` date NOT NULL,
  `password` varchar(15) NOT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userregistration`
--

INSERT INTO `userregistration` (`userid`, `fname`, `lname`, `mailid`, `usermobile`, `usermobile2`, `usercity`, `countries`, `bloodgroup`, `birthday`, `lastdate`, `password`) VALUES
(2, 'Jeph', 'KS', 'jephin@gmail.com', 5145498685, 11224455, 'Montreal', 'Canada', 'A+', '1998-12-15', '1998-12-16', 'jephin'),
(4, 'Pious 123', 'James', 'pious@gmail.com', 11225899, 322566, 'Montreal', 'Canada', 'AB+', '1995-08-07', '1998-12-08', 'pious'),
(5, 'joseya', 'joseya', 'j@gmail.com', 112233, 122545, 'Montreal', 'Canada', 'A+', '1998-12-16', '2021-03-16', 'j'),
(6, 'Amal Sajeev', 'cegep', 'amal@gmail.com', 1122445577, 1122445588, 'Montreal', 'Canada', 'O-', '1998-12-08', '1998-12-03', 'amal');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
