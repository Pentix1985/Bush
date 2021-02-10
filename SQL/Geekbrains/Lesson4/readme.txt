Задание к уроку №4 по БД.

Создать доболнительные таблицы при помощи полученных знаний

CREATE SCHEMA `shop` DEFAULT CHARACTER SET utf8 ;

Категории товара
CREATE TABLE `shop`.`category` (
  `id` INT NOT NULL,
  `name` VARCHAR(128) NOT NULL,
  `discount` TINYINT(100) NOT NULL,
  PRIMARY KEY (`id`));

SELECT * FROM shop.category;

ALTER TABLE `shop`.`category` 
ADD COLUMN `aliasname` VARCHAR(128) NULL AFTER `discount`;

DROP TABLE `shop`.`category`
DROP DATABASE `shop`

Бренд товара
CREATE TABLE `shop`.`brend` (
  `id` INT NOT NULL,
  `brend` VARCHAR(128) NOT NULL,
  PRIMARY KEY (`id`));

Тип товара
CREATE TABLE `shop`.`item_type` (
  `id` INT NOT NULL,
  `item_type` VARCHAR(128) NOT NULL,
  PRIMARY KEY (`id`));