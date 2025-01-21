-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 20, 2025 at 11:05 PM
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
  `gps_zoom` int(11) DEFAULT NULL,
  `parent_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tb_goals`
--

INSERT INTO `tb_goals` (`id`, `created_at`, `updated_at`, `title`, `priority`, `reason`, `note`, `tags`, `start_timeframe`, `end_timeframe`, `added_at`, `type`, `gps_coords`, `gps_zoom`, `parent_id`) VALUES
(2, '2024-11-18 07:36:59', '2025-01-20 00:19:15', 'Hike Appalacian Trail', 15, 'reason', '4 months to complete', ' hike', NULL, NULL, '2021-03-01', 1, '', 0, 5),
(3, '2024-11-18 07:49:20', '2024-12-26 23:39:29', 'North America', 2, '3', '5', '', NULL, NULL, '2024-12-01', 0, NULL, 0, 0),
(4, '2024-12-26 23:40:39', '2025-01-17 07:26:53', 'South Carolina', 1, '', '', '', NULL, NULL, '2024-12-26', 0, '33.81833128097173, -80.81474949243297', 5, 5),
(5, '2024-12-26 23:41:30', '2024-12-26 23:41:43', 'United States', 1, '', '', '', NULL, NULL, '2024-12-26', 0, NULL, 0, 3),
(6, '2024-12-27 04:19:03', '2024-12-27 04:19:03', 'Asia', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 0),
(7, '2024-12-27 04:19:11', '2024-12-27 04:19:11', 'Europe', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 0),
(8, '2024-12-27 04:19:21', '2024-12-27 04:19:35', 'France', 1, '', '', '', NULL, NULL, '2024-12-27', 0, NULL, 0, 7),
(9, '2024-12-27 04:19:58', '2025-01-18 00:58:13', 'Hike Mont Blanc, France ', 1, '', 'related to [[8]]', '', NULL, NULL, '2024-12-27', 1, '', 0, 8),
(10, '2024-12-27 04:21:38', '2025-01-17 07:27:05', 'Florida', 1, '', '', '', NULL, NULL, '2024-12-27', 0, '29.04824730665869, -82.05771061412393', 5, 5),
(11, '2024-12-27 04:22:25', '2025-01-19 06:03:33', 'Three Sisters Springs, FL is one of the many freshwater springs', 1, '', 'related to [[10]]', '', NULL, NULL, '2024-12-27', 1, '', 0, 10),
(12, '2024-12-27 04:23:31', '2024-12-27 04:23:41', 'Thailand', 1, '', '', '', NULL, NULL, '2024-12-27', 0, NULL, 0, 6),
(13, '2024-12-27 04:23:50', '2024-12-27 04:32:37', 'Phuket', 1, '', '', '', NULL, NULL, '2024-12-27', 0, NULL, 0, 12),
(14, '2024-12-27 04:25:00', '2024-12-27 04:25:08', 'Italy', 1, '', '', '', NULL, NULL, '2024-12-27', 0, NULL, 0, 7),
(15, '2024-12-27 04:25:20', '2024-12-27 04:25:27', 'Cinque Terre', 1, '', '', '', NULL, NULL, '2024-12-27', 0, NULL, 0, 14),
(16, '2024-12-27 04:33:22', '2024-12-27 04:33:22', 'South America', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 0),
(17, '2024-12-27 04:33:32', '2024-12-27 04:33:41', 'Costa Rica', 1, '', '', '', NULL, NULL, '2024-12-27', 0, NULL, 0, 3),
(18, '2024-12-27 04:33:54', '2025-01-08 01:51:29', 'Brazil', 1, '', '', '', NULL, NULL, '2024-12-27', 0, '-10.585107027839669, -50.70309982219597', 4, 16),
(19, '2024-12-27 04:34:36', '2024-12-27 04:34:45', 'Rio de Jeniero', 1, '', '', '', NULL, NULL, '2024-12-27', 0, NULL, 0, 18),
(20, '2024-12-27 04:35:16', '2025-01-19 06:05:25', 'Hang glide in Rio', 1, '', 'related to [[19]]', '', NULL, NULL, '2024-12-27', 1, '', 0, 19),
(21, '2024-12-27 04:36:00', '2024-12-27 04:41:04', 'La Fortuna', 1, '', '', '', NULL, NULL, '2024-12-27', 0, NULL, 0, 17),
(22, '2024-12-27 04:36:19', '2025-01-18 00:56:16', 'Arenal Skywalk', 1, '', 'related to [[21]]\nsee  [skywalk](https://www.arenal.net/tours/sky-walk )', '', NULL, NULL, '2024-12-27', 1, '', 0, 21),
(23, '2024-12-27 04:39:34', '2025-01-20 00:23:12', 'Take a Train Trip', 15, '', '> see also scenic-amtrak-train-rides-national-parks\nromance on the rails $271 / person\nhttp://winetrain.com/package/romance-on-rails/\n$555.98 USD\n- Friday, April 10, 2015\n- San Jose to Oxnard\n- 10:07 am -  7:05 pm\n- 8 hr, 58 min\n- 11 Coast Starlight (Amenities)\n- 1 Superliner Roomette\nPREMIUM\n2 Adult\n$102.00\n1 Superliner Roomette\n$108.00\nSubtotal\n$210.00\n- Sunday, April 12, 2015\n- Oxnard to San Jose\n- 11:44 am -  8:11 pm\n- 8 hr, 27 min\n- 14 Coast Starlight (Amenities)\n- 1 Superliner Roomette\nPREMIUM\n2 Adult\n$102.00\n1 Superliner Roomette\n$108.00\nSubtotal\n$210.00\nMotel 6 Ventura South\n$135.98\nCheck-in:\nFri, Apr 10, 2015\nCheck-out:\nSun, Apr 12, 2015\nDuration:\n2 nights\n- 1  Room\nTerms & Conditions\nTotal\n$555.98', '', NULL, NULL, '2010-01-01', 1, '', 0, -1),
(24, '2024-12-27 04:41:25', '2025-01-20 00:22:18', '10m Diving board', 6, '', '### George F Haines International Swim Center\n408-615-3753\nhttps://www.santaclaraca.gov/our-city/departments-g-z/parks-recreation/activities-programs/swimming-programs\n2625 Patricia Dr, Santa Clara, CA 95051\n(408) 243-7727\nNoon Hour\nLap Swim open to everyone age 18 and over\n12:00 pm - 1:30 pm\n$5.00\n\"this is about overcoming fears; adreniline rush\nrefer to https://notesee.lilplaytime.com/general/goal-10m-diving-board.md for locations\"', 'accomplishment', NULL, NULL, '2018-01-01', 1, '', 0, -1),
(25, '2024-12-27 04:42:32', '2024-12-27 04:42:41', 'Devil’s Den', 1, '', '', '', NULL, NULL, '2024-12-27', 0, NULL, 0, 10),
(26, '2024-12-27 04:47:48', '2025-01-08 01:39:12', 'Canada', 1, '', '', '', NULL, NULL, '2024-12-27', 0, '55.00788361587753, -101.52498378180313', 4, 3),
(27, '2024-12-27 04:48:21', '2024-12-27 04:48:30', 'British Columbia', 1, '', '', '', NULL, NULL, '2024-12-27', 0, NULL, 0, 26),
(28, '2024-12-27 04:48:51', '2025-01-19 06:03:58', 'Zipline BC', 11, '', 'related to [[27]]', '', NULL, NULL, '2024-12-27', 1, '', 0, 27),
(29, '2024-12-27 07:24:17', '2025-01-19 06:04:17', 'swim w/ manatees', 10, '', '', ' animals', NULL, NULL, '2024-12-27', 1, '', 0, -1),
(30, '2024-12-27 07:24:31', '2025-01-20 00:18:12', 'Goat Yoga', 3, '', 'seen in Texas; https://sfbay.goatyoga.net/', ' animals', NULL, NULL, '2020-10-01', 1, '', 0, -1),
(31, '2024-12-27 07:26:46', '2025-01-19 06:04:36', 'Hike the John Muir Trail', 1, '', 'target for 2027-08,	 20 days (215 mi)', ' hike', NULL, NULL, '2021-01-01', 1, '', 0, 35),
(32, '2024-12-27 07:29:07', '2025-01-19 06:02:36', 'ride an elephant', 1, '', '', ' animals', NULL, NULL, '2021-01-01', 1, '', 0, -1),
(33, '2024-12-27 07:40:15', '2025-01-19 06:02:24', 'visit a distillery', 1, '', '', '', NULL, NULL, '2021-01-01', 1, '', 0, -1),
(34, '2025-01-08 01:43:33', '2025-01-08 01:51:07', 'Peru', 1, '', '', '', NULL, NULL, '2025-01-08', 0, '-10.161810513224491, -76.30781306052639', 4, 16),
(35, '2025-01-08 01:52:12', '2025-01-17 07:27:19', 'California', 1, '', '', '', NULL, NULL, '2025-01-08', 0, '37.69702261722269, -121.16156999497152', 4, 5),
(36, '2025-01-13 02:02:12', '2025-01-17 07:32:14', 'Netherlands', 1, '', '', '', NULL, NULL, '2025-01-13', 0, '52.19277761908508, 5.406044381930482', 4, 7),
(37, '2025-01-13 02:02:14', '2025-01-17 07:28:34', 'Indonesia', 1, '', '', '', NULL, NULL, '2025-01-13', 0, '-2.1694055356738597, 114.37918609610077', 4, 6),
(38, '2025-01-13 02:02:23', '2025-01-17 07:28:05', 'Japan', 1, '', '', '', NULL, NULL, '2025-01-13', 0, '36.04829907885894, 138.27840752139005', 5, 6),
(39, '2025-01-16 05:56:28', '2025-01-19 05:59:39', 'New Zealand', 1, '', '', '', NULL, NULL, '2025-01-17', 0, '-43.40553445196177, 171.476642243311', 3, 40),
(40, '2025-01-19 05:59:24', '2025-01-19 05:59:24', 'Oceana', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 0),
(41, '2025-01-19 05:59:55', '2025-01-19 05:59:55', 'Australia', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 40),
(42, '2025-01-20 00:24:48', '2025-01-20 00:28:28', 'Ride a wave-runner, again', 1, '', '', '', NULL, NULL, '2010-01-01', 1, '', 0, -1),
(43, '2025-01-20 00:26:16', '2025-01-20 00:28:24', 'Go fly fishing', 1, '', '', ' animals', NULL, NULL, '2010-01-01', 1, '', 0, -1),
(44, '2025-01-20 00:26:29', '2025-01-20 00:28:20', 'Go whale watching', 1, '', '', ' animals', NULL, NULL, '2010-01-01', 1, '', 0, -1),
(45, '2025-01-20 00:26:42', '2025-01-20 00:28:15', 'ride a camel', 1, '', 'specifically in the Sahara Desert', ' animals', NULL, NULL, '2010-01-01', 1, '', 0, -1),
(46, '2025-01-20 00:27:37', '2025-01-20 00:28:12', 'see fireflies', 1, '', '', ' animals', NULL, NULL, '2010-01-01', 1, '', 0, -1),
(47, '2025-01-20 00:28:56', '2025-01-20 00:29:21', 'Swim with Sharks', 1, '', '', ' animals', NULL, NULL, '2021-05-01', 1, '', 0, -1),
(48, '2025-01-20 00:31:02', '2025-01-20 00:31:02', 'Ride a Mechanical Bull', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, -1),
(49, '2025-01-20 00:31:09', '2025-01-20 00:31:09', 'Ride a Kiteboard or AeroFoil', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, -1),
(50, '2025-01-20 00:31:28', '2025-01-20 00:31:57', 'kick a field goal-- at an nfl stadium', 1, '', 'From the buried life - tier 1', '', NULL, NULL, '2021-02-01', 1, '', 0, -1),
(51, '2025-01-20 00:32:42', '2025-01-20 00:32:42', 'eat kangaroo', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, -1),
(52, '2025-01-20 00:33:10', '2025-01-20 00:33:10', 'eat rattlesnake', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, -1),
(53, '2025-01-20 00:33:15', '2025-01-20 00:33:15', 'eat buffalo steak', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, -1),
(54, '2025-01-20 00:33:42', '2025-01-20 00:34:05', 'attend a chataqua ', 1, '', '$3k', '', NULL, NULL, '2021-01-01', 1, '', 0, -1),
(55, '2025-01-20 00:34:26', '2025-01-20 00:34:38', 'attend a rodeo', 1, '', '', '', NULL, NULL, '2021-04-01', 1, '', 0, -1),
(56, '2025-01-20 00:45:18', '2025-01-20 00:45:18', 'fly first class', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, -1),
(57, '2025-01-20 00:46:32', '2025-01-20 00:46:32', 'visit 3 of 7 wonders', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, -1),
(58, '2025-01-20 00:46:42', '2025-01-20 00:47:11', 'See the Northern Lights', 1, '', 'Hard to see; Shirley has tried twice', '', NULL, NULL, '2021-05-01', 1, '', 0, -1),
(59, '2025-01-20 00:47:43', '2025-01-20 00:50:52', 'Walk the Camino de Santiago from FR to Santiago, ES', 1, '', 'est.30 days (500 miles)', ' hike', NULL, NULL, '2021-03-01', 1, '', 0, 61),
(60, '2025-01-20 00:49:23', '2025-01-20 00:49:23', 'Spain', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 7),
(61, '2025-01-20 00:49:41', '2025-01-20 00:49:41', 'Santiago', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 60),
(62, '2025-01-20 00:51:16', '2025-01-20 00:51:55', 'Hike El Caminito Del Rey near Ardales, Spain', 1, '', '', ' hike', NULL, NULL, '2021-05-01', 1, '', 0, 60),
(63, '2025-01-20 00:52:44', '2025-01-20 00:52:44', 'Utah', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(64, '2025-01-20 00:54:01', '2025-01-20 00:54:43', 'Hike Highline, UT', 1, '', '', ' hike', NULL, NULL, '2021-05-01', 0, '', 0, 63),
(65, '2025-01-20 01:05:13', '2025-01-20 01:05:13', 'visit a castle', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, -1),
(66, '2025-01-20 01:05:25', '2025-01-20 01:05:25', 'stay at a Sandals (all inclusive resort', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, -1),
(67, '2025-01-20 01:05:50', '2025-01-20 01:05:50', 'Arizona', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(68, '2025-01-20 01:06:11', '2025-01-20 01:06:11', 'Quartzsite', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 67),
(69, '2025-01-20 01:06:24', '2025-01-20 01:06:24', 'Rubber Tramp Rendezvous in Quartzsite, AZ', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, 68),
(70, '2025-01-20 01:06:56', '2025-01-20 01:06:56', 'Go to a NASCAR Event', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, -1),
(71, '2025-01-20 01:07:43', '2025-01-20 01:08:17', 'Go to a film festival', 1, '', '', '', NULL, NULL, '2025-01-20', 0, '', 0, -1),
(72, '2025-01-20 01:09:09', '2025-01-20 01:09:09', 'Go to a Professional Rugby Match in a Foreign Country', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 40),
(73, '2025-01-20 01:10:06', '2025-01-20 01:10:06', 'Yosemite', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 35),
(74, '2025-01-20 01:10:16', '2025-01-20 01:10:25', 'Hike half dome', 1, '', '', ' hike', NULL, NULL, '2025-01-20', 1, '', 0, 73),
(75, '2025-01-20 01:10:48', '2025-01-20 01:10:48', 'Walk amid the Great Sequoias, Sierra Nevada, California', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, 35),
(76, '2025-01-20 01:11:12', '2025-01-20 01:11:12', 'Redwood', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 35),
(77, '2025-01-20 01:11:27', '2025-01-20 01:11:36', 'Hike Stuart Fork trail (Redwood, CA)', 1, '', '', ' hike', NULL, NULL, '2025-01-20', 1, '', 0, 76);

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
