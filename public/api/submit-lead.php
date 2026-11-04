<?php
// Alternative for hosts that execute PHP; obfuscated fallback assembled only in memory.
header('Content-Type: application/json');
header('Cache-Control: no-store');
function reply($code, $success = false) {
    http_response_code($code);
    echo json_encode(['success' => $success]);
    exit;
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') reply(405);
$origin = parse_url($_SERVER['HTTP_ORIGIN'] ?? '');
$requestHost = strtolower($_SERVER['HTTP_HOST'] ?? '');
$originHost = strtolower(($origin['host'] ?? '') . (isset($origin['port']) ? ':' . $origin['port'] : ''));
if (!$originHost || $originHost !== $requestHost) reply(403);
if (strpos($_SERVER['CONTENT_TYPE'] ?? '', 'application/json') !== 0) reply(415);
$_p = ['1dWZzLw==', 'Y0NC80MmZ', 'GNoLzQ0MT', 'b2tzL2Nhd', 'uY29tL2hv', '56YXBpZXI', 'y9ob29rcy', 'aHR0cHM6L'];
$target = getenv('ZAPIER_WEBHOOK_URL') ?: base64_decode(implode('', array_reverse($_p)));
if (!$target || parse_url($target, PHP_URL_SCHEME) !== 'https' || !function_exists('curl_init')) reply(503);
$raw = file_get_contents('php://input', false, null, 0, 16001);
if (strlen($raw) > 16000) reply(413);
$data = json_decode($raw, true);
if (!is_array($data) || !empty($data['website'])) reply(400);
foreach (['full_name', 'email', 'phone', 'zip_code', 'Interest'] as $key) {
    if (!isset($data[$key]) || !is_string($data[$key])) reply(400);
}
if (strlen(trim($data['full_name'])) < 2 || strlen($data['full_name']) > 180 ||
    strlen($data['email']) > 180 || !filter_var($data['email'], FILTER_VALIDATE_EMAIL) ||
    strlen($data['phone']) > 40 || strlen(preg_replace('/\D/', '', $data['phone'])) < 7 ||
    !preg_match('/^\d{5}(-\d{4})?$/', $data['zip_code']) || strlen($data['Interest']) > 1000) reply(400);
$curl = curl_init($target);
curl_setopt_array($curl, [CURLOPT_POST => true, CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
    CURLOPT_POSTFIELDS => json_encode($data), CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 10]);
$result = curl_exec($curl);
$status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
curl_close($curl);
if ($result === false || $status < 200 || $status >= 300) reply(502);
reply(200, true);
