<?php

$response = [];

if (strlen($_GET["username"]) >= 8 || strlen($_GET["username"] <= 20)) {
  $response["valid"] = true;
  
} else {
  $response["valid"] = false;
}

echo json_encode($response);