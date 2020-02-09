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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `profile_pic_url` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'P123.jpg','2020-01-30 05:30:48','Sng@SP33','$2a$10$AY9VYbiyzDBdg/gZxTBMPeMuSUCEzYmNwaBMSOk/C9aPkUYvPOR6y','Professor'),(2,'Hulk123.jpg','2020-01-30 21:47:14','Hulk@$##','$2a$10$pyO4WdjBCC4F6L8iQbYlfepnxQKAhIkQNuFOylJwxvLNq1W5PDmo6','Avenger'),(3,'Ironman.jpg','2020-01-30 21:47:54','TonyStark@richestman','$2a$10$NTko4uQWloS87mrsQYxz3etm9bKgNBeK9PG3z36wb.DRydO96S3pK','Avenger'),(4,'P123.jpg','2020-02-03 11:43:17','vip','$2a$10$NFRUwEGjjDd6MWzjLF1t5uo5RyNO8X44r3xmwRmj3FFT9mzCRnWNa','Professor'),(5,'P123.jpg','2020-02-04 05:58:28','CaptainAmerica','$2a$10$FCJD51qPq/HS/Sbe.nfWGOP4lCfd0vQDTkHQCJ/I8fW2ZZdhC/olq','Avenger'),(6,'P123.jpg','2020-02-08 06:35:27','1975@Bestband','$2a$10$57STF5kNTQapAUNISszzAei87wZYTlQ5AZVlGlokUmMRgThLG.xqS','Musician');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-09 17:06:22
