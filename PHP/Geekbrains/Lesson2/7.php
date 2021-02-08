<?php
    // 7. *Написать функцию, которая вычисляет текущее время и возвращает его в формате с правильными склонениями, например: 22 часа 15 минут, 21 час 43 минуты.

    $hours = 101; //date('H');
    $minutes = 5; //date('i');

    function correctTime($hours, $minutes) {
        if (floor($hours / 10) % 10 === 1) {
            echo "$hours часов";
        } else {
            switch ($hours % 10) {
                case 0;
                case 5;
                case 6;
                case 7;
                case 8;
                case 9:
                    echo "$hours часов ";
                    break;
                case 1;
                    echo "$hours час ";
                    break;
                case 2;
                case 3;
                case 4;
                    echo "$hours часа ";
                    break;
                default:
                    echo "Время задано неверно";
            }
        }
    
        if (floor($minutes / 10) % 10 === 1) {
            echo "$minutes минут";
        } else {
            switch ($minutes % 10) {
                case 0;
                case 5;
                case 6;
                case 7;
                case 8;
                case 9:
                    echo "$minutes минут ";
                    break;
                case 1;
                    echo "$minutes минута ";
                    break;
                case 2;
                case 3;
                case 4;
                    echo "$minutes минуты ";
                    break;
                default:
                    echo "Время задано неверно";
            }
        }
    }

    correctTime($hours, $minutes);
?>