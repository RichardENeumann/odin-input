<?php

$response = [];

if (strlen($_GET["username"]) > 7 && strlen($_GET["username"]) < 21) {
  $response["valid"] = true;
} else {
  $response["valid"] = false;
}

echo json_encode($response);
