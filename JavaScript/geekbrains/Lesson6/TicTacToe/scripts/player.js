const player = {

    /**
     * Функция проверяет выйграл ли игрок
     * @param {String} curPlayer Текущий игрок
     * @returns Boolean
     */
    isPlayerWin(curPlayer) {
        let squares = document.querySelectorAll('.square');

        if( 
            (squares[0].innerHTML === curPlayer && squares[1].innerHTML === curPlayer && squares[2].innerHTML === curPlayer) ||
            (squares[3].innerHTML === curPlayer && squares[4].innerHTML === curPlayer && squares[5].innerHTML === curPlayer) ||
            (squares[6].innerHTML === curPlayer && squares[7].innerHTML === curPlayer && squares[8].innerHTML === curPlayer) ||
            (squares[0].innerHTML === curPlayer && squares[3].innerHTML === curPlayer && squares[6].innerHTML === curPlayer) ||
            (squares[1].innerHTML === curPlayer && squares[4].innerHTML === curPlayer && squares[7].innerHTML === curPlayer) ||
            (squares[2].innerHTML === curPlayer && squares[5].innerHTML === curPlayer && squares[8].innerHTML === curPlayer) ||
            (squares[0].innerHTML === curPlayer && squares[4].innerHTML === curPlayer && squares[8].innerHTML === curPlayer) ||
            (squares[2].innerHTML === curPlayer && squares[4].innerHTML === curPlayer && squares[6].innerHTML === curPlayer)
            ) {
                return true;
            }
    },

    /**
     * Функция меняет игрока с "X" на "О"
     */
    switchPlayer() {
        game.сurrentPlayer === simbols.x ? game.сurrentPlayer = simbols.o : game.сurrentPlayer = simbols.x;
    },

    isDraw() {
        let squares = document.querySelectorAll('.square');
        return [...squares].every(this.isNotEmpty);
    },

    isNotEmpty(square) {
        return square.innerHTML !== "";
    },
}