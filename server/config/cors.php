<?php
$allowed_origin = "https://www.ontrackcoaching.co.za";
$allowed_origin = "http://localhost:5173";

if (isset($_SERVER['HTTP_ORIGIN'])) {
    $origin = $_SERVER['HTTP_ORIGIN'];

    if ($origin === $allowed_origin) {
        header("Access-Control-Allow-Origin: $origin");
    }
} else {
    header("Access-Control-Allow-Origin: $allowed_origin");
}

header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Max-Age: 86400');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("HTTP/1.1 204 No Content");
    exit();
}
