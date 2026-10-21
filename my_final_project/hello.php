<?php
header('Content-Type: application/json; charset=utf-8');

$action = $_GET['action'] ?? '';

if ($_SERVER['REQUEST_METHOD'] === 'GET' && $action === 'projects') {
	$data = file_get_contents(__DIR__ . '/data.txt');
	$projects = json_decode($data, true);

	if (!is_array($projects)) {
		http_response_code(500);
		echo json_encode(['message' => 'Project data is unavailable.']);
		exit;
	}

	echo json_encode($projects);
	exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $action === 'contact') {
	$input = json_decode(file_get_contents('php://input'), true);
	$name = trim($input['name'] ?? '');
	$email = trim($input['email'] ?? '');
	$message = trim($input['message'] ?? '');

	if ($name === '' || $email === '' || $message === '') {
		http_response_code(400);
		echo json_encode(['message' => 'Please complete every field.']);
		exit;
	}

	if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		http_response_code(400);
		echo json_encode(['message' => 'Please enter a valid email address.']);
		exit;
	}

	echo json_encode(['message' => "Thanks, {$name}. Your note is on its way."]);
	exit;
}

http_response_code(404);
echo json_encode(['message' => 'The requested action was not found.']);
?>
