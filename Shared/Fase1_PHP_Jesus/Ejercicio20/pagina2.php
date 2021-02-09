<html>

<head>
  <title>Fase 1 - Ejercicio 20</title>
</head>

<body>
<?php
  $host = "localhost";
  $dbname = "base1";
  $username = "usuariocliente";
  $password = "YZZWKV";

$unombre = $_REQUEST['nombre'];
$umail = $_REQUEST['mail'];
$ucodigocurso = $_REQUEST['codigocurso'];

$mysqli = new mysqli($host, $username, $password, $dbname);

//PREPARACION INSERT
$sentencia = $mysqli->prepare("INSERT INTO `alumnos`(`nombre`, `mail`, `codigocurso`) VALUES (?,?,?)");
$sentencia->bind_param("ssi", $unombre, $umail, $ucodigocurso);

$sentencia->execute();
?>
</body>
</html>