<?php
    $aMyData = array("name" => "hello");
    $aMyData["zsurname"] = "bye";
    $aMyData["abc"] = "bye";

    $endValue = end(array_keys($aMyData));
    echo $endValue;

    phpinfo();;
?>