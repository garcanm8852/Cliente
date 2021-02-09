<html>
<html>

<head>
  <title>Ejercicio 20 PHPYA</title>
</head>

<body>
<?php
//DATOS MYSQL
  $host = "localhost";
  $dbname = "base1";
  $username = "usuariocliente";
  $password = "YZZWKV";

//DATOS OBTENIDOS DE PAGINA1.PHP
$unombre = $_REQUEST['nombre'];
$umail = $_REQUEST['mail'];
$ucodigocurso = $_REQUEST['codigocurso'];

//CONEXION CON MYSQL Y BASE DE DATOS
$mysqli = new mysqli($host, $username, $password, $dbname);

//PREPARACION INSERT
$sentencia = $mysqli->prepare("INSERT INTO `alumnos`(`nombre`, `mail`, `codigocurso`) VALUES (?,?,?)");
$sentencia->bind_param("ssi", $unombre, $umail, $ucodigocurso);

$sentencia->execute();
?>
</body>

</html>