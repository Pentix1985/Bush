<?php
    include("config/config.php");
    include("engine/engine.php");
?>

<main>
    <?php
        echo imgBuild($bigImagesFolder, $smallImageFolder);
    ?>
</main>