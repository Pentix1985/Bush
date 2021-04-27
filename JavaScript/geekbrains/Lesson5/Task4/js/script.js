'use strict';

let btn = document.querySelectorAll('.btn');

btn.forEach((button) => {
    button.addEventListener('click', (event) => {
        let btn = event.target;

        if(btn.innerText === "Подробнее") {
            btn.innerText = "Отмена";
            btn.parentNode.querySelector('img').style.display = "none";
            btn.parentNode.querySelector('.description').style.display = "block";
        } else {
            btn.innerText = "Подробнее";
            btn.parentNode.querySelector('img').style.display = "block";
            btn.parentNode.querySelector('.description').style.display = "none";
        }


        
    });
});
