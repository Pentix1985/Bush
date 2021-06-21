'use strict';

let game = {

    сurrentPlayer: simbols.x,

    init() {
        let canPlay = true;
        field.renderField()
        let startBtn = document.querySelector('.start-btn');
        startBtn.addEventListener('click', (event) => {
            if(canPlay) {
                game.run(event);
                canPlay = false;
            } else {
                field.resetField();
                this.сurrentPlayer = simbols.x;
            }
                
                
        });
    },

    run(event) {
        let field = document.querySelector('.field');
        let curPlayerBlock = document.querySelector('.cur-player');

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
            square.addEventListener('click', (event) => {
                if(square.innerHTML === '') {
                    square.insertAdjacentHTML("afterbegin", `${this.сurrentPlayer}`);
                    curPlayerBlock.innerHTML = '';
                    
                    // if(!field.isEmptySquares()) {
                    //     alert(`Ничья!`);
                    //     field.resetField();
                    //     this.сurrentPlayer = simbols.x;
                    // };
                    
                }
                // player.isPlayerWin(this.сurrentPlayer);
            if(this.сurrentPlayer === simbols.x) {
                this.сurrentPlayer = simbols.o;
            } else {
                this.сurrentPlayer = simbols.x;
            }
            curPlayerBlock.insertAdjacentHTML("afterbegin", `${this.сurrentPlayer}`);
            });
        });
    }
}

game.init();