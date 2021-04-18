'use strict';

let game = {

    /**
     * Данный метод запускает игру
     */
    run() {
        btn.style.display = "none";
        // Добавили слушатель события, нажатие клавиши
        window.addEventListener('keyup', (eventC) => {
            if(mover.availableDirections.includes(Number(eventC.key))) {


                let nextPointToMove = mover.getDirection(Number(eventC.key));
                if (mover.canPlayerMakeStep(nextPointToMove)) {
                    player.x = nextPointToMove.x;
                    player.y = nextPointToMove.y;
                }
            }
            mover.clearPlayerPosition();
            mover.setPlayerPosition();
            eventC.stopPropagation();
        });
        mover.setPlayerPosition();
    },

    /**
     * Данный запускает отрисовывание доски и добавляет слушатель события на кнопку
     */
    init() {
        board.renderBoard();
        btn.addEventListener('click', (event) => {
            game.run();
        });
    },
}

game.init();