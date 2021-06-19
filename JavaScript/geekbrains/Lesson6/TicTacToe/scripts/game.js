'use strict';

let game = {
    init() {
        let condition = true;
        field.renderField()
        let startBtn = document.querySelector('.start-btn');
        startBtn.addEventListener('click', (event) => {
            if(condition) {
                game.run(event);
                condition = false;
            } else {
                field.resetField();
                condition = true;
            }
        });
    },

    run(event) {
        let сurrentPlayer = 'X';
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
                    square.insertAdjacentHTML("afterbegin", `<p>${сurrentPlayer}</p>`);
                }
            });
        });
    }
}

game.init();