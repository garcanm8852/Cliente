<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <title>Ejercicio 25 (Update)</title>
</head>

<body>
    <div class="container bg-primary text-light rounded-bottom intro ">
        <div class="row">
            <div class="col-md-12">
                <h1>Fase 2 - Ejercicio 25 (Update)</h1>
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
    $username = "update";
    $password = "1ESQmsYKlyQlpPfS";
    $mailNuevo = $_REQUEST["mailNuevo"];
    $mailAntiguo = $_REQUEST["mailAntiguo"];
    $sentencia = "call modificarMail('$mailNuevo','$mailAntiguo')";
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
    mysqli_query($conexion, $sentencia) or
        die("Problemas en el update:" . mysqli_error($conexion));
    echo "Se efectuó la modificación del alumno con dicho mail.";

    ?>



</body>

</html>