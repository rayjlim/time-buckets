-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 21, 2025 at 09:45 PM
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
(5, '2024-12-26 23:41:30', '2025-01-21 07:00:32', 'United States', 1, '', '', '', NULL, NULL, '2024-12-26', 0, '39.788186433713356, -101.62052822051157', 4, 3),
(6, '2024-12-27 04:19:03', '2025-01-21 07:01:45', 'Asia', 1, '', '', '', NULL, NULL, '2025-01-21', 0, '36.506731611253905, 97.92013593080756', 2, 0),
(7, '2024-12-27 04:19:11', '2025-01-21 07:03:14', 'Europe', 1, '', '', '', NULL, NULL, '2025-01-21', 0, '49.03932232490701, 12.17470173442472', 2, 0),
(8, '2024-12-27 04:19:21', '2025-01-21 07:02:51', 'France', 1, '', '', '', NULL, NULL, '2024-12-27', 0, '46.7651622236082, 2.069145531091354', 4, 7),
(9, '2024-12-27 04:19:58', '2025-01-18 00:58:13', 'Hike Mont Blanc, France ', 1, '', 'related to [[8]]', '', NULL, NULL, '2024-12-27', 1, '', 0, 8),
(10, '2024-12-27 04:21:38', '2025-01-17 07:27:05', 'Florida', 1, '', '', '', NULL, NULL, '2024-12-27', 0, '29.04824730665869, -82.05771061412393', 5, 5),
(11, '2024-12-27 04:22:25', '2025-01-19 06:03:33', 'Three Sisters Springs, FL is one of the many freshwater springs', 1, '', 'related to [[10]]', '', NULL, NULL, '2024-12-27', 1, '', 0, 10),
(12, '2024-12-27 04:23:31', '2025-01-21 07:01:28', 'Thailand', 1, '', '', '', NULL, NULL, '2024-12-27', 0, '15.410019281700158, 101.08491869215231', 4, 6),
(13, '2024-12-27 04:23:50', '2024-12-27 04:32:37', 'Phuket', 1, '', '', '', NULL, NULL, '2024-12-27', 0, NULL, 0, 12),
(14, '2024-12-27 04:25:00', '2025-01-21 07:02:32', 'Italy', 1, '', '', '', NULL, NULL, '2024-12-27', 0, '42.95602511880828, 12.514678631843344', 4, 7),
(15, '2024-12-27 04:25:20', '2024-12-27 04:25:27', 'Cinque Terre', 1, '', '', '', NULL, NULL, '2024-12-27', 0, NULL, 0, 14),
(16, '2024-12-27 04:33:22', '2025-01-21 07:03:47', 'South America', 1, '', '', '', NULL, NULL, '2025-01-21', 0, '-13.104875669663002, -59.63395117066897', 1, 0),
(17, '2024-12-27 04:33:32', '2025-01-21 06:59:20', 'Costa Rica', 1, '', '', '', NULL, NULL, '2024-12-27', 0, '9.910044657130895, -84.09686665736672', 4, 3),
(18, '2024-12-27 04:33:54', '2025-01-08 01:51:29', 'Brazil', 1, '', '', '', NULL, NULL, '2024-12-27', 0, '-10.585107027839669, -50.70309982219597', 4, 16),
(19, '2024-12-27 04:34:36', '2025-01-21 07:45:51', 'Rio de Janiero', 1, '', '', '', NULL, NULL, '2024-12-27', 0, '', 0, 18),
(20, '2024-12-27 04:35:16', '2025-01-19 06:05:25', 'Hang glide in Rio', 1, '', 'related to [[19]]', '', NULL, NULL, '2024-12-27', 1, '', 0, 19),
(21, '2024-12-27 04:36:00', '2025-01-21 06:59:47', 'La Fortuna', 1, '', '', '', NULL, NULL, '2024-12-27', 0, '10.471036807891037, -84.6416759316159', 6, 17),
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
(40, '2025-01-19 05:59:24', '2025-01-21 07:04:10', 'Oceana', 1, '', '', '', NULL, NULL, '2025-01-21', 0, '-36.242661020637094, 151.5202088623783', 2, 0),
(41, '2025-01-19 05:59:55', '2025-01-21 07:04:31', 'Australia', 1, '', '', '', NULL, NULL, '2025-01-21', 0, '-25.401779527944274, 135.17255362853084', 3, 40),
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
(60, '2025-01-20 00:49:23', '2025-01-21 07:02:16', 'Spain', 1, '', '', '', NULL, NULL, '2025-01-21', 0, '40.258017096190265, -3.9324737510199146', 4, 7),
(61, '2025-01-20 00:49:41', '2025-01-20 00:49:41', 'Santiago', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 60),
(62, '2025-01-20 00:51:16', '2025-01-20 00:51:55', 'Hike El Caminito Del Rey near Ardales, Spain', 1, '', '', ' hike', NULL, NULL, '2021-05-01', 1, '', 0, 60),
(63, '2025-01-20 00:52:44', '2025-01-21 06:56:47', 'Utah', 1, '', '', '', NULL, NULL, '2025-01-21', 0, '39.12979742977151, -111.59264084970653', 4, 5),
(64, '2025-01-20 00:54:01', '2025-01-20 00:54:43', 'Hike Highline, UT', 1, '', '', ' hike', NULL, NULL, '2021-05-01', 0, '', 0, 63),
(65, '2025-01-20 01:05:13', '2025-01-20 01:05:13', 'visit a castle', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, -1),
(66, '2025-01-20 01:05:25', '2025-01-20 01:05:25', 'stay at a Sandals (all inclusive resort', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, -1),
(67, '2025-01-20 01:05:50', '2025-01-21 06:58:16', 'Arizona', 1, '', '', '', NULL, NULL, '2025-01-21', 0, '34.37281814703137, -111.92161594191332', 5, 5),
(68, '2025-01-20 01:06:11', '2025-01-21 06:57:40', 'Quartzsite', 1, '', '', '', NULL, NULL, '2025-01-21', 0, '33.66961093473945, -114.22296945983386', 7, 67),
(69, '2025-01-20 01:06:24', '2025-01-20 01:06:24', 'Rubber Tramp Rendezvous in Quartzsite, AZ', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, 68),
(70, '2025-01-20 01:06:56', '2025-01-20 01:06:56', 'Go to a NASCAR Event', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, -1),
(71, '2025-01-20 01:07:43', '2025-01-20 01:08:17', 'Go to a film festival', 1, '', '', '', NULL, NULL, '2025-01-20', 0, '', 0, -1),
(72, '2025-01-20 01:09:09', '2025-01-20 01:09:09', 'Go to a Professional Rugby Match in a Foreign Country', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 40),
(73, '2025-01-20 01:10:06', '2025-01-20 01:10:06', 'Yosemite', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 35),
(74, '2025-01-20 01:10:16', '2025-01-20 01:10:25', 'Hike half dome', 1, '', '', ' hike', NULL, NULL, '2025-01-20', 1, '', 0, 73),
(75, '2025-01-20 01:10:48', '2025-01-20 01:10:48', 'Walk amid the Great Sequoias, Sierra Nevada, California', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, 35),
(76, '2025-01-20 01:11:12', '2025-01-20 01:11:12', 'Redwood', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 35),
(77, '2025-01-20 01:11:27', '2025-01-20 01:11:36', 'Hike Stuart Fork trail (Redwood, CA)', 1, '', '', ' hike', NULL, NULL, '2025-01-20', 1, '', 0, 76),
(78, '2025-01-21 07:06:18', '2025-01-21 07:06:46', 'Africa', 1, '', '', '', NULL, NULL, '2025-01-21', 0, '10.894494205524397, 17.35768917035083', 1, 0),
(79, '2025-01-21 07:07:16', '2025-01-21 07:10:00', 'Cape Town', 100, '', '', '', NULL, NULL, '2025-01-21', 0, '', 0, 82),
(80, '2025-01-21 07:07:32', '2025-01-21 07:09:52', 'Kruger National Park', 100, '', '', '', NULL, NULL, '2025-01-21', 0, '', 0, 82),
(81, '2025-01-21 07:07:44', '2025-01-21 07:09:47', 'Table Mountain', 100, '', 'opposite latitude to SJ', '', NULL, NULL, '2025-01-21', 0, '', 0, 82),
(82, '2025-01-21 07:09:15', '2025-01-21 07:09:15', 'South Africa', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 78),
(83, '2025-01-21 07:09:30', '2025-01-21 07:09:30', 'rhino orphan sanctuary', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 82),
(84, '2025-01-21 07:10:22', '2025-01-21 07:10:22', 'serengeti safari', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, 82),
(85, '2025-01-21 07:10:41', '2025-01-21 07:10:41', 'Egypt', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 78),
(86, '2025-01-21 07:11:43', '2025-01-21 07:12:05', 'Cairo', 1, '', 'pyramids of giza, sphinx', '', NULL, NULL, '2025-01-21', 0, '', 0, 85),
(87, '2025-01-21 07:15:56', '2025-01-21 07:16:29', 'Waikato', 1, '', 'see the caves; opposite latitude to SJ', '', NULL, NULL, '2025-01-21', 0, '', 0, 39),
(88, '2025-01-21 07:16:38', '2025-01-21 07:16:38', 'waitomo', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 39),
(89, '2025-01-21 07:17:01', '2025-01-21 07:17:01', 'see the glow caves', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, 88),
(90, '2025-01-21 07:17:13', '2025-01-21 07:17:13', 'queenstown', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 39),
(91, '2025-01-21 07:17:24', '2025-01-21 07:17:24', 'Auckland', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 39),
(92, '2025-01-21 07:18:04', '2025-01-21 07:18:04', 'Bay of Islands', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 39),
(93, '2025-01-21 07:18:30', '2025-01-21 07:20:40', 'Rotorua', 1, '', '', '', NULL, NULL, '2025-01-21', 0, '', 0, 39),
(94, '2025-01-21 07:18:43', '2025-01-21 07:18:43', 'Glass bottom boat', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, 93),
(95, '2025-01-21 07:18:58', '2025-01-21 07:18:58', 'Go Zorbing', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, 93),
(96, '2025-01-21 07:19:17', '2025-01-21 07:19:17', 'Suspended Capsule Biking', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, 93),
(97, '2025-01-21 07:21:06', '2025-01-21 07:21:06', 'Christchurch', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 39),
(98, '2025-01-21 07:21:21', '2025-01-21 07:21:21', 'Mountain gondola', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, 97),
(99, '2025-01-21 07:21:33', '2025-01-21 07:21:33', 'hill luge', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, 93),
(100, '2025-01-21 07:22:01', '2025-01-21 07:22:01', 'sydney', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 41),
(101, '2025-01-21 07:22:07', '2025-01-21 07:22:07', 'Perth', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 41),
(102, '2025-01-21 07:22:13', '2025-01-21 07:22:13', 'melborne', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 41),
(103, '2025-01-21 07:22:18', '2025-01-21 07:22:18', 'victoria', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 41),
(104, '2025-01-21 07:22:29', '2025-01-21 07:22:29', 'Sydney Opera House', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, 100),
(105, '2025-01-21 07:22:35', '2025-01-21 07:22:35', 'great barrier reef', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 41),
(106, '2025-01-21 07:23:06', '2025-01-21 07:23:06', '12 apostles rock formations', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 41),
(107, '2025-01-21 07:23:14', '2025-01-21 07:24:38', 'victoria falls', 1, '', '', '', NULL, NULL, '2025-01-21', 0, '', 0, 109),
(108, '2025-01-21 07:23:26', '2025-01-21 07:23:26', 'bungee jump', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, 107),
(109, '2025-01-21 07:24:12', '2025-01-21 07:24:12', 'Zimabwe', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 78),
(110, '2025-01-21 07:25:38', '2025-01-21 07:25:38', 'Jordan', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 78),
(111, '2025-01-21 07:25:54', '2025-01-21 07:25:54', 'Petra', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 110),
(112, '2025-01-21 07:31:36', '2025-01-21 07:32:50', 'Qatar', 1, '', '', '', NULL, NULL, '2025-01-21', 0, '25.263944723393376, 51.16297054821963', 6, 78),
(113, '2025-01-21 07:31:58', '2025-01-21 07:32:27', 'Meryal Waterpark', 1, '', 'Amazing looking park\nhttps://meryalwaterpark.com/', '', NULL, NULL, '2025-01-21', 1, '', 0, 112),
(114, '2025-01-21 07:34:57', '2025-01-21 07:34:57', 'Dubai', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 78),
(115, '2025-01-21 07:35:03', '2025-01-21 07:35:03', 'Beirut', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 78),
(116, '2025-01-21 07:35:39', '2025-01-21 07:35:39', 'Morocco', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 78),
(117, '2025-01-21 07:36:07', '2025-01-21 07:36:07', 'Casablanca', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 116),
(118, '2025-01-21 07:37:00', '2025-01-21 07:37:20', 'Chefchaouen ', 1, '', 'nickname is the Blue City', '', NULL, NULL, '2025-01-21', 0, '', 0, 116),
(119, '2025-01-21 07:37:36', '2025-01-21 07:37:36', 'tanzania', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 78),
(120, '2025-01-21 07:37:47', '2025-01-21 07:37:47', 'Ethiopia', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 78),
(121, '2025-01-21 07:38:18', '2025-01-21 07:38:18', 'Seychelles Islands', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 78),
(122, '2025-01-21 07:38:38', '2025-01-21 07:38:39', 'Scuba dive Seychelles ', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, 121),
(123, '2025-01-21 07:38:48', '2025-01-21 07:38:48', 'Madagascar', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 78),
(124, '2025-01-21 07:39:59', '2025-01-21 07:39:59', 'see  Baobab Trees', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, 82),
(125, '2025-01-21 07:40:11', '2025-01-21 07:40:20', 'see Lemurs', 1, '', '', ' animals', NULL, NULL, '2025-01-21', 1, '', 0, 82),
(126, '2025-01-21 07:41:09', '2025-01-21 07:41:09', 'Sahara Desert', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 78),
(127, '2025-01-21 07:41:27', '2025-01-21 07:41:27', 'Isreal', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 78),
(128, '2025-01-21 07:41:42', '2025-01-21 07:41:43', 'Float in the Dead Sea', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, 127),
(129, '2025-01-21 07:42:58', '2025-01-21 07:42:58', 'see Christ the Redeemer', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, 19),
(130, '2025-01-21 07:43:17', '2025-01-21 07:43:17', 'Sao Paolo', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 18),
(131, '2025-01-21 07:43:40', '2025-01-21 07:43:40', 'find pole with signs showing adventure travel bucket list destinations', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, 130),
(132, '2025-01-21 07:45:30', '2025-01-21 07:45:57', 'Aldeia das Águas hotel and Waterpark', 1, '', 'https://www.facebook.com/aldeiadasaguasflat/', '', NULL, NULL, '2025-01-21', 0, '', 0, 19),
(133, '2025-01-21 07:46:15', '2025-01-21 07:46:15', 'Chile', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 16),
(134, '2025-01-21 07:46:31', '2025-01-21 07:46:31', 'Santiago', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 133),
(135, '2025-01-21 07:48:03', '2025-01-21 07:48:03', 'Easter Island', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 133),
(136, '2025-01-21 07:48:18', '2025-01-21 07:48:18', 'Argentina', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 16),
(137, '2025-01-21 07:48:38', '2025-01-21 07:48:38', 'Bueno Aires', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 136),
(138, '2025-01-21 07:48:47', '2025-01-21 07:48:47', 'Iguazu Falls', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 136),
(139, '2025-01-21 07:49:03', '2025-01-21 07:49:03', 'Machu Picchu', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 34),
(140, '2025-01-21 07:49:18', '2025-01-21 07:49:18', 'Ecuador', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 16),
(141, '2025-01-21 07:49:32', '2025-01-21 07:49:32', 'Galapagos Islands', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 140),
(142, '2025-01-21 07:50:00', '2025-01-21 07:50:00', 'see sea turtles', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, 141),
(143, '2025-01-21 07:51:31', '2025-01-21 07:51:48', ' Mashpi Lodge  for EcoTravel Experience', 1, '', 'https://www.mashpilodge.com/', '', NULL, NULL, '2025-01-21', 1, '', 0, 140),
(144, '2025-01-21 07:52:18', '2025-01-22 03:53:40', 'Mexico', 1, '', '', '', NULL, NULL, '2025-01-22', 0, '23.9464458437985, -102.762882183087', 4, 3),
(145, '2025-01-21 07:52:30', '2025-01-22 03:48:38', 'Chichen Itza', 1, '', '', '', NULL, NULL, '2025-01-22', 0, '20.684337136839495, -88.56838266546345', 5, 144),
(146, '2025-01-21 07:53:33', '2025-01-22 03:50:07', 'Tijuana', 1, '', '', '', NULL, NULL, '2025-01-22', 0, '32.4972063943205, -116.94466541411634', 6, 144),
(147, '2025-01-21 07:53:40', '2025-01-21 07:53:56', 'Parque Acuatico El Vergel', 1, '', 'has Slip n\' Fly', '', NULL, NULL, '2025-01-21', 0, '', 0, 146),
(148, '2025-01-21 07:54:28', '2025-01-22 03:50:37', 'Oaxaca', 1, '', '', '', NULL, NULL, '2025-01-22', 0, '17.070674542255034, -96.73169933409774', 6, 144),
(149, '2025-01-21 07:54:44', '2025-01-21 07:54:44', 'Monte Alban', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 148),
(150, '2025-01-21 07:55:22', '2025-01-22 03:51:11', 'Uxmal ', 1, '', '', '', NULL, NULL, '2025-01-22', 0, '20.36015646509242, -89.7692015838367', 6, 144),
(151, '2025-01-21 07:56:01', '2025-01-22 03:51:32', ' Teotihuacan', 1, '', '', '', NULL, NULL, '2025-01-22', 0, '19.687720166616298, -98.87683673636752', 6, 144),
(152, '2025-01-21 07:56:12', '2025-01-21 07:56:12', 'Pyramid of the Sun', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 151),
(153, '2025-01-21 07:56:34', '2025-01-21 07:56:34', 'Uruguay', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 16),
(154, '2025-01-21 07:56:44', '2025-01-21 07:56:44', 'Venezuela', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 16),
(155, '2025-01-21 07:57:05', '2025-01-21 07:57:05', 'Catatumbo', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 154),
(156, '2025-01-21 07:57:25', '2025-01-21 07:57:25', 'Witness the Lightning Show!', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, 155),
(157, '2025-01-21 07:58:55', '2025-01-21 07:58:55', 'Columbia', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 16),
(158, '2025-01-21 07:59:15', '2025-01-21 07:59:15', 'Caño Cristales', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 157),
(159, '2025-01-21 07:59:25', '2025-01-21 07:59:25', 'Belize', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 16),
(160, '2025-01-21 07:59:41', '2025-01-21 07:59:41', 'Go Cave Tubing', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, 159),
(161, '2025-01-21 08:05:43', '2025-01-21 08:05:44', 'Tokyo', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 38),
(162, '2025-01-21 08:06:02', '2025-01-21 08:06:02', 'Ride the bullet train', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, 161),
(163, '2025-01-21 08:06:22', '2025-01-21 08:07:54', 'Meiji Jingu Shrine', 1, '', '2024-07', 'completed', NULL, NULL, '2025-01-21', 0, '', 0, 161),
(164, '2025-01-21 08:07:18', '2025-01-21 08:07:50', 'sensoj temple', 1, '', '2024-07', 'completed', NULL, NULL, '2025-01-21', 1, '', 0, 161),
(165, '2025-01-21 08:08:11', '2025-01-21 08:09:01', 'Osaka', 1, '', '', '', NULL, NULL, '2025-01-21', 0, '', 0, 38),
(166, '2025-01-21 08:08:15', '2025-01-21 08:09:06', 'kyoto', 1, '', '', '', NULL, NULL, '2025-01-21', 0, '', 0, 38),
(167, '2025-01-21 08:08:28', '2025-01-21 08:09:12', 'Miyazaki', 1, '', '', '', NULL, NULL, '2025-01-21', 0, '', 0, 38),
(168, '2025-01-21 08:09:26', '2025-01-21 08:09:26', 'play rooftop soccer preferably at the Adidas Futsal Park', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, 165),
(169, '2025-01-21 08:09:40', '2025-01-21 08:09:40', 'Spa resort Hawaiians ', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 165),
(170, '2025-01-21 08:10:16', '2025-01-21 08:10:16', 'Big aloha water slide', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, 169),
(171, '2025-01-21 08:10:55', '2025-01-21 08:10:55', 'Kiyomizu-Dera Buddhist temple', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 166),
(172, '2025-01-21 08:11:06', '2025-01-21 08:11:06', 'mt fuji', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 38),
(173, '2025-01-21 08:11:24', '2025-01-21 08:11:24', 'Miyazaki Falls', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 167),
(174, '2025-01-21 08:11:37', '2025-01-21 08:11:37', 'Rowboat through the Takashino Gorge', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, 173),
(175, '2025-01-21 08:12:48', '2025-01-21 08:13:18', 'Nakasendo Samurai Trail', 1, '', 'anytype://object?objectId=bafyreiama6gmgpaemaifqijc7smcxzenqarou47xbvfsffke5hpz3s4cvq&spaceId=bafyreiamsal7ooesmwijmkwd4k4feq6fq42sasryubfat2z4xwdhbw6rdq.3egk46u17sntm', ' hike', NULL, NULL, '2025-01-21', 1, '', 0, 38),
(176, '2025-01-21 08:13:42', '2025-01-21 08:13:42', 'Singapore', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 6),
(177, '2025-01-21 08:14:35', '2025-01-21 08:14:35', 'Infinity pool at Marina Bay Sands', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, 176),
(178, '2025-01-21 08:14:52', '2025-01-21 08:14:52', 'Bangkok', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 12),
(179, '2025-01-21 08:15:01', '2025-01-21 08:15:01', 'grand palace', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 178),
(180, '2025-01-21 08:15:19', '2025-01-21 08:15:19', 'chiang mai', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 12),
(181, '2025-01-21 08:15:23', '2025-01-21 08:15:23', 'Loy Krathong', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 12),
(182, '2025-01-21 08:15:36', '2025-01-21 08:15:36', 'volunteer at elephant rescue', 1, NULL, NULL, '', NULL, NULL, NULL, 1, NULL, 0, 180),
(183, '2025-01-21 08:16:24', '2025-01-21 08:16:35', 'blue tree water park', 1, '', 'has slip n fly', '', NULL, NULL, '2025-01-21', 0, '', 0, 13),
(184, '2025-01-21 08:16:52', '2025-01-21 08:16:52', 'India', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 6),
(185, '2025-01-21 08:18:06', '2025-01-21 08:18:06', 'India', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 6),
(186, '2025-01-21 08:18:15', '2025-01-21 08:18:15', 'Mumbia', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 185),
(187, '2025-01-21 08:18:30', '2025-01-21 08:18:30', 'Taj Mahal', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 185),
(188, '2025-01-21 08:19:00', '2025-01-21 08:19:00', 'Malaysia', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 6),
(189, '2025-01-21 08:33:54', '2025-01-21 08:36:51', 'Penang', 1, '', '', '', NULL, NULL, '2025-01-21', 0, '5.309731224078569, 100.43257216386819', 6, 188),
(190, '2025-01-21 08:34:06', '2025-01-21 08:34:25', 'Escape water park', 1, '', 'Has world\'s longest tube ride', '', NULL, NULL, '2025-01-21', 0, '', 0, 189),
(191, '2025-01-21 08:35:11', '2025-01-21 08:37:34', 'Maine', 1, '', '', '', NULL, NULL, '2025-01-21', 0, '45.05065479132367, -69.24986543566648', 6, 5),
(192, '2025-01-21 08:35:35', '2025-01-21 08:37:54', 'Arcadia NP', 1, '', '', '', NULL, NULL, '2025-01-21', 0, '', 0, 191),
(193, '2025-01-21 09:05:30', '2025-01-21 09:05:30', 'Tennessee', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(194, '2025-01-21 09:05:58', '2025-01-21 09:05:58', 'Cummins Falls State Park', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 193),
(195, '2025-01-22 03:41:49', '2025-01-22 03:41:49', 'Great Pyramid of Giza', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 86),
(196, '2025-01-22 03:44:02', '2025-01-22 03:44:02', 'Harbour of Rio De Janeiro', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 19),
(197, '2025-01-22 03:45:22', '2025-01-22 03:45:22', 'Komodo Island', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 37),
(198, '2025-01-22 03:45:56', '2025-01-22 03:45:56', 'South Korea', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 6),
(199, '2025-01-22 03:46:05', '2025-01-22 03:46:05', 'Jeju Island', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 198),
(200, '2025-01-22 03:46:20', '2025-01-22 03:46:20', 'Vietnam', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 6),
(201, '2025-01-22 03:46:30', '2025-01-22 03:46:30', 'Ha Long Bay', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 200),
(202, '2025-01-22 03:47:23', '2025-01-22 03:47:54', 'Paricutin Volcano', 1, '', '', '', NULL, NULL, '2025-01-22', 0, '20.512681415522646, -102.1871599787789', 5, 144),
(203, '2025-01-22 03:56:34', '2025-01-22 03:56:34', 'Alabama', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(204, '2025-01-22 03:56:42', '2025-01-22 03:56:42', 'Alaska', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(205, '2025-01-22 03:56:52', '2025-01-22 03:56:52', 'Arkansas', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(206, '2025-01-22 03:57:03', '2025-01-22 03:57:03', 'Colorado', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(207, '2025-01-22 03:57:11', '2025-01-22 03:57:11', 'Connecticut', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(208, '2025-01-22 03:57:18', '2025-01-22 03:57:18', 'Delaware', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(209, '2025-01-22 03:57:23', '2025-01-22 03:57:23', 'Georgia', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(210, '2025-01-22 03:57:29', '2025-01-22 03:57:29', 'Hawaii', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(211, '2025-01-22 03:57:34', '2025-01-22 03:57:34', 'Idaho', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(212, '2025-01-22 03:57:43', '2025-01-22 03:57:43', 'Illinois', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(213, '2025-01-22 03:57:49', '2025-01-22 03:57:49', 'Indiana', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(214, '2025-01-22 03:57:55', '2025-01-22 03:57:55', 'Iowa', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(215, '2025-01-22 03:58:08', '2025-01-22 03:58:08', 'Kansas', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(216, '2025-01-22 04:41:23', '2025-01-22 04:41:23', 'Kentucky', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(217, '2025-01-22 04:41:24', '2025-01-22 04:41:24', 'Louisiana', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(218, '2025-01-22 04:41:25', '2025-01-22 04:41:25', 'Maryland', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(219, '2025-01-22 04:41:25', '2025-01-22 04:41:25', 'Massachusetts', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(220, '2025-01-22 04:41:26', '2025-01-22 04:41:26', 'Michigan', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(221, '2025-01-22 04:41:27', '2025-01-22 04:41:27', 'Minnesota', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(222, '2025-01-22 04:41:27', '2025-01-22 04:41:27', 'Mississippi', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(223, '2025-01-22 04:41:28', '2025-01-22 04:41:28', 'Missouri', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(224, '2025-01-22 04:41:28', '2025-01-22 04:41:28', 'Montana', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(225, '2025-01-22 04:41:29', '2025-01-22 04:41:29', 'Nebraska', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(226, '2025-01-22 04:41:29', '2025-01-22 04:41:29', 'Nevada', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(227, '2025-01-22 04:41:30', '2025-01-22 04:41:30', 'New Hampshire', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(228, '2025-01-22 04:41:30', '2025-01-22 04:41:30', 'New Jersey', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(229, '2025-01-22 04:41:31', '2025-01-22 04:41:31', 'New Mexico', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(230, '2025-01-22 04:41:31', '2025-01-22 04:41:31', 'New York', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(231, '2025-01-22 04:41:32', '2025-01-22 04:41:32', 'North Carolina', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(232, '2025-01-22 04:41:32', '2025-01-22 04:41:32', 'North Dakota', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(233, '2025-01-22 04:41:32', '2025-01-22 04:41:32', 'Ohio', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(234, '2025-01-22 04:41:33', '2025-01-22 04:41:33', 'Oklahoma', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(235, '2025-01-22 04:41:34', '2025-01-22 04:41:34', 'Oregon', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(236, '2025-01-22 04:41:36', '2025-01-22 04:41:36', 'Rhode Island', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(237, '2025-01-22 04:41:38', '2025-01-22 04:41:38', 'Pennsylvania', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(238, '2025-01-22 04:42:18', '2025-01-22 04:42:18', 'South Dakota', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(239, '2025-01-22 04:42:18', '2025-01-22 04:42:18', 'Tennessee', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(240, '2025-01-22 04:42:19', '2025-01-22 04:42:19', 'Texas', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(241, '2025-01-22 04:42:21', '2025-01-22 04:42:21', 'Vermont', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(242, '2025-01-22 04:42:21', '2025-01-22 04:42:21', 'Virginia', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(243, '2025-01-22 04:42:23', '2025-01-22 04:42:23', 'Washington', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(244, '2025-01-22 04:42:25', '2025-01-22 04:42:25', 'West Virginia', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(245, '2025-01-22 04:42:26', '2025-01-22 04:42:26', 'Wisconsin', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5),
(246, '2025-01-22 04:42:28', '2025-01-22 04:42:28', 'Wyoming', 1, NULL, NULL, '', NULL, NULL, NULL, 0, NULL, 0, 5);

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=247;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
