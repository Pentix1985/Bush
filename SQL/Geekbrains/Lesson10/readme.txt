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

Задание к уроку №6 по БД.

SELECT * FROM category;
SELECT * FROM shop.category WHERE aliasname IS NULL;
SELECT * FROM shop.category WHERE discount <> 0;

Задание к уроку №7 по БД.

SELECT * FROM shop.brend WHERE id = 3;
SELECT * FROM shop.product_type LIMIT 2;
SELECT * FROM shop.category WHERE discount < 10 order by name desc;

Задание к уроку №8 по БД.

UPDATE shop.category SET aliasname = 'Women''s Clothing' WHERE id = 1;
UPDATE shop.category SET aliasname = 'Men''s Clothing' WHERE id = 2;
UPDATE shop.category SET aliasname = 'Men''s shoes' WHERE id = 4;
UPDATE shop.category SET aliasname = 'Women''s shoes' WHERE id = 4;
UPDATE shop.category SET name = 'Головные уборы' WHERE id = 5;
UPDATE shop.category SET aliasname = 'Headwear' WHERE id = 5;
insert into shop.brend (brend_name) values ('Тетя Клава Company');
DELETE from shop.brend where id in (4);

Задание к уроку №9 по БД.

CREATE TABLE `shop`.`product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_brend` INT NOT NULL,
  `id_category` INT NOT NULL,
  `id_product_type` INT NOT NULL,
  `price` DECIMAL(10,2) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

RENAME TABLE product TO products;

Задание к уроку №10 по БД.

INSERT products (id_brend, id_category, id_product_type, price) VALUES (10, 3, 3, 600);
(вставили в products товар с идентификатором которого нет в таблице brend);

ALTER TABLE products
ADD CONSTRAINT fk_brend_products
FOREIGN KEY (id_brend)
REFERENCES brend (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

Error! Ошибка т.к. в таблице products присутствует товар с идентификаторм 10 в столбце id_brend

INSERT brend (id, brend_name) VALUES (10, 'Klava company');
Создали внешний ключ.

Попытаемся удалить из бренда товар с идентификатором 10.
DELETE FROM brend WHERE id in (10);
Error! Не задал тип удаления.

ALTER TABLE products
DROP FOREIGN KEY fk_brend_products;

ALETR TABLE products
ADD CONSTRAINT fk_brend_products
FOREIGN KEY (id_brend)
REFERENCES brend (id)
ON DELETE CASCADE
ON UPDATE NO ACTION;

DELETE FROM brend WHERE id in (10);

Добавляем внешние ключи для оставшихся таблиц.

ALTER TABLE products
ADD CONSTRAINT fk_category_products
FOREIGN KEY id_category
REFERENCES category (id)
ON DELETE CASCADE
ON UPDATE NO ACTION;

ALTER TABLE products
ADD CONSTRAINT fk_product_type_products
FOREIGN KEY id_product_type
REFERENCES product_type (id)
ON DELETE CASCADE
ON UPDATE NO ACTION;





