-- phpMyAdmin SQL Dump
-- version 4.9.11
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 13, 2023 at 08:12 AM
-- Server version: 5.7.23-23
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lilplayt_shared`
--

-- --------------------------------------------------------

--
-- Table structure for table `gc_games`
--

CREATE TABLE `gc_games` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `fg_id` int(6) DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `genre` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `size` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `size_calculated` decimal(6,3) DEFAULT NULL,
  `status` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `summary` text COLLATE utf8mb4_unicode_ci,
  `thoughts` text COLLATE utf8mb4_unicode_ci,
  `issues` text COLLATE utf8mb4_unicode_ci,
  `platform` tinyint(255) DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `graphic_style` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `replayability` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `priority` int(4) DEFAULT NULL,
  `tags` text COLLATE utf8mb4_unicode_ci,
  `fg_article_date` date DEFAULT NULL,
  `fg_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `gc_games`
--

INSERT INTO `gc_games` (`id`, `fg_id`, `title`, `genre`, `size`, `size_calculated`, `status`, `summary`, `thoughts`, `issues`, `platform`, `image`, `graphic_style`, `replayability`, `priority`, `tags`, `fg_article_date`, `fg_url`, `created_at`, `updated_at`) VALUES
(2, 4, 'Motorcycle Club', NULL, '780 MB', '0.780', NULL, NULL, NULL, NULL, NULL, 'http://i65.fastpic.ru/big/2015/0222/fc/05d851f784d24dd7a58afc73196795fc.jpg', NULL, NULL, NULL, NULL, '2016-07-06', 'https://fitgirl-repacks.site/motorcycle-club/', '2023-03-13 14:06:28', '2023-03-13 14:06:28'),
(3, 3, 'Joe Dever’s Lone Wolf HD Remastered', NULL, '1,2 GB', '1.200', NULL, NULL, NULL, NULL, NULL, 'http://i65.fastpic.ru/big/2015/0222/9e/a35dc82ddcfcac23302100e67b2b1b9e.jpg', NULL, NULL, NULL, NULL, '2016-07-06', 'https://fitgirl-repacks.site/joe-devers-lone-wolf-hd-remastered/', '2023-03-13 14:06:28', '2023-03-13 14:06:28'),
(4, 2, 'Emergency 5: Deluxe Edition', NULL, '5 GB', '5.000', NULL, NULL, NULL, NULL, NULL, 'http://i65.fastpic.ru/big/2015/0222/e3/d67abd5c913742f849e5e81b6d6bfee3.jpg', NULL, NULL, NULL, NULL, '2016-07-06', 'https://fitgirl-repacks.site/emergency-5-deluxe-edition/', '2023-03-13 14:06:28', '2023-03-13 14:06:28'),
(5, 1, 'Geometry Wars 3: Dimensions', NULL, '69 MB', '0.069', NULL, NULL, NULL, NULL, NULL, 'http://i65.fastpic.ru/big/2015/0222/30/a427ffd0e06e4eeaf4e46883fbde0530.jpg', NULL, NULL, NULL, NULL, '2016-07-06', 'https://fitgirl-repacks.site/geometry-wars-3-dimensions-my-first-repack/', '2023-03-13 14:06:28', '2023-03-13 14:06:28'),
(6, 14, 'Cargo 3', NULL, '3,4 GB', '3.400', NULL, NULL, NULL, NULL, NULL, 'http://i65.fastpic.ru/big/2015/0222/07/9bd45d7e3d816b3e6bd1a4548cc08807.jpg', NULL, NULL, NULL, NULL, '2016-07-07', 'https://fitgirl-repacks.site/cargo-3/', '2023-03-13 14:07:17', '2023-03-13 14:07:17'),
(7, 13, 'Lara Croft and the Temple of Osiris', NULL, '1,95 GB', '1.950', NULL, NULL, NULL, NULL, NULL, 'http://i65.fastpic.ru/big/2015/0222/7c/89b0993c14675f911a577b39897ebb7c.jpg', NULL, NULL, NULL, NULL, '2016-07-07', 'https://fitgirl-repacks.site/lara-croft-and-the-temple-of-osiris/', '2023-03-13 14:07:17', '2023-03-13 14:07:17'),
(8, 12, 'Dustforce DX', NULL, '242 MB', '0.242', NULL, NULL, NULL, NULL, NULL, 'http://i65.fastpic.ru/big/2015/0222/0f/ef221b639a2bd282d269fca730bb980f.jpg', NULL, NULL, NULL, NULL, '2016-07-06', 'https://fitgirl-repacks.site/dustforce-dx/', '2023-03-13 14:07:17', '2023-03-13 14:07:17'),
(9, 11, 'The Detail: Episode 1 – Where the Dead Lie', NULL, '345 MB', '0.345', NULL, NULL, NULL, NULL, NULL, 'http://i65.fastpic.ru/big/2015/0222/dd/71d5928542a401bee60b501c3a70d4dd.jpg', NULL, NULL, NULL, NULL, '2016-07-06', 'https://fitgirl-repacks.site/the-detail-episode-1-where-the-dead-lie/', '2023-03-13 14:07:17', '2023-03-13 14:07:17'),
(10, 10, 'Magical Battle Festa', NULL, '321 MB', '0.321', NULL, NULL, NULL, NULL, NULL, 'http://i65.fastpic.ru/big/2015/0222/a3/fb1b6149a559cb197203a821352e3fa3.jpg', NULL, NULL, NULL, NULL, '2016-07-06', 'https://fitgirl-repacks.site/magical-battle-festa/', '2023-03-13 14:07:17', '2023-03-13 14:07:17'),
(11, 9, 'Frozen Synapse Prime', NULL, '296 MB', '0.296', NULL, NULL, NULL, NULL, NULL, 'http://i65.fastpic.ru/big/2015/0222/5f/4d5df64d9bd538c60911b700e69b345f.jpg', NULL, NULL, NULL, NULL, '2016-07-06', 'https://fitgirl-repacks.site/frozen-synapse-prime/', '2023-03-13 14:07:17', '2023-03-13 14:07:17'),
(12, 8, 'The Old City: Leviathan', NULL, '1,81 GB', '1.810', NULL, NULL, NULL, NULL, NULL, 'http://i65.fastpic.ru/big/2015/0222/66/125ac0f4dcc7a8cb389c3787cd161166.jpg', NULL, NULL, NULL, NULL, '2016-07-06', 'https://fitgirl-repacks.site/the-old-city-leviathan/', '2023-03-13 14:07:17', '2023-03-13 14:07:17'),
(13, 7, 'How to Survive: Storm Warning Edition', NULL, '1,2 GB', '1.200', NULL, NULL, NULL, NULL, NULL, 'http://i65.fastpic.ru/big/2015/0222/27/b79a46932d5bb5e7050610ee81501727.jpg', NULL, NULL, NULL, NULL, '2016-07-06', 'https://fitgirl-repacks.site/how-to-survive-storm-warning-edition/', '2023-03-13 14:07:17', '2023-03-13 14:07:17'),
(14, 6, 'Mining Industry Simulator', NULL, '538 MB', '0.538', NULL, NULL, NULL, NULL, NULL, 'http://i65.fastpic.ru/big/2015/0222/c8/ae21f71e2eeb678599f0eb2de33667c8.jpg', NULL, NULL, NULL, NULL, '2016-07-06', 'https://fitgirl-repacks.site/mining-industry-simulator/', '2023-03-13 14:07:17', '2023-03-13 14:07:17'),
(15, 5, 'Magnifico', NULL, '259 MB', '0.259', NULL, NULL, NULL, NULL, NULL, 'http://i65.fastpic.ru/big/2015/0222/4b/b45ac4bfa97ae68297ff8b0a310b3b4b.jpg', NULL, NULL, NULL, NULL, '2016-07-06', 'https://fitgirl-repacks.site/magnifico/', '2023-03-13 14:07:17', '2023-03-13 14:07:17'),
(16, 24, 'Dungeon of the Endless', NULL, '278 MB', '0.278', NULL, NULL, NULL, NULL, NULL, 'http://i65.fastpic.ru/big/2015/0222/92/b97c75d592adf665bf0b550ce6312e92.jpg', NULL, NULL, NULL, NULL, '2016-07-07', 'https://fitgirl-repacks.site/dungeon-of-the-endless/', '2023-03-13 14:07:34', '2023-03-13 14:07:34'),
(17, 23, 'Crusader Kings 2: Way of Life + 49 DLC', NULL, '564 MB', '0.564', NULL, NULL, NULL, NULL, NULL, 'http://i65.fastpic.ru/big/2015/0222/31/8708353c150858b7b5aeb77a2c9d4c31.jpg', NULL, NULL, NULL, NULL, '2016-07-07', 'https://fitgirl-repacks.site/crusader-kings-2-way-of-life-49-dlc/', '2023-03-13 14:07:34', '2023-03-13 14:07:34'),
(18, 22, 'Dead Effect', NULL, '1,05 GB', '1.050', NULL, NULL, NULL, NULL, NULL, 'http://i65.fastpic.ru/big/2015/0222/16/23b80830e6d9e4769aa36b4b2e6d4216.jpg', NULL, NULL, NULL, NULL, '2016-07-07', 'https://fitgirl-repacks.site/dead-effect/', '2023-03-13 14:07:34', '2023-03-13 14:07:34'),
(19, 21, 'The King of Fighters ’98: Ultimate Match – Final Edition', NULL, '315 MB', '0.315', NULL, NULL, NULL, NULL, NULL, 'http://i65.fastpic.ru/big/2015/0222/e7/aadd863e269836542012f216cc2f36e7.jpg', NULL, NULL, NULL, NULL, '2016-07-07', 'https://fitgirl-repacks.site/the-king-of-fighters-98-ultimate-match-final-edition/', '2023-03-13 14:07:34', '2023-03-13 14:07:34'),
(20, 20, 'Death Cargo', NULL, '1,27 GB', '1.270', NULL, NULL, NULL, NULL, NULL, 'http://i65.fastpic.ru/big/2015/0222/88/aa23d48a7f4eb6a32ad81fce6f867688.jpg', NULL, NULL, NULL, NULL, '2016-07-07', 'https://fitgirl-repacks.site/death-cargo/', '2023-03-13 14:07:34', '2023-03-13 14:07:34'),
(21, 19, 'Paper Monsters Recut', NULL, '80 MB', '0.080', NULL, NULL, NULL, NULL, NULL, 'http://i65.fastpic.ru/big/2015/0222/f4/a485d9b8a5aeba3105fe44ebf3c64ff4.jpg', NULL, NULL, NULL, NULL, '2016-07-07', 'https://fitgirl-repacks.site/paper-monsters-recut/', '2023-03-13 14:07:34', '2023-03-13 14:07:34'),
(22, 18, 'Final Fantasy XIII-2', NULL, '13,38 GB', '13.380', NULL, NULL, NULL, NULL, NULL, 'http://i65.fastpic.ru/big/2015/0222/54/db984498c2a372e1bb3f9946a06afc54.jpg', NULL, NULL, NULL, NULL, '2016-07-07', 'https://fitgirl-repacks.site/final-fantasy-xiii-2/', '2023-03-13 14:07:34', '2023-03-13 14:07:34'),
(23, 17, 'BlazBlue: Continuum Shift Extend', NULL, '5,8 GB', '5.800', NULL, NULL, NULL, NULL, NULL, 'http://i65.fastpic.ru/big/2015/0222/5c/a01a8319e0bf28afe8f8c7670cac1f5c.jpg', NULL, NULL, NULL, NULL, '2016-07-07', 'https://fitgirl-repacks.site/blazblue-continuum-shift-extend/', '2023-03-13 14:07:34', '2023-03-13 14:07:34'),
(24, 16, 'Juju', NULL, '2,24 GB', '2.240', NULL, NULL, NULL, NULL, NULL, 'http://i65.fastpic.ru/big/2015/0222/5b/42e5eab281834ffea2c83063537fea5b.jpg', NULL, NULL, NULL, NULL, '2016-07-07', 'https://fitgirl-repacks.site/juju/', '2023-03-13 14:07:34', '2023-03-13 14:07:34'),
(25, 15, 'Flyhunter Origins', NULL, '484 MB', '0.484', NULL, NULL, NULL, NULL, NULL, 'http://i65.fastpic.ru/big/2015/0222/3d/5f490ea0261355b63639bde49649f63d.jpg', NULL, NULL, NULL, NULL, '2016-07-07', 'https://fitgirl-repacks.site/flyhunter-origins/', '2023-03-13 14:07:34', '2023-03-13 14:07:34'),
(26, 39, 'Jagged Alliance: Flashback', NULL, '903 MB', '0.903', NULL, NULL, NULL, NULL, NULL, 'http://i66.fastpic.ru/big/2015/0222/b7/21d0d6f3f46911531d20c22e1fa5d5b7.jpg', NULL, NULL, NULL, NULL, '2016-07-07', 'https://fitgirl-repacks.site/jagged-alliance-flashback/', '2023-03-13 14:07:51', '2023-03-13 14:07:51'),
(27, 37, 'Zombie Driver HD: Complete Edition', NULL, '688 MB', '0.688', NULL, NULL, NULL, NULL, NULL, 'http://i66.fastpic.ru/big/2015/0222/d6/b3b85a7ecae5b325c6685031b39ee6d6.jpg', NULL, NULL, NULL, NULL, '2016-07-07', 'https://fitgirl-repacks.site/zombie-driver-hd-complete-edition/', '2023-03-13 14:07:51', '2023-03-13 14:07:51'),
(28, 36, 'Do Not Fall', NULL, '360 MB', '0.360', NULL, NULL, NULL, NULL, NULL, 'http://i66.fastpic.ru/big/2015/0222/0b/9e90a801fe5b5432664a27be938ae90b.jpg', NULL, NULL, NULL, NULL, '2016-07-07', 'https://fitgirl-repacks.site/do-not-fall/', '2023-03-13 14:07:51', '2023-03-13 14:07:51'),
(29, 35, 'Verde Station', NULL, '272 MB', '0.272', NULL, NULL, NULL, NULL, NULL, 'http://i66.fastpic.ru/big/2015/0222/a3/067e3c8bb2cbd1fbf21079bec63115a3.jpg', NULL, NULL, NULL, NULL, '2016-07-07', 'https://fitgirl-repacks.site/verde-station/', '2023-03-13 14:07:51', '2023-03-13 14:07:51'),
(30, 34, 'SunAge: Battle for Elysium – Remastered', NULL, '451 MB', '0.451', NULL, NULL, NULL, NULL, NULL, 'http://i66.fastpic.ru/big/2015/0222/80/f8788bd95b5c9376c800b06144f3cb80.jpg', NULL, NULL, NULL, NULL, '2016-07-07', 'https://fitgirl-repacks.site/sunage-battle-for-elysium-remastered/', '2023-03-13 14:07:51', '2023-03-13 14:07:51'),
(31, 30, 'Rooks Keep', NULL, '880 MB', '0.880', NULL, NULL, NULL, NULL, NULL, 'http://i65.fastpic.ru/big/2015/0222/19/b99b31e0a9500a3a5a9248e1db17ee19.jpg', NULL, NULL, NULL, NULL, '2016-07-07', 'https://fitgirl-repacks.site/rooks-keep/', '2023-03-13 14:07:51', '2023-03-13 14:07:51'),
(32, 29, 'One Late Night: Deadline', NULL, '387 MB', '0.387', NULL, NULL, NULL, NULL, NULL, 'http://i65.fastpic.ru/big/2015/0222/01/e058d281de38d81614eb84e088b5c701.jpg', NULL, NULL, NULL, NULL, '2016-07-07', 'https://fitgirl-repacks.site/one-late-night-deadline/', '2023-03-13 14:07:51', '2023-03-13 14:07:51'),
(33, 28, 'Fat Chicken', NULL, '243 MB', '0.243', NULL, NULL, NULL, NULL, NULL, 'http://i65.fastpic.ru/big/2015/0222/88/c82d6f3ab134bb1152c8335baad9fb88.jpg', NULL, NULL, NULL, NULL, '2016-07-07', 'https://fitgirl-repacks.site/fat-chicken/', '2023-03-13 14:07:51', '2023-03-13 14:07:51'),
(34, 27, 'Dead State (v1.0.0.134)', NULL, '698 MB', '0.698', NULL, NULL, NULL, NULL, NULL, 'http://i65.fastpic.ru/big/2015/0222/84/b4f84932c43069d5c3a7cbf849901084.jpg', NULL, NULL, NULL, NULL, '2016-07-07', 'https://fitgirl-repacks.site/dead-state-v1-0-0-134/', '2023-03-13 14:07:51', '2023-03-13 14:07:51'),
(35, 25, 'Mount & Blade: Warband – Viking Conquest', NULL, '1,5 GB', '1.500', NULL, NULL, NULL, NULL, NULL, 'http://i65.fastpic.ru/big/2015/0222/e9/b554216c9e9e5c68768e5aa7b1f4fee9.jpg', NULL, NULL, NULL, NULL, '2016-07-07', 'https://fitgirl-repacks.site/mount-blade-warband-viking-conquest/', '2023-03-13 14:07:51', '2023-03-13 14:07:51'),
(36, 55, 'Project Night', NULL, '328 MB', '0.328', NULL, NULL, NULL, NULL, NULL, 'http://i66.fastpic.ru/big/2015/0222/90/827d56015bcd90a8f35c3116989e2090.jpg', NULL, NULL, NULL, NULL, '2016-07-08', 'https://fitgirl-repacks.site/project-night/', '2023-03-13 14:08:02', '2023-03-13 14:08:02'),
(37, 54, 'The Bureau : XCOM Declassified – The Complete Edition (+All DLCs)', NULL, '5~6.6 GB SELECTIVE DOWNLOAD', '5.000', NULL, NULL, NULL, NULL, NULL, 'http://i66.fastpic.ru/big/2015/0222/a4/0f3b77334b194c3e2b7945c60e610ea4.jpg', NULL, NULL, NULL, NULL, '2016-07-08', 'https://fitgirl-repacks.site/the-bureau-xcom-declassified-the-complete-edition-all-dlcs/', '2023-03-13 14:08:02', '2023-03-13 14:08:02'),
(38, 53, 'Citizens of Earth', NULL, '753 MB', '0.753', NULL, NULL, NULL, NULL, NULL, 'http://i66.fastpic.ru/big/2015/0222/29/f15bb0f176043e0b40626cbca1cfc929.jpg', NULL, NULL, NULL, NULL, '2016-07-08', 'https://fitgirl-repacks.site/citizens-of-earth/', '2023-03-13 14:08:02', '2023-03-13 14:08:02'),
(39, 51, 'XCOM: Enemy Unknown – The Complete Edition', NULL, '12 GB', '12.000', NULL, NULL, NULL, NULL, NULL, 'http://i66.fastpic.ru/big/2015/0222/b8/3835c69fe30eb66beececdfefbafa6b8.jpg', NULL, NULL, NULL, NULL, '2016-07-08', 'https://fitgirl-repacks.site/xcom-enemy-unknown-the-complete-edition/', '2023-03-13 14:08:02', '2023-03-13 14:08:02'),
(40, 50, 'Blackguards 2', NULL, '3,3 GB', '3.300', NULL, NULL, NULL, NULL, NULL, 'http://i66.fastpic.ru/big/2015/0222/d8/8ee86e5906cf7c350c6ac3158d9121d8.jpg', NULL, NULL, NULL, NULL, '2016-07-08', 'https://fitgirl-repacks.site/blackguards-2/', '2023-03-13 14:08:02', '2023-03-13 14:08:02'),
(41, 49, 'Double Dragon Trilogy', NULL, '90 MB', '0.090', NULL, NULL, NULL, NULL, NULL, 'http://i66.fastpic.ru/big/2015/0222/63/af700aa432ed717a2ced2fa24377e763.jpg', NULL, NULL, NULL, NULL, '2016-07-08', 'https://fitgirl-repacks.site/double-dragon-trilogy/', '2023-03-13 14:08:02', '2023-03-13 14:08:02'),
(42, 48, 'Tengami', NULL, '326 MB', '0.326', NULL, NULL, NULL, NULL, NULL, 'http://i66.fastpic.ru/big/2015/0222/f1/cd5d18fbe8c1e515f9e42c2ce6549df1.jpg', NULL, NULL, NULL, NULL, '2016-07-08', 'https://fitgirl-repacks.site/tengami/', '2023-03-13 14:08:02', '2023-03-13 14:08:02'),
(43, 47, 'Poltergeist: A Pixelated Horror (v1.02)', NULL, '108 MB', '0.108', NULL, NULL, NULL, NULL, NULL, 'http://i66.fastpic.ru/big/2015/0222/95/cc74150bf21ee824aaed2fa16b852495.jpg', NULL, NULL, NULL, NULL, '2016-07-08', 'https://fitgirl-repacks.site/poltergeist-a-pixelated-horror-v1-02/', '2023-03-13 14:08:02', '2023-03-13 14:08:02'),
(44, 46, 'Montague’s Mount (v1.4.0f91)', NULL, '405 MB', '0.405', NULL, NULL, NULL, NULL, NULL, 'http://i66.fastpic.ru/big/2015/0222/12/70b2e4b18032c75d7cac49fd1ddcac12.jpg', NULL, NULL, NULL, NULL, '2016-07-08', 'https://fitgirl-repacks.site/montagues-mount-v1-4-0f91/', '2023-03-13 14:08:02', '2023-03-13 14:08:02'),
(45, 45, 'Mechs & Mercs: Black Talons (v1.0.11.24)', NULL, '1,5 GB', '1.500', NULL, NULL, NULL, NULL, NULL, 'http://i66.fastpic.ru/big/2015/0222/6d/eb16f4dcb3fe5211dfe2a34c98d86e6d.jpg', NULL, NULL, NULL, NULL, '2016-07-08', 'https://fitgirl-repacks.site/mechs-mercs-black-talons-v1-0-11-24/', '2023-03-13 14:08:02', '2023-03-13 14:08:02'),
(56, 69, 'Grow Home', NULL, '426 MB', '0.426', NULL, NULL, NULL, NULL, NULL, 'http://i58.fastpic.ru/big/2015/0222/8c/a6a104be420920b952c80952197eda8c.jpg', NULL, NULL, NULL, NULL, '2016-07-08', 'https://fitgirl-repacks.site/grow-home/', '2023-03-13 14:10:49', '2023-03-13 14:10:49'),
(57, 68, 'Exodus Wars: Fractured Empire', NULL, '523 MB', '0.523', NULL, NULL, NULL, NULL, NULL, 'http://i58.fastpic.ru/big/2015/0222/6f/017f226f5b5ffb7283eb80fce115146f.jpg', NULL, NULL, NULL, NULL, '2016-07-08', 'https://fitgirl-repacks.site/exodus-wars-fractured-empire/', '2023-03-13 14:10:50', '2023-03-13 14:10:50'),
(58, 66, 'Raven’s Cry: Digital Deluxe Edition', NULL, '6,8~10,2 GB SELECTIVE DOWNLOAD', '6.800', NULL, NULL, NULL, NULL, NULL, 'http://i58.fastpic.ru/big/2015/0222/1a/94e126dfb8121f28a06c4adfd8f1e81a.jpg', NULL, NULL, NULL, NULL, '2016-07-08', 'https://fitgirl-repacks.site/ravens-cry-digital-deluxe-edition/', '2023-03-13 14:10:50', '2023-03-13 14:10:50'),
(59, 65, 'Fahrenheit: Indigo Prophecy Remastered', NULL, '2,7 GB', '2.700', NULL, NULL, NULL, NULL, NULL, 'http://i58.fastpic.ru/big/2015/0222/9c/7c64ce5803a1b20ba2e51d4b2783c99c.jpg', NULL, NULL, NULL, NULL, '2016-07-08', 'https://fitgirl-repacks.site/fahrenheit-indigo-prophecy-remastered/', '2023-03-13 14:10:50', '2023-03-13 14:10:50'),
(60, 64, 'Heroes of Might & Magic 3: HD Edition', NULL, '935 MB', '0.935', NULL, NULL, NULL, NULL, NULL, 'http://i58.fastpic.ru/big/2015/0222/d5/0437bc0523af6c5ad56454dbbd8c04d5.jpg', NULL, NULL, NULL, NULL, '2016-07-08', 'https://fitgirl-repacks.site/heroes-of-might-magic-3-hd-edition/', '2023-03-13 14:10:50', '2023-03-13 14:10:50'),
(61, 63, 'Grim Fandango Remastered', NULL, '3,5 GB', '3.500', NULL, NULL, NULL, NULL, NULL, 'http://i58.fastpic.ru/big/2015/0222/b1/8487e96f614c1e920aeb3868caaa31b1.jpg', NULL, NULL, NULL, NULL, '2016-07-08', 'https://fitgirl-repacks.site/grim-fandango-remastered/', '2023-03-13 14:10:50', '2023-03-13 14:10:50'),
(62, 60, 'Resident Evil HD Remaster', NULL, '3,9~9,5 GB SELECTIVE DOWNLOAD', '3.900', NULL, NULL, NULL, NULL, NULL, 'http://i66.fastpic.ru/big/2015/0222/22/01528e487d9d69073cc9cde342571b22.jpg', NULL, NULL, NULL, NULL, '2016-07-08', 'https://fitgirl-repacks.site/resident-evil-hd-remaster/', '2023-03-13 14:10:50', '2023-03-13 14:10:50'),
(63, 58, 'Nicolas Eymerich The Inquisitor Book II : The Village', NULL, '1,5 GB', '1.500', NULL, NULL, NULL, NULL, NULL, 'http://i66.fastpic.ru/big/2015/0222/af/00f72a5f380a03be57d8bcd3cfde76af.jpg', NULL, NULL, NULL, NULL, '2016-07-08', 'https://fitgirl-repacks.site/nicolas-eymerich-the-inquisitor-book-ii-the-village/', '2023-03-13 14:10:50', '2023-03-13 14:10:50'),
(64, 57, 'Saints Row: Gat Out of Hell (Update 1 included)', NULL, '4,2 GB', '4.200', NULL, NULL, NULL, NULL, NULL, 'http://i66.fastpic.ru/big/2015/0222/5f/548a7d585d2e41ea8c0ab2c06070935f.jpg', NULL, NULL, NULL, NULL, '2016-07-08', 'https://fitgirl-repacks.site/saints-row-gat-out-of-hell-update-1-included/', '2023-03-13 14:10:50', '2023-03-13 14:10:50'),
(65, 56, 'Guild Commander', NULL, '581 MB', '0.581', NULL, NULL, NULL, NULL, NULL, 'http://i66.fastpic.ru/big/2015/0222/9f/e9da2d709d28487d35be891672496b9f.jpg', NULL, NULL, NULL, NULL, '2016-07-08', 'https://fitgirl-repacks.site/guild-commander/', '2023-03-13 14:10:50', '2023-03-13 14:10:50'),
(66, 81, 'Astray', NULL, '1,1 GB', '1.100', NULL, NULL, NULL, NULL, NULL, 'http://i58.fastpic.ru/big/2015/0222/ef/fdb81d9b7bd20e4c636d256bfedb41ef.jpg', NULL, NULL, NULL, NULL, '2016-07-09', 'https://fitgirl-repacks.site/astray/', '2023-03-13 14:10:59', '2023-03-13 14:10:59'),
(67, 80, 'Lucius 2 : The Prophecy', NULL, '2 GB', '2.000', NULL, NULL, NULL, NULL, NULL, 'http://i58.fastpic.ru/big/2015/0222/da/88a312869e3eb85ae71ab0dda79c69da.jpg', NULL, NULL, NULL, NULL, '2016-07-09', 'https://fitgirl-repacks.site/lucius-2-the-prophecy/', '2023-03-13 14:10:59', '2023-03-13 14:10:59'),
(68, 79, 'Decay: The Mare', NULL, '262 MB', '0.262', NULL, NULL, NULL, NULL, NULL, 'http://i58.fastpic.ru/big/2015/0222/99/dc26f6bcac6ddc86bb493cfae0348b99.jpg', NULL, NULL, NULL, NULL, '2016-07-09', 'https://fitgirl-repacks.site/decay-the-mare/', '2023-03-13 14:10:59', '2023-03-13 14:10:59'),
(69, 78, 'Evolve', NULL, 'SELECTIVE DOWNLOAD 7,5~20 GB', '7.500', NULL, NULL, NULL, NULL, NULL, 'http://i58.fastpic.ru/big/2015/0222/5d/d5654683df641b9436822df131e6ea5d.jpg', NULL, NULL, NULL, NULL, '2016-07-09', 'https://fitgirl-repacks.site/evolve/', '2023-03-13 14:10:59', '2023-03-13 14:10:59'),
(70, 77, 'Gravity Ghost', NULL, '392 MB', '0.392', NULL, NULL, NULL, NULL, NULL, 'http://i58.fastpic.ru/big/2015/0222/c7/8d3b208c757b5720d9ae596656d5a2c7.jpg', NULL, NULL, NULL, NULL, '2016-07-09', 'https://fitgirl-repacks.site/gravity-ghost/', '2023-03-13 14:10:59', '2023-03-13 14:10:59'),
(71, 76, 'Supreme League of Patrios: Full Season', NULL, '4,3 GB', '4.300', NULL, NULL, NULL, NULL, NULL, 'http://i58.fastpic.ru/big/2015/0222/c5/2452539b00eca778804b552e230291c5.jpg', NULL, NULL, NULL, NULL, '2016-07-09', 'https://fitgirl-repacks.site/supreme-league-of-patrios-full-season/', '2023-03-13 14:10:59', '2023-03-13 14:10:59'),
(72, 75, 'Cities XXL', NULL, '3,4 GB', '3.400', NULL, NULL, NULL, NULL, NULL, 'http://i58.fastpic.ru/big/2015/0222/43/f0b773d086de3b1061e60ca5603d9743.jpg', NULL, NULL, NULL, NULL, '2016-07-09', 'https://fitgirl-repacks.site/cities-xxl/', '2023-03-13 14:10:59', '2023-03-13 14:10:59'),
(73, 74, 'Crashed Lander: Steam Version', NULL, '411 MB', '0.411', NULL, NULL, NULL, NULL, NULL, 'http://i58.fastpic.ru/big/2015/0222/d7/51bfe9c939e5079d702985a62a7f69d7.jpg', NULL, NULL, NULL, NULL, '2016-07-09', 'https://fitgirl-repacks.site/crashed-lander-steam-version/', '2023-03-13 14:10:59', '2023-03-13 14:10:59'),
(74, 73, 'Air Guardians', NULL, '1 GB', '1.000', NULL, NULL, NULL, NULL, NULL, 'http://i58.fastpic.ru/big/2015/0222/0c/b8c0e47faeb2e0f3073c21f57abab10c.jpg', NULL, NULL, NULL, NULL, '2016-07-09', 'https://fitgirl-repacks.site/air-guardians/', '2023-03-13 14:10:59', '2023-03-13 14:10:59'),
(75, 72, 'SickBrick – Steam Version', NULL, '252 MB', '0.252', NULL, NULL, NULL, NULL, NULL, 'http://i58.fastpic.ru/big/2015/0222/09/247e8b5d4c769f26911e4ea1e0acb509.jpg', NULL, NULL, NULL, NULL, '2016-07-08', 'https://fitgirl-repacks.site/sickbrick-steam-version/', '2023-03-13 14:10:59', '2023-03-13 14:10:59'),
(76, 92, 'Gas Guzzlers Extreme: Full Metal Zombie', NULL, '5.2 GB', '5.200', NULL, NULL, NULL, NULL, NULL, 'http://i65.fastpic.ru/big/2015/0220/41/e3b0afad6cc2c94a2c8c7af8c8bd8041.jpg', NULL, NULL, NULL, NULL, '2016-07-10', 'https://fitgirl-repacks.site/gas-guzzlers-extreme-full-metal-zombie/', '2023-03-13 14:11:26', '2023-03-13 14:11:26'),
(77, 90, 'The Book of Unwritten Tales 2', NULL, '2~3 GB (Selective Download)', '2.000', NULL, NULL, NULL, NULL, NULL, 'http://i63.fastpic.ru/big/2015/0219/d2/237eac7eda0a1262421fa00e059a10d2.jpg', NULL, NULL, NULL, NULL, '2016-07-10', 'https://fitgirl-repacks.site/the-book-of-unwritten-tales-2/', '2023-03-13 14:11:26', '2023-03-13 14:11:26'),
(78, 89, 'Hand of Fate', NULL, '1,4 GB', '1.400', NULL, NULL, NULL, NULL, NULL, 'http://i66.fastpic.ru/big/2015/0217/73/b532e43112a54453a06ed112af2e2273.jpg', NULL, NULL, NULL, NULL, '2016-07-10', 'https://fitgirl-repacks.site/hand-of-fate/', '2023-03-13 14:11:26', '2023-03-13 14:11:26'),
(79, 88, 'Bonetown: The Power of Death', NULL, '1,5 GB', '1.500', NULL, NULL, NULL, NULL, NULL, 'http://i64.fastpic.ru/big/2015/0217/2d/5992816533e8e82352764508bebdcb2d.jpg', NULL, NULL, NULL, NULL, '2016-07-10', 'https://fitgirl-repacks.site/bonetown-the-power-of-death/', '2023-03-13 14:11:26', '2023-03-13 14:11:26'),
(80, 87, 'Cults & Daggers', NULL, '418 MB', '0.418', NULL, NULL, NULL, NULL, NULL, 'http://i64.fastpic.ru/big/2015/0217/e1/b266a55195776d0e96aa9311ba3a7be1.jpg', NULL, NULL, NULL, NULL, '2016-07-10', 'https://fitgirl-repacks.site/cults-daggers/', '2023-03-13 14:11:26', '2023-03-13 14:11:26'),
(81, 86, 'Carmageddon: Reincarnation – Pubic Beta v0.9.0.6670', NULL, '6,3 GB', '6.300', NULL, NULL, NULL, NULL, NULL, 'http://i58.fastpic.ru/big/2015/0217/75/7f454a1539c179ec956d85b226d7b875.jpg', NULL, NULL, NULL, NULL, '2016-07-09', 'https://fitgirl-repacks.site/carmageddon-reincarnation-pubic-beta-v0-9-0-6670/', '2023-03-13 14:11:26', '2023-03-13 14:11:26'),
(82, 85, 'DreadOut: Acts 0, 1, 2', NULL, '1,4 GB', '1.400', NULL, NULL, NULL, NULL, NULL, 'http://i64.fastpic.ru/big/2015/0217/3e/95b897af5289362e3101b6c93968363e.jpg', NULL, NULL, NULL, NULL, '2016-07-09', 'https://fitgirl-repacks.site/dreadout-acts-0-1-2/', '2023-03-13 14:11:26', '2023-03-13 14:11:26'),
(83, 84, 'A.V.', NULL, '597 MB', '0.597', NULL, NULL, NULL, NULL, NULL, 'http://i58.fastpic.ru/big/2015/0222/b0/7e49322905f690c2cef6af30c91d16b0.jpg', NULL, NULL, NULL, NULL, '2016-07-09', 'https://fitgirl-repacks.site/a-v/', '2023-03-13 14:11:26', '2023-03-13 14:11:26'),
(84, 83, 'Lex Mortis', NULL, '1,6 GB', '1.600', NULL, NULL, NULL, NULL, NULL, 'http://i58.fastpic.ru/big/2015/0222/ba/0fc1891adf10be16eaad9dc0b258eeba.jpg', NULL, NULL, NULL, NULL, '2016-07-09', 'https://fitgirl-repacks.site/lex-mortis/', '2023-03-13 14:11:26', '2023-03-13 14:11:26'),
(85, 82, 'Harold', NULL, '1,1 GB', '1.100', NULL, NULL, NULL, NULL, NULL, 'http://i58.fastpic.ru/big/2015/0222/2c/c68bbe97ec6afe840a0cc9dc6eae752c.jpg', NULL, NULL, NULL, NULL, '2016-07-09', 'https://fitgirl-repacks.site/harold/', '2023-03-13 14:11:26', '2023-03-13 14:11:26'),
(86, 103, 'Oddworld: Abe’s Oddysee – New ‘n’ Tasty', NULL, '3,6 GB', '3.600', NULL, NULL, NULL, NULL, NULL, 'http://i60.fastpic.ru/big/2015/0226/b5/1d93db9d182eed62846ee7ea5312c8b5.jpg', NULL, NULL, NULL, NULL, '2016-07-10', 'https://fitgirl-repacks.site/oddworld-abes-oddysee-new-n-tasty/', '2023-03-13 14:12:07', '2023-03-13 14:12:07'),
(87, 101, 'Aaru’s Awakening', NULL, '423 MB', '0.423', NULL, NULL, NULL, NULL, NULL, 'http://i66.fastpic.ru/big/2015/0225/e2/5e93eb80f00adafafd0948601209a7e2.jpg', NULL, NULL, NULL, NULL, '2016-07-10', 'https://fitgirl-repacks.site/aarus-awakening/', '2023-03-13 14:12:07', '2023-03-13 14:12:07'),
(88, 100, 'Darksiders 2: The Complete Edition', NULL, '4,3~6 GB [Selective Download]', '4.300', NULL, NULL, NULL, NULL, NULL, 'http://i80.fastpic.ru/big/2016/0805/ce/21797095f24749567f4c74bf1faa06ce.jpg', NULL, NULL, NULL, NULL, '2016-07-10', 'https://fitgirl-repacks.site/darksiders-2-the-complete-edition/', '2023-03-13 14:12:07', '2023-03-13 14:12:07'),
(89, 99, 'The King of Fighters 2002: Unlimited Match', NULL, '519 MB', '0.519', NULL, NULL, NULL, NULL, NULL, 'http://i60.fastpic.ru/big/2015/0224/ae/fcc992390b81f5814d744e17fd1764ae.jpg', NULL, NULL, NULL, NULL, '2016-07-10', 'https://fitgirl-repacks.site/the-king-of-fighters-2002-unlimited-match/', '2023-03-13 14:12:07', '2023-03-13 14:12:07'),
(90, 98, 'Vangers: Special Edition', NULL, '213 MB', '0.213', NULL, NULL, NULL, NULL, NULL, 'http://i63.fastpic.ru/big/2015/0224/68/426d5637aeedf14f76e34c5118537e68.jpg', NULL, NULL, NULL, NULL, '2016-07-10', 'https://fitgirl-repacks.site/vangers-special-edition/', '2023-03-13 14:12:07', '2023-03-13 14:12:07'),
(91, 97, 'Particula', NULL, '194 MB', '0.194', NULL, NULL, NULL, NULL, NULL, 'http://i57.fastpic.ru/big/2015/0223/f1/a3eb0fa7d563988794daf1cb042318f1.jpg', NULL, NULL, NULL, NULL, '2016-07-10', 'https://fitgirl-repacks.site/particula/', '2023-03-13 14:12:07', '2023-03-13 14:12:07'),
(92, 96, 'Pixel Boy and the Ever Expanding Dungeon', NULL, '92 MB', '0.092', NULL, NULL, NULL, NULL, NULL, 'http://i67.fastpic.ru/big/2015/0223/8c/02e11acf92977727c8454a36a9dc088c.jpg', NULL, NULL, NULL, NULL, '2016-07-10', 'https://fitgirl-repacks.site/pixel-boy-and-the-ever-expanding-dungeon/', '2023-03-13 14:12:07', '2023-03-13 14:12:07'),
(93, 95, 'Caribbean!', NULL, '414 MB', '0.414', NULL, NULL, NULL, NULL, NULL, 'http://i59.fastpic.ru/big/2015/0221/a7/f21bc4e676ec4f52e265bc628b1d20a7.jpg', NULL, NULL, NULL, NULL, '2016-07-10', 'https://fitgirl-repacks.site/caribbean/', '2023-03-13 14:12:07', '2023-03-13 14:12:07'),
(94, 94, 'European Ship Simulator', NULL, '570 MB', '0.570', NULL, NULL, NULL, NULL, NULL, 'http://i59.fastpic.ru/big/2015/0220/3d/712ab6d3c16569c059df55c8fc412f3d.jpg', NULL, NULL, NULL, NULL, '2016-07-10', 'https://fitgirl-repacks.site/european-ship-simulator/', '2023-03-13 14:12:07', '2023-03-13 14:12:07'),
(95, 93, 'Frozen Cortex', NULL, '990 MB', '0.990', NULL, NULL, NULL, NULL, NULL, 'http://i59.fastpic.ru/big/2015/0220/ff/499fc735890b48e25aac629427b96eff.jpg', NULL, NULL, NULL, NULL, '2016-07-10', 'https://fitgirl-repacks.site/frozen-cortex/', '2023-03-13 14:12:07', '2023-03-13 14:12:07'),
(96, 116, 'Zombie Army Trilogy', NULL, '4,5 GB', '4.500', NULL, NULL, NULL, NULL, NULL, 'http://i66.fastpic.ru/big/2015/0307/45/07cf43aa3f0bac9d195f1ef5564e8d45.jpg', NULL, NULL, NULL, NULL, '2016-07-14', 'https://fitgirl-repacks.site/zombie-army-trilogy/', '2023-03-13 14:12:19', '2023-03-13 14:12:19'),
(97, 115, 'Shiftlings', NULL, '784 MB', '0.784', NULL, NULL, NULL, NULL, NULL, 'http://i60.fastpic.ru/big/2015/0304/95/4c24085ed80805a19c9cbd25db81e695.jpg', NULL, NULL, NULL, NULL, '2016-07-10', 'https://fitgirl-repacks.site/shiftlings/', '2023-03-13 14:12:19', '2023-03-13 14:12:19'),
(98, 114, 'White Night', NULL, '532 MB', '0.532', NULL, NULL, NULL, NULL, NULL, 'http://i66.fastpic.ru/big/2015/0304/5a/e31e898a242a638abcad2c85008db05a.jpg', NULL, NULL, NULL, NULL, '2016-07-10', 'https://fitgirl-repacks.site/white-night/', '2023-03-13 14:12:19', '2023-03-13 14:12:19'),
(99, 112, 'Trials Fusion: Fault One Zero  + All previous DLCs', NULL, '5,8 GB', '5.800', NULL, NULL, NULL, NULL, NULL, 'http://i77.fastpic.ru/big/2016/0805/06/f2672e8b21fd43b267382fab10d46906.jpg', NULL, NULL, NULL, NULL, '2016-07-10', 'https://fitgirl-repacks.site/trials-fusion-fault-one-zero-all-previous-dlcs/', '2023-03-13 14:12:19', '2023-03-13 14:12:19'),
(100, 111, 'Warhammer 40,000: Armageddon  + Untold Battles DLC', NULL, '781 MB', '0.781', NULL, NULL, NULL, NULL, NULL, 'http://i64.fastpic.ru/big/2015/0302/6c/62868adffd52bd9fa975ba0c0cae356c.jpg', NULL, NULL, NULL, NULL, '2016-07-10', 'https://fitgirl-repacks.site/warhammer-40000-armageddon-untold-battles-dlc/', '2023-03-13 14:12:19', '2023-03-13 14:12:19'),
(101, 110, 'Train Fever  + USA DLC', NULL, '1,4 GB', '1.400', NULL, NULL, NULL, NULL, NULL, 'http://i64.fastpic.ru/big/2015/0302/29/5db59bcbb54a0eab8fa6789c2e35dc29.jpg', NULL, NULL, NULL, NULL, '2016-07-10', 'https://fitgirl-repacks.site/train-fever-usa-dlc/', '2023-03-13 14:12:19', '2023-03-13 14:12:19'),
(102, 109, 'Europa Universalis IV: El Dorado  + All previous DLCs', NULL, '644 MB', '0.644', NULL, NULL, NULL, NULL, NULL, 'http://i67.fastpic.ru/big/2015/0301/c2/624ca94b920411b936abafd0aaaf9ac2.jpg', NULL, NULL, NULL, NULL, '2016-07-10', 'https://fitgirl-repacks.site/europa-universalis-iv-el-dorado-all-previous-dlcs/', '2023-03-13 14:12:19', '2023-03-13 14:12:19'),
(103, 108, 'Pneuma: Breath of Life', NULL, '1,8 GB', '1.800', NULL, NULL, NULL, NULL, NULL, 'http://i67.fastpic.ru/big/2015/0301/8c/175d68ba8ed6591fc2280d72f0f9a38c.jpg', NULL, NULL, NULL, NULL, '2016-07-10', 'https://fitgirl-repacks.site/pneuma-breath-of-life/', '2023-03-13 14:12:19', '2023-03-13 14:12:19'),
(104, 107, 'Dynasty Warriors 8: Empires', NULL, '5,7 GB', '5.700', NULL, NULL, NULL, NULL, NULL, 'http://i67.fastpic.ru/big/2015/0228/2c/76186e57889f79021b37103089d0f42c.jpg', NULL, NULL, NULL, NULL, '2016-07-10', 'https://fitgirl-repacks.site/dynasty-warriors-8-empires/', '2023-03-13 14:12:19', '2023-03-13 14:12:19'),
(105, 106, 'Sentinel', NULL, '457 MB', '0.457', NULL, NULL, NULL, NULL, NULL, 'http://i67.fastpic.ru/big/2015/0228/98/603bc7401f099929a81be63adf7da498.jpg', NULL, NULL, NULL, NULL, '2016-07-10', 'https://fitgirl-repacks.site/sentinel/', '2023-03-13 14:12:19', '2023-03-13 14:12:19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gc_games`
--
ALTER TABLE `gc_games`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `gc_games`
--
ALTER TABLE `gc_games`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
