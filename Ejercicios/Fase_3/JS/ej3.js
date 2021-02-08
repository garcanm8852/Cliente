function ejercicio4() {
    /**
     * 4. Escriba una función de JavaScript para extraer un número específico de
     * caracteres de una cadena.
     */

    let cadena = prompt("Introduce la cadena de texto.", "");
    let numero = parseInt(prompt("Introduce el número de caracteres a extraer.", ""));
    let subcadena = cadena.substring(0, numero);
    alert(subcadena);

}

function ejercicio6() {
    /**
     * 6. Escriba una función de JavaScript para ocultar direcciones de correo
     * electrónico y protegerlas de usuarios no autorizados.
     */

    let correo = prompt("Introduzca su correo electrónico.", "");
    let dominio = correo.split("@")[1];
    let comienzo = correo.substring(0, 3) + "...";
    let correoProtegido = comienzo + "@" + dominio;
    alert(correoProtegido);
}

function ejercicio9() {
    /**
     * 9. Escriba una función de JavaScript para poner en mayúscula la primera letra
     * de cada palabra en una cadena */

    let frase = prompt("Introduzca una cadena de texto.", "");
    palabras = frase.split(" ");
    let numPalabras = frase.split(" ").length;
    for (let i = 0; i < numPalabras; i++) {
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);

    }

    for (let j = 0; j < palabras.length; j++) {
        alert(palabras[j]);
    }
}

function ejercicio14() {

    /**
     * 14. Escriba una función de JavaScript para insertar una cadena dentro de una
     * cadena en una posición particular (el valor predeterminado es 1).
     */

    let cadena1 = prompt("Introduce la cadena.");
    let cadena2 = prompt("Introduce la cadena.");
    let posicion = parseInt(prompt("Introduce la posición.")) - 1;

    let tamanocadena = parseInt(cadena1.split(" ").length)
    let end = tamanocadena - (tamanocadena - posicion);
    let inicio = "";
    let fin = " ";
    let cadenaFinal;

    for (let i = 0; i < posicion; i++) {
        inicio = inicio + cadena1.split(" ")[i] + " ";
    }


    for (let j = end; j < tamanocadena; j++) {
        fin = fin + cadena1.split(" ")[j] + " ";
    }

    cadenaFinal = inicio + cadena2 + fin;

    alert(cadenaFinal);

}

function ejercicio18() {
    /**
     * 18. Escriba una función de JavaScript para contar la aparición de una
     * subcadena en una cadena.
     */
    let cadena = prompt("Introduzca la frase");
    let subcadena = prompt("Busqueda");
    let contador = cadena.split(subcadena).length - 1;
    alert(contador);
}

function ejercicio29(){
    /**
     * 29. Escriba una función de JavaScript para encontrar una palabra dentro de
     * una cadena.
     */
    let cadena = prompt("Introduzca la frase");
    let subcadena = prompt("Busqueda");
    let contador = 0;
    
    for (let index = 0; index <= cadena.split(" ").length; index++) {
        if (subcadena === cadena.split(" ")[index]) {
            contador++;
        }
    }
    alert("'" +subcadena + "' se ha encontrado " + contador + " veces");

}