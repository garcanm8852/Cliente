<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <title>Método Delete</title>
</head>

<body>
    <div class="container bg-primary text-light rounded-bottom intro ">
        <div class="row">
            <div class="col-md-12">
                <h1>Fase 2 - Ejercicio 23 (Delete)</h1>
                <h2>Manuel Jesús García de Quirós Cánovas</h2>
                <h3>26 de Febrero de 2021</h3>
                <p></p>
            </div>
        </div>
    </div>

    <?php

    // mysqli datos
    $host = "localhost";
    $dbname = "base1";
    $username = "delete";
    $password = "IDsGTyOVoqEBU2BN";
    $mail = $_REQUEST["mail"];
    $sentencia = "call eliminarAlumno('$mail')";

    $conexion = mysqli_connect($host, $username, $password, $dbname) or
        die("Ha ocurrido un problema al establecer la conexión con el servidor.");
    /*Control de errores
    * Fallo en la conexión.
    */
    if (mysqli_connect_errno()) {
        echo "Error en la conexión.";
        exit();
    }
    /*Control de errores
    * Fallo en la base de datos.
    */
    $conn = mysqli_select_db($conexion, $dbname);
    if (!$conn) {
        echo "Error en la base de datos.";
    }
    /*Búsqueda de registros
     * 
     */
    $registros = mysqli_query($conexion, "select codigo from alumnos
                        where mail='$mail'") or
        die("Problemas en el select:" . mysqli_error($conexion));

    /**
     * LLamada al store produre.
     */
    if ($reg = mysqli_fetch_array($registros)) {
        mysqli_query($conexion, $sentencia) or
            die("Problemas en el delete:" . mysqli_error($conexion));
        echo "Se efectuó el borrado del alumno con dicho mail.";
    } else {
        echo "No existe un alumno con ese mail.";
    }
    mysqli_close($conexion);

    ?>


</body>

</html>