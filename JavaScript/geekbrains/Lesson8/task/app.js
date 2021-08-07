'use strict';

let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

fitlerLabel.addEventListener('click', function() {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function(header) {
    header.addEventListener('click', function(event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function() {
    filterSizes.classList.toggle('hidden');
});

// header
const cartIconCount = document.querySelector('.cartIconWrap>span');
const cartIconButton = document.querySelector('.cartIconWrap');
const basket = document.querySelector('.basket');

// featured container
const featuredImgDarkButton = document.querySelectorAll('.featuredImgDark button');

// Объект с функциями для работы с корзиной
let funcObj = {
    /**
     * Функция назначается на все кнопки "Купить" в списке товаров
     */
    onClickAddToCart() {
        this.increaseCartIconCount();
    },

    /**
     * Функция увеличивает счетчик при нажатии на кнопку "Купить"
     */
    increaseCartIconCount() {
        +cartIconCount.innerText++;
    },

    /**
     * Функция включает или выключает отображение корзины
     */
    showHideBasket() {
        basket.classList.toggle('basket-display');
    }
}

// Назначается на все кнопки "Купить" в списке товаров
featuredImgDarkButton.forEach(button => {
    button.addEventListener('click', funcObj.onClickAddToCart.bind(funcObj));
});

// Назначается на кнопку корзины
cartIconButton.addEventListener('click', funcObj.showHideBasket.bind(funcObj));

