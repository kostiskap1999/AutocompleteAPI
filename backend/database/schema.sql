-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema ad_challenge
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ad_challenge
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ad_challenge` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `ad_challenge` ;

-- -----------------------------------------------------
-- Table `ad_challenge`.`area`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ad_challenge`.`area` (
  `place_id` VARCHAR(255) NOT NULL,
  `main_text` VARCHAR(100) NOT NULL,
  `secondary_text` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`place_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ad_challenge`.`ad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ad_challenge`.`ad` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `type` VARCHAR(100) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `extra_description` TEXT NULL DEFAULT NULL,
  `area_id` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `area_id_idx` (`area_id` ASC) VISIBLE,
  CONSTRAINT `area_id`
    FOREIGN KEY (`area_id`)
    REFERENCES `ad_challenge`.`area` (`place_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
