const player = {

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
            ) 
            {
                alert(`Pobeda!`);
                field.resetField();
                game.сurrentPlayer = simbols.x;
            }

        return true;
    }

}