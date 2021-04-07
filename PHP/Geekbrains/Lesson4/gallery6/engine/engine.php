<?php
    /**
     * Функция считывает список файлов и строит фотогалерею со ссылками
     * 
     */
    function imgBuild($bigImgPath, $smallImgPath) {
        $bigImages = scandir($bigImgPath);
        $smallImages = scandir($smallImgPath);

        $imgLinks = "";
        for($i = 2; $i < count($bigImages); $i++) {
            $imgLinks .= "<a data-fancybox=\"gallery\" class=\"gallery\" href=\"$bigImgPath" . "$bigImages[$i]\"><img src=\"$smallImgPath" . "$smallImages[$i]\"></a>";
        }

        return $imgLinks;
            
    }

    /**
     * Функция изменяет размеры изображения$w_o и h_o - ширина и высота выходного изображения
     */
    
    function resize($image, $w_o = false, $h_o = false) {
        if (($w_o < 0) || ($h_o < 0)) {
            echo "Некорректные входные параметры";
            return false;
        }

        list($w_i, $h_i, $type) = getimagesize($image); // Получаем размеры и тип изображения (число)
        $types = array("", "gif", "jpeg", "png"); // Массив с типами изображений
        $ext = $types[$type]; // Зная "числовой" тип изображения, узнаём название типа

        if ($ext) {
            $func = 'imagecreatefrom'.$ext; // Получаем название функции, соответствующую типу, для создания изображения
            $img_i = $func($image); // Создаём дескриптор для работы с исходным изображением
        } else {
            echo 'Некорректное изображение'; // Выводим ошибку, если формат изображения недопустимый
            return false;
        }

        if (!$h_o) $h_o = $w_o / ($w_i / $h_i);
        if (!$w_o) $w_o = $h_o / ($h_i / $w_i);

        $img_o = imagecreatetruecolor($w_o, $h_o); // Создаём дескриптор для выходного изображения
        imagecopyresampled($img_o, $img_i, 0, 0, 0, 0, $w_o, $h_o, $w_i, $h_i); // Переносим изображение из исходного в выходное, масштабируя его
        $func = 'image'.$ext; // Получаем функция для сохранения результата

        return $func($img_o, $image); // Сохраняем изображение в тот же файл, что и исходное, возвращая результат этой операции
    }

    // resize("image.jpg", 100); // Вызываем функцию
?>