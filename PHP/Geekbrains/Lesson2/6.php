<?php
    // 6. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power($val, $pow), где $val – заданное число, $pow – степень.

    function power($val = 3, $pow = 3) {
        if ($pow == 1) {
            return $val;
        } else {
            --$pow;
            return $val *= power($val, $pow);
        }
    }

    // $val = $_GET['val'];
    // $pow = $_GET['pow'];

    echo power();
?>