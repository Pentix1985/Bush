'use strict';

/**
 * Функция которая назначена для обработки события клика по кнопке поиск
 */
function changePrice() {
    if(from.value === "" && to.value === "") {
        reset();
    } else if(from.value !== "" && to.value === "") {
        searchFrom();
    } else if(from.value === "" && to.value !== "") {
        searchTo();
    } else if(from.value !== "" && to.value !== "") {
        searchFromTo();
    }
}

/**
 * Функция сброса поиска
 */
function reset() {
    products.forEach((product) => {
        product.style.display = "inline-block";
    });
    from.value = "";
    to.value = "";
}

/**
 * Функция для поиска по цене товара от
 */
function searchFrom() {
    products.forEach((product) => {
        if(product.querySelector('.price').innerText.trim() < Number(from.value)){
            product.style.display = "none";
        }
    });
}

/**
 * Функция для поиска по цене товара до
 */
function searchTo() {
    products.forEach((product) => {
        if(product.querySelector('.price').innerText.trim() < Number(to.value)) {
            product.style.display = "none";
        }
    });
}

/**
 * Функция для поиска цены товара в диапазон
 * @returns Ничего не возвращает, если цена "от" больше чем цена "до"
 */
function searchFromTo() {
    if(Number(from.value) > Number(to.value)) {
        return;
    }

    products.forEach((product) => {
        if(product.querySelector('.price').innerText.trim() < Number(from.value) || product.querySelector('.price').innerText.trim() > Number(to.value)) {
            product.style.display = "none";
        }
    });
}

let products = document.querySelectorAll('.product');
let from = document.querySelector('.from');
let to = document.querySelector('.to');
let searchButton = document.querySelector('.search');
let resetButton = document.querySelector('.reset');

searchButton.addEventListener('click', changePrice);
resetButton.addEventListener('click', reset);