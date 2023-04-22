-- MySQL dump 10.13  Distrib 8.0.32, for macos11.7 (arm64)
--
-- Host: localhost    Database: assignment
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `author_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `author_id` (`author_id`),
  CONSTRAINT `article_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,'pede ullamcorper augue a suscipit nulla elit ac nulla sed vel','at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper',1),(2,'ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam','blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet',2),(3,'purus phasellus in felis donec semper sapien a libero nam dui','vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue',3),(30,'The Benefits of Yoga','Yoga has numerous health benefits, including stress reduction and improved flexibility.',1),(31,'How to Cook the Perfect Steak','Follow these steps to cook a juicy, delicious steak that will impress your dinner guests.',2),(32,'The History of the Internet','The internet has revolutionized the way we communicate and access information, but it has a surprisingly short history.',3),(33,'Tips for Growing Your Own Vegetable Garden','Growing your own vegetables can be a fun and rewarding hobby, and it is easier than you might think.',4),(34,'The Science of Sleep','Getting enough sleep is essential for good health, and scientists are learning more about the importance of sleep every day.',5),(35,'The Basics of Investing','Investing can be a great way to build wealth over time, but it is important to understand the basics before you get started.',6),(36,'10 Simple DIY Home Improvement Projects','These DIY projects are easy enough for anyone to tackle and can improve the look and functionality of your home.',1),(37,'The Art of Public Speaking','Public speaking can be nerve-wracking, but with the right preparation and practice, anyone can give a great speech.',2),(38,'Understanding Climate Change','Climate change is a complex and pressing issue, but there are things we can all do to reduce our impact on the environment.',3),(39,'The Benefits of Meditation','Meditation has been shown to have numerous health benefits, including reduced stress and improved mental clarity.',4),(40,'Title1','Content1',7),(41,'Title2','Content2',8),(42,'Title3','Content3',9),(43,'Title4','Content4',7),(44,'Title5','Content5',8),(45,'Title6','Content6',9),(46,'Title7','Content7',7),(47,'Title8','Content8',8),(48,'Title9','Content9',9),(49,'Title10','Content10',7),(50,'Title11','Content11',8),(51,'Title12','Content12',9),(52,'Title13','Content13',7),(53,'Title14','Content14',8),(54,'Title15','Content15',9),(55,'Title16','Content16',7),(56,'Title17','Content17',8),(57,'Title18','Content18',9),(58,'Title19','Content19',7),(59,'Title20','Content20',8);
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'aaa@gmail.com','password1'),(2,'chichigou@gmail.com','11'),(3,'chichigou12@gmail.com','111112'),(4,'gaasaf0@redcross.org','lVBUfCIjyn'),(5,'rjenman1@ihg.com','lk7BEx'),(6,'mprevost2@answers.com','hqGmjvj'),(7,'bsaleway3@icio.us','5RFF7x4'),(8,'pmagovern4@myspace.com','Qwn9qvBLk6'),(9,'ygreenway5@plala.or.jp','0PCqmxj');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-22 15:35:59
