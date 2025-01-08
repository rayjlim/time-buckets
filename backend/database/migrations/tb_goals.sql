-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 07, 2025 at 06:27 PM
-- Server version: 5.7.23-23
-- PHP Version: 8.1.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `qtypotmy_primary`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_goals`
--

CREATE TABLE `tb_goals` (
  `id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `priority` int(4) DEFAULT NULL,
  `reason` text COLLATE utf8mb4_unicode_ci,
  `note` text COLLATE utf8mb4_unicode_ci,
  `tags` text COLLATE utf8mb4_unicode_ci,
  `start_timeframe` date DEFAULT NULL,
  `end_timeframe` date DEFAULT NULL,
  `added_at` date DEFAULT NULL,
  `type` int(1) DEFAULT '0',
  `gps_coords` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gps_zoom` int(11) NOT NULL,
  `parent_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tb_goals`
--

INSERT INTO `tb_goals` (`id`, `created_at`, `updated_at`, `title`, `priority`, `reason`, `note`, `tags`, `start_timeframe`, `end_timeframe`, `added_at`, `type`, `gps_coords`, `gps_zoom`, `parent_id`) VALUES
(2, '2024-11-18 07:36:59', '2024-12-26 23:38:57', 'Hike Appalacian Trail', 3, 'reason', 'note', ' hike', NULL, NULL, '2024-12-09', 1, NULL, 0, 0),
(3, '2024-11-18 07:49:20', '2024-12-26 23:39:29', 'North America', 2, '3', '5', '', NULL, NULL, '2024-12-01', 0, NULL, 0, 0),
(4, '2024-12-26 23:40:39', '2024-12-26 23:42:58', 'South Carolina', 1, '', '', '', NULL, NULL, '2024-12-26', 0, NULL, 0, 5),
(5, '2024-12-26 23:41:30', '2024-12-26 23:41:43', 'United States', 1, '', '', '', NULL, NULL, '2024-12-26', 0, NULL, 0, 3),
(6, '2024-12-27 04:19:03', '2024-12-27 04:19:03', 'Asia', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 0),
(7, '2024-12-27 04:19:11', '2024-12-27 04:19:11', 'Europe', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 0),
(8, '2024-12-27 04:19:21', '2024-12-27 04:19:35', 'France', 1, '', '', '', NULL, NULL, '2024-12-27', 0, NULL, 0, 7),
(9, '2024-12-27 04:19:58', '2024-12-27 04:20:28', 'Hike Mont Blanc, France ', 1, '', 'related to [[8]]', '', NULL, NULL, '2024-12-27', 1, NULL, 0, 0),
(10, '2024-12-27 04:21:38', '2024-12-27 04:22:14', 'Florida', 1, '', '', '', NULL, NULL, '2024-12-27', 0, NULL, 0, 5),
(11, '2024-12-27 04:22:25', '2024-12-27 04:22:44', 'Three Sisters Springs, FL is one of the many freshwater springs', 1, '', 'related to [[10]]', '', NULL, NULL, '2024-12-27', 1, NULL, 0, 0),
(12, '2024-12-27 04:23:31', '2024-12-27 04:23:41', 'Thailand', 1, '', '', '', NULL, NULL, '2024-12-27', 0, NULL, 0, 6),
(13, '2024-12-27 04:23:50', '2024-12-27 04:32:37', 'Phuket', 1, '', '', '', NULL, NULL, '2024-12-27', 0, NULL, 0, 12),
(14, '2024-12-27 04:25:00', '2024-12-27 04:25:08', 'Italy', 1, '', '', '', NULL, NULL, '2024-12-27', 0, NULL, 0, 7),
(15, '2024-12-27 04:25:20', '2024-12-27 04:25:27', 'Cinque Terre', 1, '', '', '', NULL, NULL, '2024-12-27', 0, NULL, 0, 14),
(16, '2024-12-27 04:33:22', '2024-12-27 04:33:22', 'South America', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 0),
(17, '2024-12-27 04:33:32', '2024-12-27 04:33:41', 'Costa Rica', 1, '', '', '', NULL, NULL, '2024-12-27', 0, NULL, 0, 3),
(18, '2024-12-27 04:33:54', '2024-12-27 04:34:06', 'Brazil', 1, '', '', '', NULL, NULL, '2024-12-27', 0, NULL, 0, 16),
(19, '2024-12-27 04:34:36', '2024-12-27 04:34:45', 'Rio de Jeniero', 1, '', '', '', NULL, NULL, '2024-12-27', 0, NULL, 0, 18),
(20, '2024-12-27 04:35:16', '2024-12-27 04:35:33', 'Hang glide in Rio', 1, '', 'related to [[19]]', '', NULL, NULL, '2024-12-27', 1, NULL, 0, 0),
(21, '2024-12-27 04:36:00', '2024-12-27 04:41:04', 'La Fortuna', 1, '', '', '', NULL, NULL, '2024-12-27', 0, NULL, 0, 17),
(22, '2024-12-27 04:36:19', '2024-12-27 04:37:06', 'Arenal Skywalk', 1, '', 'related to [[21]]\nsee  [skywalk](https://www.arenal.net/tours/sky-walk )', '', NULL, NULL, '2024-12-27', 1, NULL, 0, 0),
(23, '2024-12-27 04:39:34', '2024-12-27 04:39:39', 'Take a Train Trip', 1, '', '> see also scenic-amtrak-train-rides-national-parks\nromance on the rails $271 / person\nhttp://winetrain.com/package/romance-on-rails/\n$555.98 USD\n- Friday, April 10, 2015\n- San Jose to Oxnard\n- 10:07 am -  7:05 pm\n- 8 hr, 58 min\n- 11 Coast Starlight (Amenities)\n- 1 Superliner Roomette\nPREMIUM\n2 Adult\n$102.00\n1 Superliner Roomette\n$108.00\nSubtotal\n$210.00\n- Sunday, April 12, 2015\n- Oxnard to San Jose\n- 11:44 am -  8:11 pm\n- 8 hr, 27 min\n- 14 Coast Starlight (Amenities)\n- 1 Superliner Roomette\nPREMIUM\n2 Adult\n$102.00\n1 Superliner Roomette\n$108.00\nSubtotal\n$210.00\nMotel 6 Ventura South\n$135.98\nCheck-in:\nFri, Apr 10, 2015\nCheck-out:\nSun, Apr 12, 2015\nDuration:\n2 nights\n- 1  Room\nTerms & Conditions\nTotal\n$555.98', '', NULL, NULL, '2024-12-27', 1, NULL, 0, 0),
(24, '2024-12-27 04:41:25', '2024-12-27 04:41:31', '10m Diving board', 1, '', '### George F Haines International Swim Center\n408-615-3753\nhttps://www.santaclaraca.gov/our-city/departments-g-z/parks-recreation/activities-programs/swimming-programs\n2625 Patricia Dr, Santa Clara, CA 95051\n(408) 243-7727\nNoon Hour\nLap Swim open to everyone age 18 and over\n12:00 pm - 1:30 pm\n$5.00', '', NULL, NULL, '2024-12-27', 1, NULL, 0, 0),
(25, '2024-12-27 04:42:32', '2024-12-27 04:42:41', 'Devil’s Den', 1, '', '', '', NULL, NULL, '2024-12-27', 0, NULL, 0, 10),
(26, '2024-12-27 04:47:48', '2024-12-27 04:48:06', 'Canada', 1, '', '', '', NULL, NULL, '2024-12-27', 0, NULL, 0, 3),
(27, '2024-12-27 04:48:21', '2024-12-27 04:48:30', 'British Columbia', 1, '', '', '', NULL, NULL, '2024-12-27', 0, NULL, 0, 26),
(28, '2024-12-27 04:48:51', '2024-12-27 04:49:06', 'Zipline BC', 1, '', 'related to [[27]]', '', NULL, NULL, '2024-12-27', 1, NULL, 0, 0),
(29, '2024-12-27 07:24:17', '2024-12-27 07:25:16', 'swim w/ manatees', 1, '', '', ' animals', NULL, NULL, '2024-12-27', 1, NULL, 0, 0),
(30, '2024-12-27 07:24:31', '2024-12-27 07:25:09', 'Goat Yoga', 1, '', '', ' animals', NULL, NULL, '2020-10-01', 1, NULL, 0, 0),
(31, '2024-12-27 07:26:46', '2024-12-27 07:27:58', 'Hike the John Muir Trail', 1, '', 'target for 2027-08,	 20 days (215 mi)', ' hike', NULL, NULL, '2021-01-01', 1, NULL, 0, 0),
(32, '2024-12-27 07:29:07', '2024-12-27 07:29:30', 'ride an elephant', 1, '', '', ' animals', NULL, NULL, '2021-01-01', 1, NULL, 0, 0),
(33, '2024-12-27 07:40:15', '2024-12-27 07:40:35', 'visit a distillery', 1, '', '', '', NULL, NULL, '2021-01-01', 1, NULL, 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_goals`
--
ALTER TABLE `tb_goals`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_goals`
--
ALTER TABLE `tb_goals`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
