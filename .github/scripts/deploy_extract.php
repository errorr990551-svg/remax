<?php
// Hostinger Zip Auto-Extractor for Remax Forge
set_time_limit(300);
ini_set('memory_limit', '512M');
error_reporting(E_ALL);
ini_set('display_errors', 1);

$secret = '__SECRET_TOKEN__';
$token = isset($_GET['token']) ? $_GET['token'] : '';

if (empty($token) || $token !== $secret) {
    http_response_code(403);
    die('ERROR: Unauthorized - Invalid or missing token.');
}

$targetDir = __DIR__;
$zipFile = $targetDir . '/deploy.zip';

if (!file_exists($zipFile)) {
    http_response_code(404);
    die('ERROR: deploy.zip not found in ' . $targetDir);
}

if (!class_exists('ZipArchive')) {
    http_response_code(500);
    die('ERROR: PHP ZipArchive extension is not enabled on this server.');
}

$zip = new ZipArchive();
$res = $zip->open($zipFile);

if ($res === TRUE) {
    $extracted = $zip->extractTo($targetDir);
    $zip->close();

    if ($extracted) {
        // Auto-cleanup: remove temporary zip and this extractor script
        @unlink($zipFile);
        @unlink(__FILE__);
        echo "DEPLOY_SUCCESS: Files extracted and temporary deploy files deleted successfully!";
        exit;
    } else {
        http_response_code(500);
        die('ERROR: Failed to extract files from archive.');
    }
} else {
    http_response_code(500);
    die('ERROR: ZipArchive open failed with error code: ' . $res);
}
?>
