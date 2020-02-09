-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: snapsell2
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `price` decimal(10,2) DEFAULT NULL,
  `FK_user_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `profile_pic_url` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `books_ibfk_1_idx` (`FK_user_id`),
  CONSTRAINT `books_ibfk_1` FOREIGN KEY (`FK_user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (1,'Freddie Mecury','it is useful',19.29,1,'2020-02-02 08:29:36',NULL),(2,'Julian & Andrews','it is useful',30.00,1,'2020-02-02 08:30:12','https://www.thebalance.com/thmb/cR0-1S7hVEbP_RKAkIXZU-sK_98=/683x542/filters:fill(auto,1)/ScreenShot2019-10-14at9.34.06AM-757b2b342fd448b88804abe6c96e122a.png'),(3,'Luke hemmings','Best musician ever.',20.00,4,'2020-02-02 08:31:22','https://www.thebalance.com/thmb/cR0-1S7hVEbP_RKAkIXZU-sK_98=/683x542/filters:fill(auto,1)/ScreenShot2019-10-14at9.34.06AM-757b2b342fd448b88804abe6c96e122a.png'),(4,'5SOS ','Best musician ever.',20.00,4,'2020-02-02 08:32:02','https://www.thebalance.com/thmb/cR0-1S7hVEbP_RKAkIXZU-sK_98=/683x542/filters:fill(auto,1)/ScreenShot2019-10-14at9.34.06AM-757b2b342fd448b88804abe6c96e122a.png'),(5,'OOOO','Unknown illumanti',100.00,2,'2020-02-02 08:32:35',NULL),(6,'OOOO','Unknown illumanti',100.00,2,'2020-02-02 08:32:39',NULL),(7,'Andrew archies','He is a good student',23.30,5,'2020-02-02 08:57:15','https://www.thebalance.com/thmb/cR0-1S7hVEbP_RKAkIXZU-sK_98=/683x542/filters:fill(auto,1)/ScreenShot2019-10-14at9.34.06AM-757b2b342fd448b88804abe6c96e122a.png'),(15,'Chrolette Web ','a spider web who loves to talk with animals.',23.30,5,'2020-02-02 09:03:30',NULL),(19,'Mastery of Love','Learning how to be open.',23.30,4,'2020-02-02 14:11:22','https://www.thebalance.com/thmb/cR0-1S7hVEbP_RKAkIXZU-sK_98=/683x542/filters:fill(auto,1)/ScreenShot2019-10-14at9.34.06AM-757b2b342fd448b88804abe6c96e122a.png'),(20,'The beetles','Inspired to be musicians',23.30,3,'2020-02-06 11:32:10','https://www.thebalance.com/thmb/cR0-1S7hVEbP_RKAkIXZU-sK_98=/683x542/filters:fill(auto,1)/ScreenShot2019-10-14at9.34.06AM-757b2b342fd448b88804abe6c96e122a.png'),(21,'Guitar strings with Attached','Learning to play guitar',20.00,3,'2020-02-06 11:32:37','https://www.thebalance.com/thmb/cR0-1S7hVEbP_RKAkIXZU-sK_98=/683x542/filters:fill(auto,1)/ScreenShot2019-10-14at9.34.06AM-757b2b342fd448b88804abe6c96e122a.png'),(25,'YOU','one of best serial killer',12.00,4,'2020-02-06 12:02:24','https://www.thebalance.com/thmb/cR0-1S7hVEbP_RKAkIXZU-sK_98=/683x542/filters:fill(auto,1)/ScreenShot2019-10-14at9.34.06AM-757b2b342fd448b88804abe6c96e122a.png'),(26,'1975','One of the British band who has ever made a big impact',15.00,6,'2020-02-08 06:37:22','https://cdn.dribbble.com/users/4123522/screenshots/8937478/album_cover_4x.jpg'),(28,'Andrew bond','He is a bad student',20.00,3,'2020-02-08 10:26:22','https://www.thebalance.com/thmb/cR0-1S7hVEbP_RKAkIXZU-sK_98=/683x542/filters:fill(auto,1)/ScreenShot2019-10-14at9.34.06AM-757b2b342fd448b88804abe6c96e122a.png'),(29,'Lenny','such a nice boy',6000.00,4,'2020-02-09 07:57:13','https://images.pexels.com/photos/1374509/pexels-photo-1374509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),(30,'Vipul','such an average tutor',100.00,4,'2020-02-09 07:59:07','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2tNAnXb_6MmiLN0fM4oFiBkfmmyUVt5Lxr-2SnKtv_gyIS6SO');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-09 17:06:21
