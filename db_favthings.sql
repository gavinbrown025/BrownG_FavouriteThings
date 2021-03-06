-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 16, 2020 at 06:06 PM
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
-- Database: `db_favthings`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_favthings`
--

DROP TABLE IF EXISTS `tbl_favthings`;
CREATE TABLE IF NOT EXISTS `tbl_favthings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(25) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_favthings`
--

INSERT INTO `tbl_favthings` (`id`, `title`, `description`) VALUES
(1, 'Bouldering', 'Bouldering is my most prevalent hobby. Not only does it trick you into exercising with its fun but it also gives you a reason to go places and explore. I have gone to Las Vegas and Thailand for the climbing there. I look at it as going on a hike but with a purpose instead of just to look at the sites. Highly recommended for anyone.'),
(2, 'Hiking', 'Who doesn\'t love hiking? Especially when you get too look out for a really high place. I\'m starting to show a bit of a pattern here, what\'s the opposite of a phobia of heights, because apparently that\'s what I have. I\'ve been fortunate enough to grow up across the road from one of the best lookouts in the province(pictured above). So I guess I got a taste for it young. It never gets old, seeing lakes, mountains, rivers.. Just nature. Love it. '),
(3, 'Guitar', 'I guess I need to have something to do inside too. I started playing guitar when I was 12. Unfortunately for the people nearby I have always been a bit of a metal head. Sorry for the ear pain Mom and Dad. Even though I\'ve been playing for over 15 years. I still need lots of work. I guess it\'s like that with everything in life; you have to keep trying to learn and improve on everything you do. Anyway if you wanna learn Freebird, I got you covered. ');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_favthings_media`
--

DROP TABLE IF EXISTS `tbl_favthings_media`;
CREATE TABLE IF NOT EXISTS `tbl_favthings_media` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `favthing_id` int(11) NOT NULL,
  `media_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_favthings_media`
--

INSERT INTO `tbl_favthings_media` (`id`, `favthing_id`, `media_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 2, 4),
(5, 2, 5),
(6, 2, 6),
(7, 3, 7),
(8, 3, 8),
(9, 3, 9),
(10, 1, 10),
(11, 1, 11),
(12, 1, 12),
(13, 2, 13),
(14, 2, 14),
(15, 2, 15);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_media`
--

DROP TABLE IF EXISTS `tbl_media`;
CREATE TABLE IF NOT EXISTS `tbl_media` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `source` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_media`
--

INSERT INTO `tbl_media` (`id`, `source`) VALUES
(1, 'MeClimb1.jpg'),
(2, 'MeClimb2.jpg'),
(3, 'ClimbVid1.mp4'),
(4, 'Hike1.jpg'),
(5, 'Hike2.jpg'),
(6, 'Hike3.jpg'),
(7, 'Guitar1.jpg'),
(8, 'GuitarVid1.mp4'),
(9, 'GuitarVid2.mp4'),
(10, 'thaiclimb1.jpg'),
(11, 'thaiclimb2.jpg'),
(12, 'thaiclimb3.jpg'),
(13, 'tonsaiTop.mp4'),
(14, 'tonsaiBeach.jpg'),
(15, 'elNidoHike.mp4');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
