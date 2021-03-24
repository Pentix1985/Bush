'use strict';

// Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), конструктор Product, который принимает параметры name и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%.

/**
 * Функция конструктор принимает три параметра для хранения информации о товаре и применения скидки
 * @param {string} name - Имя товара строка
 * @param {number} price - цена товара число
 * @param {number} discount - скидка на товар число
 */
function ProductES5(name, price, discount) {
    this.name = name;
    this.price = price;
    this.discount = discount;
}

/**
 * Функция применяет скидку к товару
 * @returns {number} возвращает цену с примененной скидкой
 */
ProductES5.prototype.make25PercentDiscountES5 = function() {
    return this.price -= ((this.price / 100) * this.discount);
}

class ProductES6 {
    constructor(name, price, discount) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }

    /**
     * Функция применяет скидку к товару
     * @returns {number} возвращает цену с примененной скидкой
     */
    make25PercentDiscount() {
        return this.price -= ((this.price / 100) * this.discount);
    }
}

// В стиле ES5
let product1 = new ProductES5("Apple", 250, 25);
console.log(product1.name);
console.log(product1.price);
console.log(product1.discount);
console.log(product1.make25PercentDiscountES5());

// В стиле ES6
let product2 = new ProductES6("Orange", 300, 10);
console.log(product2.name);
console.log(product2.price);
console.log(product2.discount);
console.log(product2.make25PercentDiscount());