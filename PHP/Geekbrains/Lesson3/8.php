<?php
    // 8. *Повторить третье задание, но вывести на экран только города, начинающиеся с буквы «К».
    $regionAndCitys = [
        'Московская область' => ['Зеленоград', 'Москва', 'Клин', 'Карповск'],
        'Ленинградская область' => ['Санкт-Петербург', 'Всеволжск', 'Павловск', 'Кронштадт'],
        'Рязанская область' => ['Рязань', 'Искра', 'Листвянка', 'Кустья'],
    ];

    function onlyK($arr) {
        foreach($arr as $region => $cites) {
            echo "$region: <br>";
            foreach($cites as $idx => $cityName) {
                if(mb_substr($cityName, 0, 1) === "К") {
                    echo "$cityName,";
                }
            }
            echo "<br><br>";
        }
    }

    function onlyK0($arr) {
        $str = "";
        foreach($arr as $region => $cities) {
            $str .= "$region: <br>";
            foreach($cities as $idx => $cityCall) {
                if(mb_substr($cityCall, 0, 1) === "К") {
                    $str .= "$cityCall, ";
                }
            }
            // $str = substr_replace($str, ".", strlen($str) - 2) . "<br><br>";
            $str = rtrim($str, ", ");
            $str .= ".<br><br>";
        }   
        echo $str;
    }
    
    onlyK0($regionAndCitys);
    echo "<hr>";
    onlyK($regionAndCitys);