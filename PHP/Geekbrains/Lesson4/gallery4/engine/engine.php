<?php
    /**
     * Функция считывает список файлов и строит фотогалерею со ссылками
     */
    function imgBuild($imgPath) {
        $images = scandir($imgPath);

        $imgLinks = "";
        for($i = 2; $i < count($images); $i++) {
            $imgLinks .= "<a data-fancybox=\"gallery\" class=\"gallery\" href=\"$imgPath" . "$images[$i]\"><img src=\"$imgPath" . "$images[$i]\"></a>";
        }

        return $imgLinks;
            
    }
?>