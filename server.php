<?php
$string = file_get_contents("store.json");

$list = json_decode($string, true);

var_dump($list);

header('Content-Type: application/json');

echo json_encode($list);
