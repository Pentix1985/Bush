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

Задание к уроку №11 по БД.
Создать две таблицы order и order_products

CREATE TABLE `order` (
id INT NOT NULL AUTO_INCREMENT,
user_name VARCHAR(128) NOT NULL,
phone VARCHAR(128) NOT NULL,
datetime DATETIME,
PRIMARY KEY (id));

CREATE TABLE `order_products` (
order_id INT NOT NULL,
product_id INT,
count INT,
PRIMARY KEY order_id;

ALTER TABLE order
CHANGE COLUMN datetime 
datetime DATETIME NOT NULL;

INSERT `order` (user_name, phone, datetime) VALUES (Vasa, 55-55-55, 2021-05-09);

Задание к уроку №12 по БД.
Составной первичный ключ.

ALTER TABLE `order_products`
CHANGE COLUMN `product_id` `product_id` INT NOT NULL;

ALTER TABLE `order_products`
CHANGE COLUMN `count` `count` INT NOT NULL;

ALTER TABLE `order_products`;
ADD CONSTRAINT `fk_order_products_order`
FOREIGN KEY (`order_id`)
REFERENCES `order` (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE `order_products`;
ADD CONSTRAINT `fk_order_products_products`
FOREIGN KEY (`product_id`)
REFERENCES `products` (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

Задание к уроку №14 по БД.

Вывести товары футболка.

ALTER TABLE product_type
CHANGE COLUMN `product_type` `name` VARCAHAR(128) NOT NULL;

SELECT products.id, brend.brend_name, category.name, category.discount, category.aliasname, product_type.name, products.price
FROM products
INNER JOIN brend ON products.id_brend = brend.id
INNER JOIN category ON products.id_category = category.id
INNER JOIN product_type ON products.id_product_type = product_type.id
WHERE product_type.id = 2;


Задание к уроку №15 по БД.

1. Вывести все типы товаров, для которых нет ни одного товара в магазине
2. Вывести информацию обо всех товарах, которые не попали ни в один из заказов

SELECT product_type.* FROM product_type
LEFT JOIN products ON products.id_product_type = product_type.id WHERE products.id is NULL;

SELECT products.id, brend.brend_name, category.name, category.discount, category.aliasname, product_type.name. products.price FROM products
LEFT JOIN brend ON brend.id = products.id_brend
LEFT JOIN category ON category.id = products.id_category
LEFT JOIN product_type ON product_type.id = products.id_category
LEFT JOIN order_products ON oreder_products.prodduct_id = products.id WHERE order_products.product_id is null;

Задание к уроку №16 по БД.

Объединить 3 таблицы при помощи UNION.

SELECT * FROM `order`
LEFT JOIN order_products ON order_products.order_id = `order`.id
LEFT JOIN products ON prdoucts.id = order_product.products_id;

UNION

SELECT * FROM `order`
LEFT JOIN order_products ON order_products.order_id = `order`.id
RIGHT JOIN products ON products.id = order_products.product_id;

Задание к уроку №17 по БД. Агрегирующие функции.
Получить сумму заказов Петра и Василия

INSERT INTO `order` (user_name, phone, datetime) VALUES (Petr, 99-99-99, 2021-06-11);
INSERT INTO order_products (order_id, product_id, count) VALUES (2, 1, 3);
INSERT INTO order_products (order_id, product_id, count) VALUES (2, 2, 2);
INSERT INTO order_products (order_id, product_id, count) VALUES (2, 3, 1);

SELECT `order`.user_name, sum(count * price) as total_price FROM `order`
LEFT JOIN order_products ON order_products.order_id = `order`.id
LEFT JOIN products ON products.id = order_products.product_id WHERE `order`.id = 1;

SELECT `order`.user_name, sum(count * price) as total_price FROM `order`
LEFT JOIN order_products ON order_products.order_id = `order`.id
LEFT JOIN products ON products.id = order_products.product_id WHERE `order`.id = 2;

Задание к уроку №18 по БД. GROUP BY

SELECT `order`.user_name, sum(count * price) FROM `order`
LEFT JOIN order_products ON order_product.order_id = `order`.id
LEFT JOIN products ON products.id = order_product.product_id
GROUP BY `order`.user_name;

Задание к уроку №19 по БД. HAVING & INDEX

SELECT `order`.user_name, sum(count * price) as total_price FROM `order`
LEFT JOIN order_products ON order_product.order_id = `order`.id
LEFT JOIN products ON products.id = order_product.product_id
GROUP BY `order`.user_name
HAVING total_price > 30000;

ALTER TABLE products
ADD INDEX `price_index` (`price` ASC);


Задание к уроку №20 по БД. Транзакции

CREATE TABLE user_bank_account (
id INT NOT NULL AUTO_INCREMENT,
money DECIMAL(10,2) NOT NULL,
user_name VARCHAR(45) NOT NULL,
PRIMARY KEY (id));

INSERT INTO user_bank_account (money, user_name) VALUES (100, Dima);
INSERT INTO user_bank_account (money, user_name) VALUES (200, Jeka);

START TRANSACTION;
	UPDATE user_bank_account SET money = money - 100 WHERE id = 1;
	UPDATE user_bank_account SET money = money + 100 WHERE id in (2);
COMMIT
