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
-- Table structure for table `offers`
--

DROP TABLE IF EXISTS `offers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `offers` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `offer` decimal(10,2) NOT NULL,
  `FK_book_id` int(11) DEFAULT NULL,
  `FK_user_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `offers_books_idx` (`FK_book_id`),
  KEY `offers_ibfk_2_idx` (`FK_user_id`),
  CONSTRAINT `offers_books` FOREIGN KEY (`FK_book_id`) REFERENCES `books` (`id`),
  CONSTRAINT `offers_users` FOREIGN KEY (`FK_user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offers`
--

LOCK TABLES `offers` WRITE;
/*!40000 ALTER TABLE `offers` DISABLE KEYS */;
INSERT INTO `offers` VALUES (2,50.60,2,3,'2020-02-02 09:27:28'),(3,50.60,1,3,'2020-02-02 09:27:37'),(5,10000.00,2,5,'2020-02-02 09:29:13'),(6,34.44,3,3,'2020-02-02 09:57:29'),(7,34.44,3,5,'2020-02-02 09:58:45'),(8,554.44,3,1,'2020-02-02 14:41:19'),(9,100.00,1,4,'2020-02-02 14:41:31'),(10,18.00,2,3,'2020-02-02 14:41:42'),(11,34.44,3,3,'2020-02-06 12:34:43'),(12,34.44,3,4,'2020-02-06 12:37:14'),(13,20.00,2,4,'2020-02-06 12:54:40'),(14,20.00,2,4,'2020-02-06 12:54:40'),(15,122.00,15,4,'2020-02-08 12:46:41'),(16,122.00,15,4,'2020-02-08 12:46:46'),(17,122.00,15,4,'2020-02-08 12:46:46'),(18,12.00,2,4,'2020-02-09 07:18:54'),(19,12.00,2,4,'2020-02-09 07:18:54'),(20,90.00,7,4,'2020-02-09 07:19:55'),(21,100.00,7,4,'2020-02-09 07:26:16'),(22,11.00,7,4,'2020-02-09 07:27:37'),(23,10.00,7,4,'2020-02-09 07:30:21'),(24,9.00,7,4,'2020-02-09 07:32:22'),(25,2.00,28,4,'2020-02-09 07:33:46');
/*!40000 ALTER TABLE `offers` ENABLE KEYS */;
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
