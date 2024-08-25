<?php

require_once '../config/cors.php';
require_once '../config/database-connector.php';

$conn = new DatabaseConnector();
$conn = $conn->getConnection();

function utf8ize($d)
{
    if (is_array($d)) {
        foreach ($d as $k => $v) {
            $d[$k] = utf8ize($v);
        }
    } else if (is_string($d)) {
        return utf8_encode($d);
    }
    return $d;
}

$provinceMapping = [
    'EC' => 'Eastern Cape',
    'FS' => 'Free State',
    'GP' => 'Gauteng',
    'GT' => 'Gauteng',
    'KZN' => 'KwaZulu-Natal',
    'LP' => 'Limpopo',
    'MP' => 'Mpumalanga',
    'NC' => 'Northern Cape',
    'NW' => 'North-West',
    'WC' => 'Western Cape',
];

$searchTerm = isset($_GET['query']) ? mysqli_real_escape_string($conn, $_GET['query']) : '';

$sql = "SELECT id, province, institution_name, sector, phase, street_address, suburb, no_fee_school, quintile 
        FROM za_schools_list_2021 
        WHERE institution_name LIKE '%$searchTerm%'";

$result = mysqli_query($conn, $sql);
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);

$processedData = [];
foreach ($data as $row) {
    if (array_key_exists($row['province'], $provinceMapping)) {
        $row['province'] = $provinceMapping[$row['province']];
    }

    $quintile = $row['quintile'];
    if (stripos($quintile, 'not applicable') !== false || $quintile === 'N/A') {
        $row['quintile'] = 'N/A';
    } else {
        $quintile = intval($quintile);
        $row['quintile'] = ($quintile >= 1 && $quintile <= 5) ? $quintile : 'N/A';
    }

    $processedData[] = $row;
}

echo json_encode(utf8ize($processedData));
mysqli_close($conn);