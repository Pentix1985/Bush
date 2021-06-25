'use strict';

let game = {

    сurrentPlayer: simbols.x,
    status: true,

    /**
     * Метод отрисовывает поле и добавляет обработчик события для кнопки "Начать игру"
     */
    init() {
        field.renderField();
        field.startBtnClicker(this.status);       
    },

    /**
     * Метод в котором происходит игра
     */
    run() {
        // let field = document.querySelector('.field');
        // let curPlayerBlock = document.querySelector('.cur-player');

        // field.addEventListener('mouseout', (evt) => {
        //     curPlayerBlock.style.display = 'none';
        // });

        // field.addEventListener('mouseover', (evt) => {
        //     curPlayerBlock.style.display = 'block';
        // });

        // field.addEventListener('mousemove', (evt) => {
        //     curPlayerBlock.style.top = evt.clientY + 10 + 'px';
        //     curPlayerBlock.style.left = evt.clientX + 10 + 'px';
        // });

        let squares = document.querySelectorAll('.square');
        squares.forEach((square) => {
            square.addEventListener('click', () => {
                if(square.innerHTML === '') {
                    square.insertAdjacentHTML("afterbegin", `${this.сurrentPlayer}`);
                    // curPlayerBlock.insertAdjacentHTML("afterbegin", `${this.сurrentPlayer}`);
                }
    
                if(player.isPlayerWin(this.сurrentPlayer)) {
                    setTimeout(() => {
                        alert(`Won!`);
                        setTimeout(field.resetField(), 10);
                    }, 10);
                } else if(player.isDraw(this.сurrentPlayer)) {
                    setTimeout(() => {
                        alert(`Nichya!`);
                        setTimeout(field.resetField(), 10);
                    }, 10);
                } else {
                    player.switchPlayer();
                }

            });
        });
        // curPlayerBlock.insertAdjacentHTML("afterbegin", `${this.сurrentPlayer}`);        
    },
}

game.init();