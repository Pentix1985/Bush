<!-- 5. *Используя только две переменные, поменяйте их значение местами. Например, если a = 10, b = 20, надо, чтобы получилось: b = 10, a = 20. Дополнительные переменные использовать нельзя. -->

<?php
    $a = 21;
    $b = 5;
    
    $a = $a + $b;
    $b = $a - $b;
    $a = $a - $b;

    echo("\$a = $a, \$b = $b");
?>