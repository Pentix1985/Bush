<?php
    /**
     * 2. *Строить фотогалерею, не указывая статичные ссылки к файлам, а просто передавая в функцию построения адрес папки с изображениями. Функция сама должна считать список файлов и построить фотогалерею со ссылками в ней.
     * Функция считывает список файлов и строит фотогалерею со ссылками
     */
    function imgBuild($imgPath) {
        $images = scandir($imgPath);

        $imgLinks = "";
        for($i = 2; $i < count($images); $i++) {
            $imgLinks .= "<a href=\"$imgPath" . "$images[$i]\" target=\"_blank\"><img src=\"$imgPath" . "$images[$i]\"></a>";
        }

        return $imgLinks;
            
    }
?>