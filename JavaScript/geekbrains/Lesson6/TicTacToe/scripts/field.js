'use strict';

let field = {

    renderField() {
        let field = document.querySelector('.field');
        
        for(let i = 0; i < fieldSize.x; i++) {
            for(let j = 0; j < fieldSize.y; j++) {
                let square = `<div class="square" data-x="x${i}" data-y="${j}"></div>`;
                field.insertAdjacentHTML('beforeend', square);
            }
        }
    },

    resetField() {
        let squares = document.querySelectorAll('.square');

        squares.forEach((square) => {
            square.innerHTML = '';
        });

    },
}