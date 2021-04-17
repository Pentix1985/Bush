'use strict';

let game = {
    run() {
        btn.style.display = "none";
        window.addEventListener('keyup', (eventC) => {
            if(mover.availableDirections.includes(Number(eventC.key))) {
                let nextPointToMove = mover.getDirection(Number(eventC.key));
                if (mover.canPlayerMakeStep(nextPointToMove)) {
                    player.x = nextPointToMove.x;
                    player.y = nextPointToMove.y;
                }
                board.clearBoard();
                board.renderBoard();
            }
            eventC.stopPropagation();
        });
    },

    init() {
        board.renderBoard();
        btn.addEventListener('click', (event) => {
            game.run();
        });
    },
}

game.init();