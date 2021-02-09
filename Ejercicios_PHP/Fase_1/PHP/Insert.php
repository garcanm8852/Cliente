<html>

<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
  <title>Fase 1 - Ejercicio 20</title>
</head>

<body>
  <div class="container bg-primary text-light rounded-bottom intro ">
    <div class="row">
      <div class="col-md-12">
        <h1>Fase 1 - Ejercicio Insert - Respuesta</h1>
        <h2>Manuel Jesús García de Quirós Cánovas</h2>
        <h3>10 de Febrero de 2021</h3>
        <p></p>
      </div>
    </div>
  </div>

  <div class="container intro bg-success text-white mt-5 rounded p-3">
    <div class="row">
      <div class="col-md-12">
        <h2>La operación se ha realizado correctamente.</h2>
        <h3>Datos del usuario insertado</h3>
        <?php

        $host = "localhost";
        $dbname = "base1";
        $username = "insert";
        $password = "5dBNNMY8vXdd8ZDn";

        $unombre = $_REQUEST['nombre'];
        $umail = $_REQUEST['mail'];
        $ucodigocurso = $_REQUEST['codigocurso'];

        $mysqli = new mysqli($host, $username, $password, $dbname);

        $sentencia = $mysqli->prepare("INSERT INTO `alumnos`(`nombre`, `mail`, `codigocurso`) VALUES (?,?,?)");
        $sentencia->bind_param("ssi", $unombre, $umail, $ucodigocurso);

        $sentencia->execute();

        print "<p>Nombre: " . $unombre . "</p>";
        print "<p>Correo Eletrónico: " . $umail . "</p>";
        print "<p>Código del curso: " . $ucodigocurso . "</p>";

        ?>
      </div>
    </div>
  </div>
</body>

</html>