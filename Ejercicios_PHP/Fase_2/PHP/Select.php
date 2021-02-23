<html>

<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
  <title>Fase 1 - Ejercicio 21 (Listado)</title>
</head>

<body>
  <div class="container bg-primary text-light rounded-bottom intro ">
    <div class="row">
      <div class="col-md-12">
        <h1>Fase 1 - Ejercicio 21 (Listado)</h1>
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
        // mysqli datos
        $host = "localhost";
        $dbname = "base1";
        $username = "consult";
        $password = "x9KbunRg3NVrGyyc";

        $conexion = mysqli_connect($host, $username, $password, $dbname) or
          die("Problemas con la conexión");

        $registros = mysqli_query($conexion, "select codigo,nombre,codigocurso
                                    from alumnos where mail='$_REQUEST[mail]'") or
          die("Problemas en el select:" . mysqli_error($conexion));

        if ($reg = mysqli_fetch_array($registros)) {
          echo "Nombre:" . $reg['nombre'] . "<br>";
          echo "Curso:";
          switch ($reg['codigocurso']) {
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
        } else {
          echo "No existe un alumno con ese mail.";
        }
        mysqli_close($conexion);
        ?>

      </div>
    </div>
  </div>
</body>

</html>