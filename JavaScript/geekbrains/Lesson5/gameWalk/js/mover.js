'use strict';

let mover = {

    // Клавиши на Нумпаде, направления
    availableDirections: [1, 2, 3, 4, 6, 7, 8, 9],

    /**
     * Функция для приема поступившего направления
     * @param {Number} numDir принимает на вход число из доступных направлений  availableDirections
     * @returns Возвращает объект с координатми
     */
    getDirection(numDir) {
        let nextPoint = {
            x: player.x,
            y: player.y,
        };

        switch(numDir) {
            case 1:
                nextPoint.x--;
                nextPoint.y++;
                break;
            case 2:
                nextPoint.y++;
                break;
            case 3:
                nextPoint.x++;
                nextPoint.y++;
                break;
            case 4:
                nextPoint.x--;
                break;
            case 6:
                nextPoint.x++;
                break;
            case 7:
                nextPoint.x--;
                nextPoint.y--;
                break;
            case 8:
                nextPoint.y--;
                break;
            case 9:
                nextPoint.x++;
                nextPoint.y--;
                break;
        }
        
        return nextPoint;
    },

    /**
     * Функция проверяет возможность хода игрока в указанном направлении
     * @param {Object} nextPoint объект с направлениями полученый из функции getDirection
     * @returns true или false в зависимости от результата проверки
     */
    canPlayerMakeStep(nextPoint) {
        return nextPoint.x >= 0 && 
               nextPoint.y >= 0 && 
               nextPoint.x < boardFieldMaxSize.rows &&
               nextPoint.y < boardFieldMaxSize.cols;
    },

    /**
     * Функция удаляет положение игрока из текущей ячейки, путем удаления класса player
     */
    clearPlayerPosition() {
        let boardField = document.querySelector('.board');
        let boardBody = boardField.querySelector('tbody');
        let allTd = boardBody.querySelectorAll('td');
        
        allTd.forEach((td) => {
            if(td.classList.contains('player')) {
                td.classList.remove('player');
                return;
            }
        });
    },

    /**
     * Функция добавляет игрока в ячейку птем добавления класса player
     */
    setPlayerPosition() {
        let boardField = document.querySelector('.board');
        let boardBody = boardField.querySelector('tbody');
        let allTd = boardBody.querySelectorAll('td');

        allTd.forEach((td) => {
            let tdX = td.getAttribute('data-x');
            let tdY = td.getAttribute('data-y');

            if(player.x === Number(tdY) && player.y === Number(tdX)) {
                td.classList.add('player');
                return;
            }
        });

    },
}

