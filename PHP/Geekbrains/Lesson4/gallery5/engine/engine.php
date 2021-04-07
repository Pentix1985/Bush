<?php
    /**
     * Функция считывает список файлов и строит фотогалерею со ссылками
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
?>