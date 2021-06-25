'use strict';

let field = {
    /**
     * Метод отрисовывает поле для игры
     */
    renderField() {
        let field = document.querySelector('.field');
        
        for(let i = 0; i < fieldSize.x; i++) {
            for(let j = 0; j < fieldSize.y; j++) {
                let square = `<div class="square" data-x="x${i}" data-y="${j}"></div>`;
                field.insertAdjacentHTML('beforeend', square);
            }
        }
    },

    /**
     * Метод очищает поле от символов в ячейках и устанавливает первым игроком "Х"
     */
    resetField() {
        let squares = document.querySelectorAll('.square');

        squares.forEach((square) => {
            square.innerHTML = '';
        });

        game.сurrentPlayer = simbols.x;

    },

    /**
     * Метод добавляет обработчик события для кнопки "Начать игру"
     * @param {Boolean} status статус возможности играть 
     */
    startBtnClicker(status) {
        let startBtn = document.querySelector('.start-btn');

        startBtn.addEventListener('click', (event) => {
            if(status) {
                game.run(event);
                game.status = false;
            } else {
                field.resetField();
                game.status = true;
            }
        });
    },
    // isEmptySquares() {

    //     let squares = document.querySelectorAll('.square');

    //     squares.forEach((square) => {
    //         if(square.innerHTML === '')
    //         return true;
    //     });
        
    // }
}