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
                <ul>
                    <?php

                    $host = "localhost";
                    $dbname = "base1";
                    $username = "insert";
                    $password = "5dBNNMY8vXdd8ZDn";

                    $link = mysqli_connect($host, $username, $password);
                    if (mysqli_connect_errno()) {
                        echo "connection error";
                        exit();
                    }

                    $conn = mysqli_select_db($link, $dbname);
                    if (!$conn) {
                        echo "error de bd";
                    }

                    $result = mysqli_query($link, 'call consultarAlumnos();');

                    if (!$result) {
                        echo "error de procedure";
                        exit;
                    }

                    while ($aTmp = mysqli_fetch_array($result, MYSQLI_NUM)) {
                        echo  "<li>Codigo: " . $aTmp[0] . "</li>" . "<br>";
                        echo "<li>Nombre: " . $aTmp[1] . "</li>" . "<br>";
                        echo "<li>Mail: " . $aTmp[2] . "</li>" . "<br>";
                        echo "<li>Curso: ";
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
                        echo "</li>";
                        echo "<br>";
                        echo "<hr>";
                    }
                    ?>
                </ul>
            </div>
        </div>
    </div>
</body>

</html>