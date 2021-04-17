'use strict';

let mover = {
    availableDirections: [1, 2, 3, 4, 6, 7, 8, 9],

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

    canPlayerMakeStep(nextPoint) {
        return nextPoint.x >= 0 && 
               nextPoint.y >= 0 && 
               nextPoint.x < boardFieldMaxSize.rows &&
               nextPoint.y < boardFieldMaxSize.cols;
    }
}

