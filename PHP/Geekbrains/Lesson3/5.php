<?php
    // 5. Написать функцию, которая заменяет в строке пробелы на подчеркивания и возвращает видоизмененную строчку.
    function spaceReplace($str) {
        $newStrArr = mb_str_split($str);
        for($i = 0; $i < count($newStrArr); $i++){
            if($newStrArr[$i] === " ") {
                $newStrArr[$i] = "_";
            }
        }

        return implode($newStrArr);
    }

    function spaceReplace0($str) {
        $str = str_replace(" ", "_", $str);
        return $str;
    }

    function spaceReplace1($str) {
        $newStrArr = mb_str_split($str);
        foreach($newStrArr as $idx => $sim) {
            if($sim === " ") {
                $newStrArr[$idx] = "_";
            }
        }

        return implode($newStrArr);
    }

    echo spaceReplace('Привет мир!') . "<br>";
    echo spaceReplace0('Привет мир!') . "<br>";
    echo spaceReplace1('Привет мир!');
?>