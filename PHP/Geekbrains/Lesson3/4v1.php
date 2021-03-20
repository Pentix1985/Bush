<!-- 4. Объявить массив, индексами которого являются буквы русского языка, а значениями – соответствующие латинские буквосочетания (‘а’=> ’a’, ‘б’ => ‘b’, ‘в’ => ‘v’, ‘г’ => ‘g’, …, ‘э’ => ‘e’, ‘ю’ => ‘yu’, ‘я’ => ‘ya’).

Написать функцию транслитерации строк. -->

<?php

function translit($str, $transChars) {
    $strArr = mb_str_split($str);
        for($i = 0; $i < count($strArr); $i++) {
            foreach($transChars as $ruChar => $enChar) {
                if ($strArr[$i] === $ruChar) {
                    $strArr[$i] = $enChar;
                }
            }
        }

    return implode($strArr);
}

function translit0($str, $transChars) {
    
    return strtr($str, $transChars);
    
}

$transChars = [
    'а' => 'a',   'б' => 'b',   'в' => 'v',
    'г' => 'g',   'д' => 'd',   'е' => 'e',
    'ё' => 'e',   'ж' => 'zh',  'з' => 'z',
    'и' => 'i',   'й' => 'y',   'к' => 'k',
    'л' => 'l',   'м' => 'm',   'н' => 'n',
    'о' => 'o',   'п' => 'p',   'р' => 'r',
    'с' => 's',   'т' => 't',   'у' => 'u',
    'ф' => 'f',   'х' => 'h',   'ц' => 'c',
    'ч' => 'ch',  'ш' => 'sh',  'щ' => 'sch',
    'ь' => '\'',  'ы' => 'y',   'ъ' => '\'',
    'э' => 'e',   'ю' => 'yu',  'я' => 'ya',

    'А' => 'A',   'Б' => 'B',   'В' => 'V',
    'Г' => 'G',   'Д' => 'D',   'E' => 'E',
    'Ё' => 'E',   'Ж' => 'Zh',  'З' => 'Z',
    'И' => 'I',   'Й' => 'Y',  'К' => 'K',
    'Л' => 'L',   'M' => 'M',   'Н' => 'N',
    'О' => 'O',   'П' => 'P',   'Р' => 'R',
    'С' => 'S',   'Т' => 'T',   'У' => 'U',
    'Ф' => 'F',   'Х' => 'X',   'Ц' => 'C',
    'Ч' => 'Ch',  'Ш' => 'Sh',  'Щ' => 'Sch',
    'Ь' => '\'',  'Ы' => 'Y',   'Ъ' => '\'',
    'Э' => 'E',   'Ю' => 'Yu',  'Я' => 'Ya',
];

echo translit("Привет мир!", $transChars) . "<br>";
echo translit0("Привет мир!", $transChars);
?>