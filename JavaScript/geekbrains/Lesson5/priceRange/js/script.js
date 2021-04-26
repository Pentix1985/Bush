'use strict';

let products = document.querySelectorAll('.product');

$(".js-range-slider").ionRangeSlider({
    type: "double",
        min: 0,
        max: 100000,
        from: 0,
        to: 100000,
        grid: true,

        onFinish: function (data) {
            // Called then action is done and mouse is released
            data.from
            data.to
            products.forEach((product) => {
                if(product.querySelector('.price').innerText.trim() < data.from || product.querySelector('.price').innerText.trim() > data.to) {
                    product.style.display = "none";
                } else {
                    product.style.display = "inline-block";
                }
            });
        },
});