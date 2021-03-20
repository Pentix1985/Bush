<?php
// 5. Написать функцию, которая заменяет в строке пробелы на подчеркивания и возвращает видоизмененную строчку.

function changeSpace($str) {
    return str_replace(" ", "_", $str);
}

function changeSpace0($str) {
    $newStrArr = str_split($str);

    foreach($newStrArr as $idx => $char) {
        if($char === " ") {
            $newStrArr[$idx] = "_";
        }
    }

    return implode("", $newStrArr);
}

$str = "Привет мир!";

echo changeSpace($str) . "<br>";
echo changeSpace0($str);

?>