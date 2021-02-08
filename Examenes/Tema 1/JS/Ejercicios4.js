function ejercicio4a(n1, n2, Op) {
    let numero1 = n1;
    let numero2 = n2;
    let Operacion = Op.trim().toLowerCase();
    let resto;

    switch (Operacion) {

        case "resta":
            numero1 -= numero2;
            alert(numero1);
            return numero1;
            break;
        case "division":
            let contador = 0;
            while(numero2<=numero1){
                numero1-=numero2;
                contador = contador + 1;
            }

            alert("Resultado: " + contador + "\nResto: " + numero1);
            break;
        default:
            alert("Las operaciones disponibles solo son Resta o Division.")
            break;
    }
}

function ejercicio4b(p1, p2, p3) {
    let paises = [p1, p2, p3];
    let contador = 0;
    let Mayor = "";

    for (let i = 0; i < paises.length; i++) {
        if (Mayor.length < paises[i].length) {
            Mayor = paises[i];
        }
    }

    Mayor = Mayor.toUpperCase();
    alert(Mayor);
    return Mayor;
}

