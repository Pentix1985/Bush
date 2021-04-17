'use strict';

let board = {

    field: "",
    /**
     * Данный метода отрисовывает доску и положения игрока на ней
     */
    renderBoard() {
        this.field = "<table class=\"board\">";
        // Цикл перебирает все строки, которые надо отобразить.
        for(let row = 0; row < boardFieldMaxSize.rows; row++) {
            this.field += "<tr>";

            for(let col = 0; col < boardFieldMaxSize.cols; col++) {
                if(player.y === row && player.x === col) {
                    this.field += "<td class=\"player\"></td>";
                } else {
                    this.field += "<td></td>";
                }
            }
            this.field += "</tr>";
        }
        this.field += "</table>";
        container.insertAdjacentHTML("afterbegin", this.field);
    },

    clearBoard() {
        this.field ="";
        const boardField = document.querySelector('.board');
        boardField.remove();
    }
}