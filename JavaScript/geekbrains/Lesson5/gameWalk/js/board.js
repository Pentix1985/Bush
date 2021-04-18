'use strict';

let board = {

    field: "",
    /**
     * Данный метода отрисовывает доску
     */
    renderBoard() {
        this.field = "<table class=\"board\">";
        // Цикл перебирает все строки, которые надо отобразить.
        for(let row = 0; row < boardFieldMaxSize.rows; row++) {
            this.field += "<tr>";
            // Цикл перебирает все ячейки, которые надо отобразить.
            for(let col = 0; col < boardFieldMaxSize.cols; col++) {
                this.field += `<td data-y="${col}" data-x="${row}"></td>`;
            }
            this.field += "</tr>";
        }
        this.field += "</table>";
        container.insertAdjacentHTML("afterbegin", this.field);
    },

    /**
     * Данный метод очищал доску, но за ненадобностью был исключен
     */
    // clearBoard() {
    //     this.field ="";
    //     const boardField = document.querySelector('.board');
    //     boardField.remove();
    // }
}