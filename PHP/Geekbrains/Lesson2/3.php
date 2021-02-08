<?php
    // 3. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
    
    function addition($a,$b) {
        return $a + $b;
    }

    function subtraction($a,$b) {
        return $a - $b;
    }

    function division($a,$b) {
        return $a / $b;
    }

    function multiplication($a,$b) {
        return $a * $b;
    }

    $a = 5;
    $b = 8;

    echo addition($a,$b) . "<br>";
    echo subtraction($a,$b) . "<br>";
    echo division($a,$b) . "<br>";
    echo multiplication($a,$b) . "<br>";

?>