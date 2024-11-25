<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');


$host = "localhost";
$user = "root";
$pass = "";
$db = "setgo";

// Koneksi ke database
$koneksi = mysqli_connect($host, $user, $pass, $db);

if (!$koneksi) {
    die(json_encode(['error' => 'Gagal Koneksi ke Database']));
}

// Mendapatkan nilai parameter 'op'
$op = $_GET['op'] ?? '';

switch ($op) {
    case 'create':
        create();
        break;
    default:
        echo json_encode(['error' => 'Operasi tidak dikenali']);
}

// Fungsi untuk registrasi
function create()
{
    global $koneksi;

    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Validasi input
    $hasil = "Gagal Melakukan Registrasi";

    if ($username && $email && $password) {
        // Query untuk insert data
        $sqli = "INSERT INTO login(username, email, passwords) VALUES('$username', '$email', '$password')";
        $q1 = mysqli_query($koneksi, $sqli);

        if ($q1) {
            $hasil = "Berhasil Melakukan Registrasi";
        } else {
            $hasil = "Gagal Melakukan Registrasi: " . mysqli_error($koneksi);
        }
    } else {
        $hasil = "Semua field harus diisi.";
    }

    $data['data']['result'] = $hasil;
    echo json_encode($data);
}
