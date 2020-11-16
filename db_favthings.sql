-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 16, 2020 at 03:35 AM
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
  `media1` varchar(40) NOT NULL,
  `media2` varchar(40) NOT NULL,
  `media3` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_favthings`
--

INSERT INTO `tbl_favthings` (`id`, `title`, `description`, `media1`, `media2`, `media3`) VALUES
(1, 'Bouldering', 'Bouldering is my most prevalent hobby. Not only does it trick you into exercising with its fun but it also gives you a reason to go places and explore. I have gone to Las Vegas and Thailand for the climbing there. I look at it as going on a hike but with a purpose instead of just to look at the sites. Highly recommended for anyone.', 'MeClimb1.jpg', 'MeClimb2.jpg', 'ClimbVid1.mp4'),
(2, 'Hiking', 'Who doesn\'t love hiking? Especially when you get too look out for a really high place. I\'m starting to show a bit of a pattern here, what\'s the opposite of a phobia of heights, because apparently that\'s what I have. I\'ve been fortunate enough to grow up across the road from one of the best lookouts in the province(pictured above). So I guess I got a taste for it young. It never gets old, seeing lakes, mountains, rivers.. Just nature. Love it. ', 'Hike1.jpg', 'Hike2.jpg', 'Hike3.jpg'),
(3, 'Guitar', 'I guess I need to have something to do inside too. I started playing guitar when I was 12. Unfortunately for the people nearby I have always been a bit of a metal head. Sorry for the ear pain Mom and Dad. Even though I\'ve been playing for over 15 years. I still need lots of work. I guess it\'s like that with everything in life; you have to keep trying to learn and improve on everything you do. Anyway if you wanna learn Freebird, I got you covered. ', 'Guitar1.jpg', 'GuitarVid1.mp4', 'GuitarVid2.mp4');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
