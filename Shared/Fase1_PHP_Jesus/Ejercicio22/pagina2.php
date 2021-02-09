<html>

<head>
  <title>Ejercicio 22 PHPYA</title>
</head>

<body>
  <?php
// mysqli datos
$host = "localhost";
$dbname = "base1";
$username = "usuariocliente";
$password = "YZZWKV";

//DATOS OBTENIDOS DE PAGINA1.PHP
$emailbusca = $_REQUEST['mail'];

//CONEXION CON MYSQL y BASE DE DATOS
$mysqli = new mysqli($host, $username, $password, $dbname);
if ($mysqli->connect_errno) {
    echo "Falló la conexión a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

//LLAMA AL STORED PROCEDURE
$sentencia = $mysqli->prepare("call consultaAlumno(?)");
$sentencia->bind_param("s", $emailbusca);
$sentencia->execute();
$arr = $sentencia -> get_result();
if($fila = $arr -> fetch_assoc()){
    echo "Codigo:" . $fila['nombre'] . "<br>";
    echo "Nombre:" . $fila['mail'] . "<br>";
    echo "Curso:";
    switch ($fila['codigocurso']) {
        case 1:
          echo "PHP";
          break;
        case 2:
          echo "ASP";
          break;
        case 3:
          echo "JSP";
          break;
      }
    echo "<br>";
    echo "<hr>";
}else{
    echo "No existe un alumno con ese mail.";
}

  ?>
</body>

</html>