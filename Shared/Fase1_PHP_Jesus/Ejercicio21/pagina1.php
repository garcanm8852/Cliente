<html>

<head>
  <title>Ejercicio 21 PHPYA</title>
</head>

<body>

  <?php
  // mysqli

  /**
   * ███████╗ ██████╗ ████████╗ ██████╗██╗ █████╗ 
   * ██╔════╝██╔═══██╗╚══██╔══╝██╔════╝██║██╔══██╗
   * ███████╗██║   ██║   ██║   ██║     ██║███████║
   * ╚════██║██║   ██║   ██║   ██║     ██║██╔══██║
   * ███████║╚██████╔╝   ██║   ╚██████╗██║██║  ██║
   * ╚══════╝ ╚═════╝    ╚═╝    ╚═════╝╚═╝╚═╝  ╚═╝

   * 
   */
  $host = "localhost";
  $dbname = "base1";
  $username = "usuariocliente";
  $password = "YZZWKV";

  //CONEXION CON MYSQL
  $link = mysqli_connect($host, $username, $password);
  if (mysqli_connect_errno()) {
    echo "connection error";
    exit();
  }

  //CONEXION CON LA BASE DE DATOS
  $conn = mysqli_select_db($link, $dbname);
  if (!$conn) {
    echo "error de bd";
  }

  //LLAMA AL STORED PROCEDURE
  $result = mysqli_query($link, 'call consultaAlumnos();');

  if (!$result) {
    echo "error de procedure";
    exit;
  }

  //OBTENCIÓN DE RESULTADOS
  while ($aTmp = mysqli_fetch_array($result, MYSQLI_NUM)) {
    echo "Codigo:" . $aTmp[0] . "<br>";
    echo "Nombre:" . $aTmp[1] . "<br>";
    echo "Mail:" . $aTmp[2] . "<br>";
    echo "Curso:";
    switch ($aTmp[3]) {
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
  }
  ?>

</body>

</html>