<?php
    // 4. Реализовать функцию с тремя параметрами: function mathOperation($arg1, $arg2, $operation), где $arg1, $arg2 – значения аргументов, $operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).

    function addition($arg1,$arg2) {
        return $arg1 + $arg2;
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

    function mathOperation($arg2 = 2, $arg1 = 3, $operation = "*") {
        switch($operation) {
            case "+":
                return addition($arg1,$arg2);
            case "-":
                return subtraction($arg1,$arg2);
            case "/":
                return division($arg1,$arg2);
            case "*":
                return multiplication($arg1,$arg2);
        }
    }

    $arg1 = $_GET["arg1"];
    $arg2 = $_GET["arg2"];
    $operation = $_GET["operation"];

    echo mathOperation($arg1, $arg2, $operation);
?>