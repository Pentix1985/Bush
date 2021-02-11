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

Задание к уроку №5 по БД.

ALTER TABLE `shop`.`brend` 
CHANGE COLUMN `brend_type` `brend_name` VARCHAR(128) NOT NULL ;

ALTER TABLE `shop`.`product_type` 
CHANGE COLUMN `item_type` `product_type` VARCHAR(128) NOT NULL ;

INSERT INTO `shop`.`category` (`id`, `name`, `discount`) VALUES ('1', 'Женская одежда', '5');
INSERT INTO `shop`.`category` (`id`, `name`, `discount`) VALUES ('2', 'Мужская одежда', '0');

use shop;

insert into category (id, name, discount, aliasname) values (3, 'Женская обувь', 10, null);
insert into category (id, name, discount, aliasname) values (4, 'Мужская обувь', 15, 'man''s shoes');

ALTER TABLE `shop`.`category` 
CHANGE COLUMN `id` `id` INT NOT NULL AUTO_INCREMENT ;

ALTER TABLE `shop`.`brend` 
CHANGE COLUMN `id` `id` INT NOT NULL AUTO_INCREMENT ;

INSERT INTO `shop`.`brend` (`id`, `brend_name`) VALUES ('1', 'Marc  O\'Polo');
INSERT INTO `shop`.`brend` (`id`, `brend_name`) VALUES ('2', 'ALCOTT');
INSERT INTO `shop`.`brend` (`id`, `brend_name`) VALUES ('3', 'GUESS');

ALTER TABLE `product_type`
CHANGE COLUMN `id` `id` INT NOT NULL AUTO_INCREMENT;

INSERT INTO product_type (product_type) values ('Платье');
INSERT INTO product_type (product_type) values ('Футболка');