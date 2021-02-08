<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php
    if ($_REQUEST['nValor1'] == null || $_REQUEST['nValor2'] == null) {
        echo "    <title>Operación fallida</title>
";
    } else {
        echo "    <title>Resultado</title>
        ";
    }
    ?>
</head>



<body>
    <?php
    $valor1 = $_REQUEST['nValor1'];
    $valor2 = $_REQUEST['nValor2'];
    $operacion = $_REQUEST['nAccion'];

    switch ($operacion) {
        case 'Sumar':
            echo "<p>El resultado es : </p>
        ";
            echo ($valor1 + $valor2);
            break;
        case 'Restar':
            echo "<p>El resultado es : </p>
        ";
            echo ($valor1 - $valor2);
            break;

        case 'Multiplicar':
            echo "<p>El resultado es : </p>
        ";
            echo ($valor1 * $valor2);
            break;

        case 'Dividir':
            echo "<p>El resultado es : </p>
        ";
            echo ($valor1 / $valor2);
            break;
    }

    ?>
</body>

</html>