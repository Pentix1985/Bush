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
const cartIconButton = document.querySelector('.cartIconWrap');
const basket = document.querySelector('.basket');

// featured container
const featuredImgDarkButton = document.querySelectorAll('.featuredImgDark button');
const featuredItemsData = document.querySelectorAll('.featuredData');

// Объект с функциями для работы с корзиной
let funcObj = {
    /**
     * Функция назначается на все кнопки "Купить" в списке товаров
     */
    onClickAddToCart(event) {
        let productInfo = event.currentTarget.parentNode.parentNode.parentNode.children[1];
        this.increaseCartIconCount();
        this.addProductInBasket(productInfo);
        this.setTotalCount();
    },
    /**
     * Метод считает общую сумму
     */
    setTotalCount() {
        const products = document.querySelectorAll('.basket__product');
        const totalCount = document.querySelector('.basket__total-count');
        let total = 0;
        products.forEach(product => {
            total += +product.querySelector('.basket__product-amount').innerText.substr(1);
        });
        totalCount.innerText = `$ ${total.toFixed(2)}`;
    },

    /**
     * Функция добавляет товар в корзину
     */
    addProductInBasket(productInfo) {
        let product = {};
        product.name = productInfo.querySelector('.featuredName').innerText;
        product.price = +productInfo.querySelector('.featuredPrice').innerText.substr(1);
        // Проверяем есть ли товар в корзине
        if(this.isProductInBasket(product)){
            // Увеличиваем счетчик и сумму
            let itemsInBasket = document.querySelectorAll('.basket__product');
            for(let elem of itemsInBasket) {
                if(elem.querySelector('.basket__product-name').innerText === product.name) {
                    +elem.querySelector('.basket__product-count-number').innerText++;
                    elem.querySelector('.basket__product-amount').innerText = `$ ${(+elem.querySelector('.basket__product-amount').innerText.substr(1) + +elem.querySelector('.basket__product-price').innerText.substr(1)).toFixed(2)}`;
                }
            }
        } else {
            // Вставляем карточку товара
            document.querySelector('.basket__titles').insertAdjacentHTML('afterend', this.productItem(product));
        };
        
    },
    /**
     * Проверяет наличие товара в корзине
     * @param {boolean} product 
     * @returns {boolean}
     */
    isProductInBasket(product) {
        let itemsInBasket = document.querySelectorAll('.basket__product');
        for(let elem of itemsInBasket) {
            if(elem.querySelector('.basket__product-name').innerText === product.name) {
                return true;
            }
        }
        return false;
    },

    /**
     * Функция возвращает карточку товара
     */
    productItem(product) {
        return `<div class="basket__product">
                <p class="basket__product-name">${product.name}</p>
                <p class="basket__product-count"><span class="basket__product-count-number">1</span>шт.</p>
                <p class="basket__product-price">$${product.price}</p>
                <p class="basket__product-amount">$${product.price}</p>
                </div>`
    },

    /**
     * Функция увеличивает счетчик при нажатии на кнопку "Купить"
     */
    increaseCartIconCount() {
        const cartIconCount = document.querySelector('.cartIconWrap>span');
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

