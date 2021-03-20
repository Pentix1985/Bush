<?php
    // 8. *Повторить третье задание, но вывести на экран только города, начинающиеся с буквы «К».
    $regionAndCitys = [
        'Московская область' => ['Зеленоград', 'Москва', 'Клин'],
        'Ленинградская область' => ['Санкт-Петербург', 'Всеволжск', 'Павловск', 'Кронштадт'],
        'Рязанская область' => ['Рязань', 'Искра', 'Листвянка'],
    ];

    function onlyK($arr) {
        foreach($arr as $region => $cites) {
            echo "$region: <br>";
            foreach($cites as $idx => $cityName) {
                if(mb_substr($cityName, 0, 1) === "К") {
                    echo "$cityName <br><br>";
                }
            }
        }
    }
    

    onlyK($regionAndCitys);