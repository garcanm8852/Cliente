
function ejercicio8() {
    /*
    *8. Escriba un programa JavaScript en el que el programa tome un número entero
    *aleatorio entre 1 y 10, luego se le pedirá al usuario que ingrese un número
    *aproximado. Si la entrada del usuario coincide con el número de conjetura, el
    *programa mostrará un mensaje "Buen trabajo"; de lo contrario, mostrará un mensaje
    *"No coincide".
    */

    let numAlea = parseInt(Math.random() * 10 + 1);
    alert(numAlea);
    let numUsu = parseInt(prompt("Por favor introduzca el número que ha pensado."));

    if (numAlea === numUsu) {
        alert("Buen Trabajo");
    } else {
        alert("No coincide.");
    }
}

function ejercicio9() {
    /**
     * 9. Escriba un programa JavaScript para calcular los días que quedan hasta la
     * próxima Navidad.
    */

    let fechaActual = moment('2020-10-22');
    let fechaNavidad = moment('2020-12-25');
    let dias = fechaNavidad.diff(fechaActual, 'days');
    alert("Quedán " + dias + " días para navidad.");
}

function ejercicio10() {

    /*10. Escriba un programa JavaScript para calcular la multiplicación y división de dos
    *números (entrada del usuario).
    */

    let numero1 = parseInt(prompt("Introduzca el primer número."));
    let numero2 = parseInt(prompt("Introduzca el segundo número."));

    alert("Operación 1: " + numero1 + " x " + numero2 + " = " + (numero1 * numero2));
    alert("Operación 2: " + numero1 + " / " + numero2 + " = " + (numero1 / numero2));

}

function ejercicio11() {

    /**
     * 11. Escriba un programa JavaScript para convertir temperaturas desde y hacia
    *Celsius, Fahrenheit.
    *[Fórmula: c / 5 = (f-32) / 9 [donde c = temperatura en Celsius yf = temperatura en
    *Fahrenheit]
    *Salida esperada :
    *60 ° C es 140 ° F
    *45 ° F es 7.222222222222222 ° C
    */

    let gradoCelsius = parseInt(prompt("Introduzca los grados Celsius a convertir en Fahrenheit."));
    alert(gradoCelsius + "º Celsius son " + ((((gradoCelsius * 9) / 5) + 32)) + "º grados Fahnrenheit.");

    let gradosFahrenheit = parseInt(prompt("Introduzca los grados Fahrenheit a convertir en Ceslius."));
    alert(gradosFahrenheit + "º Fahnrenheit son " + (((gradosFahrenheit - 32) * 5) / 9) + "º grados Celsius.");

}

function ejercicio12() {
    /**
     * 12. Escriba un programa JavaScript para obtener la URL del sitio web (página de carga).
    */
    let url = window.location;
    alert(url);

}

function ejercicio13(parametro) {
    /**
     * 13. Escriba un ejercicio de JavaScript para crear una variable con un nombre
     * definido por el usuario.
    */

    let variable = parametro;
    alert(variable);
}

function ejercicio14() {
    /**
     * 14. Escriba un ejercicio de JavaScript para obtener la extensión de un nombre de
     * archivo. 
     */

    let fichero1 = "nota.txt";
    alert("La extensión del archivo es " + fichero1.split('.').pop());
}

function ejercicio15() {

    /**
     * 15. Escriba un programa JavaScript para obtener la diferencia entre un número dado
     * y 13, si el número es mayor que 13 devuelva el doble de la diferencia absoluta.
     */

    let numUsu = parseInt(prompt("Introduzca un número."));
    if (numUsu < 13) {
        alert("La diferencia entre " + numUsu + " y " + "13 es " + (13 - numUsu));
    } else {
        alert("La diferencia absolute es " + Math.abs(13 - numUsu) * 2);
    }
}

function ejercicio16() {
    /**
     * 16. Escriba un programa JavaScript para calcular la suma de los dos números
     * enteros dados. Si los dos valores son iguales, devuelve el triple de su suma.
     */

    let numero1 = parseInt(prompt("Introduzca el primer número."));
    let numero2 = parseInt(prompt("Introduzca el segundo número."));

    if (numero1 === numero2) {
        alert("Los dos números son iguales. El resultado es: " + ((numero1 + numero2) * 3));
    } else {
        alert("El resultado es: " + (numero1 + numero2));
    }

}

function ejercicio17() {
    /**
     * 17. Escriba un programa JavaScript para calcular la diferencia absoluta entre un
     * número especificado y 19. Devuelve el triple de su diferencia absoluta si el número
     * especificado es mayor que 19.
     * */

    let numUsu = Math.abs(parseInt(prompt("Introduzca un número.")));
    if (numUsu < 19) {
        alert("La diferencia entre " + numUsu + " y 19 es " + (19 - numUsu));
    } else {
        alert("El resulado es " + Math.abs(((19 - numUsu)*3)));
    }
}

function ejercicio18() {
    /**
     * 18. Escriba un programa JavaScript para verificar dos números dados y devolver
     * verdadero si uno de los números es 50 o si su suma es 50.
     */

    let numero1 = parseInt(prompt("Introduzca el primer número"));
    let numero2 = parseInt(prompt("Introduzca el segundo número"));
    let verificado = false;
    if (numero1===50 || numero2===50 || (numero1 + numero2) === 50) {
        verificado = true;
        alert(true);
    } else {
        
    }

}

function ejercicio28(){
    /**
     * 28. Escriba un programa JavaScript para verificar si dos valores enteros dados están
     * en el rango 50..99 (inclusive). Devuelve verdadero si alguno de ellos está en dicho
     * rango
    */

   let numero1 = parseInt(prompt("Introduzca el primer número"));
   let numero2 = parseInt(prompt("Introduzca el segundo número"));
   let verificado = false;

   for (let i = 50; i < 100; i++) {
    if (numero1 === i || numero2 === i) {
        verificado = true;
    }
   }
   alert("Resultado: " + verificado);

}