<html>

<head>
    <title>Problema</title>
</head>

<body>

    <?php
    $cantidadJamon = $_REQUEST['cantjamonqueso'];
    $CantidadNapo = $_REQUEST['cantnapolitana'];
    $CantidadMuza = $_REQUEST["cantmuzzarella"];
    $precioJamon = ($CantidadNapo * 4.75);
    $precioNapo = ($CantidadNapo * 5.25);
    $precioMuza = ($CantidadMuza * 5.50);
    $precioTotal = $precioJamon + $precioNapo + $precioMuza;

    $ar = fopen("datos.txt", "a") or
        die("Problemas en la creacion");
    fputs($ar, "Nombre:");
    fputs($ar, $_REQUEST['nombre']);
    fputs($ar, "\n");
    fputs($ar, "Dirección:");
    fputs($ar, $_REQUEST['direccion']);
    fputs($ar, "\n");
    if (isset($_REQUEST['jamonqueso'])) {
        fputs($ar, "Cantidad de Jamón y Queso:");
        fputs($ar, $cantidadJamon);
        fputs($ar, "\n");
        fputs($ar, "Precio: ");
        fputs($ar, $precioJamon);
        fputs($ar, "€");
        fputs($ar, "\n");
    }
    if (isset($_REQUEST['napolitana'])) {
        fputs($ar, "Cantidad de Napolitana:");
        fputs($ar, $CantidadNapo);
        fputs($ar, "\n");
        fputs($ar, "Precio: ");
        fputs($ar, $precioNapo);
        fputs($ar, "€");
        fputs($ar, "\n");
    }
    if (isset($_REQUEST['muzzarella'])) {
        fputs($ar, "Cantidad de Muzzarella:");
        fputs($ar, $CantidadMuza);
        fputs($ar, "\n");
        fputs($ar, "Precio: ");
        fputs($ar, $precioMuza);
        fputs($ar, "€");

        fputs($ar, "\n");
    }

    fputs($ar, "--------------------------------------------------------");
    fputs($ar, "\n");
    fputs($ar, "Precio final del pedido:");
    fputs($ar, $precioTotal);
    fputs($ar, "€");
    fputs($ar, "\n");
    fputs($ar, "--------------------------------------------------------");
    fputs($ar, "\n");
    fclose($ar);
    echo "El pedido se cargó correctamente.";
    ?>

</body>

</html>